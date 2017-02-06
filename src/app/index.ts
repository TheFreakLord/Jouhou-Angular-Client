import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {UIView, UIRouterModule} from 'ui-router-ng2';
import {STATES, MyUIRouterConfig} from './routes';

import {CommonModule} from "@angular/common";

import {MainComponent} from './main';
import {BoardsComponent} from "./boards";
import {BoardComponent} from "./board";
import {PostComponent} from "./post";

import {SDKBrowserModule} from "./shared/sdk/index";
import {BoardApi, PostApi, CommentApi} from "./shared/sdk";


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    UIRouterModule.forRoot({states: STATES, configClass: MyUIRouterConfig}),
    SDKBrowserModule.forRoot()
  ],
  declarations: [
    MainComponent,
    BoardsComponent,
    BoardComponent,
    PostComponent
  ],
  bootstrap: [UIView]
})
export class AppModule {}
