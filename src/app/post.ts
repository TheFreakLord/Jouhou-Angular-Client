import {Component, Input} from "@angular/core";
import {PostApi, BoardApi} from "./shared/sdk/services";
import {Post, Comment} from "./shared/sdk/models";
import { BASE_URL, API_VERSION } from "./shared/base.url";
import {LoopBackConfig} from "./shared/sdk";
import {Transition} from "../../node_modules/ui-router-ng2/transition/transition";
var ago = require("s-ago");

@Component({
  selector: "post",
  template: require("./post.html")
})
export class PostComponent {

  private boardShort: String;
  private post: Post;
  private comments: Comment[];
  private timeAgo: String[];
  private postAgo: String;
  private newCommentContent: String = "";
  private submitComment: Function;

  constructor(private trans: Transition, private postApi: PostApi, private boardApi: BoardApi) {

    LoopBackConfig.setBaseURL(BASE_URL);
    LoopBackConfig.setApiVersion(API_VERSION);

    this.boardShort = trans.params()["boardShort"];

    postApi.findOne({where: {id: trans.params()["postId"]}}).subscribe( (p: Post) => {
      this.post = p;
      this.postAgo = ago(new Date(p.creation));
    });

    postApi.getComments(trans.params()["postId"], {limit: 50}).subscribe( (comments: [Comment]) => {
      this.comments = comments.reverse();
      this.timeAgo = this.comments.map( (c: Comment) => ago(new Date(c.creation)));
    });

    this.submitComment = function() {
      postApi.createComments(this.post.id, {content: this.newCommentContent, creation: new Date()}).subscribe( (com: Comment) => {
        this.comments = this.comments.reverse();
        this.comments.push(com);
        this.comments = this.comments.reverse();
        this.timeAgo = this.comments.map( (c: Comment) => ago(new Date(c.creation)));
        this.newCommentContent = "";
      });
    }

  }

}
