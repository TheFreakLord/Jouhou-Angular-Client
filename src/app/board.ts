import {Component, Input} from "@angular/core";
import {PostApi, BoardApi} from "./shared/sdk/services";
import {Post, Board} from "./shared/sdk/models";
import { BASE_URL, API_VERSION } from "./shared/base.url";
import {LoopBackConfig} from "./shared/sdk";
import {Transition} from "../../node_modules/ui-router-ng2/transition/transition";
import {StateService} from "ui-router-ng2";
var ago = require("s-ago");

@Component({
  selector: "board",
  template: require("./board.html")
})
export class BoardComponent {
  private modelName: String;
  private board: Board;
  private posts: Post[];
  newPostContent: String = "";
  private submitPost;
  private timeAgo: String[];

  constructor(private ss: StateService, private trans: Transition, private boardApi: BoardApi) {

    LoopBackConfig.setBaseURL(BASE_URL);
    LoopBackConfig.setApiVersion(API_VERSION);

    this.submitPost = function() {
      boardApi.createPosts(this.board.id, {content: this.newPostContent, creation: new Date()}).subscribe( (p: Post) => {
        this.posts = this.posts.reverse();
        this.posts.push(p);
        this.posts = this.posts.reverse();
        this.timeAgo = this.posts.map((p: Post) => ago(new Date(p.creation)));
      });
    }

    boardApi.find({"where": {"short": trans.params()["boardShort"]}}).subscribe( (b: [Board]) => {
      this.board = b[0];
      boardApi.getPosts(this.board.id, {limit: 50}).subscribe( (p: [Post]) => {
        this.posts = p.reverse();
        this.timeAgo = this.posts.map((p: Post) => ago(new Date(p.creation)));
      });
    } );

  }

}
