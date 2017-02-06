/* tslint:disable */
import { Injectable } from '@angular/core';
import { Post } from '../../models/Post';
import { Comment } from '../../models/Comment';
import { Board } from '../../models/Board';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    Post: Post,
    Comment: Comment,
    Board: Board,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
