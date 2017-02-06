import {Component, Input} from "@angular/core";
import {BoardApi} from "./shared/sdk/services";
import {Board} from "./shared/sdk/models";
import { BASE_URL, API_VERSION } from "./shared/base.url";
import {LoopBackConfig} from "./shared/sdk";

function chunck(arr: any, n: any): any[][] {
  return (Array(Math.ceil(arr.length/n)) as any).fill().map((_,i) => arr.slice(i*n,i*n+n));
}

function getRandom(list) {
  return list[Math.floor((Math.random()*list.length))];
}

function getRandomClass(): String {
  return getRandom(["is-primary", "is-info", "is-success", "is-warning", "is-danger"]);
}

@Component({
  selector: "boards",
  template: require("./boards.html")
})
export class BoardsComponent {
  private modelName: String;
  private boards: Board[][];
  private columns: Number;
  private colors: String[];

  constructor(private boardApi: BoardApi) {

    LoopBackConfig.setBaseURL(BASE_URL);
    LoopBackConfig.setApiVersion(API_VERSION);
    boardApi.find().subscribe((b: [Board]) => {
      this.boards = chunck(b, 3);
      this.colors = b.map(() => getRandomClass());
    });
    this.modelName = boardApi.getModelName() + "s";
  }

}
