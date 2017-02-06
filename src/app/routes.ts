import {Injectable, Injector} from '@angular/core';
import {UIRouter, Ng2StateDeclaration, Transition} from 'ui-router-ng2';

import {MainComponent} from './main';
import {BoardComponent} from "./board";
import {PostComponent} from "./post";

import {BoardApi} from "./shared/sdk";

export const STATES: Ng2StateDeclaration[] = [
  {
    name: 'main',
    url: '/',
    component: MainComponent
  },
  {
    name: "board",
    url: "/:boardShort",
    component: BoardComponent,
    params: {
      boardShort: {
        type: "string"
      }
    }
  },
  {
    name: "post",
    url: "/:boardShort/:postId",
    component: PostComponent
  }
];

@Injectable()
export class MyUIRouterConfig {
  configure(uiRouter: UIRouter, injector: Injector) {
    uiRouter.urlRouterProvider.otherwise('main');
  }
}
