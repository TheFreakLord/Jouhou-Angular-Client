/* tslint:disable */
import {
  Comment,
  Board
} from '../index';

declare var Object: any;
export interface PostInterface {
  content: string;
  creation: Date;
  id?: number;
  boardId?: number;
  comments?: Comment[];
  board?: Board;
}

export class Post implements PostInterface {
  content: string;
  creation: Date;
  id: number;
  boardId: number;
  comments: Comment[];
  board: Board;
  constructor(data?: PostInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Post`.
   */
  public static getModelName() {
    return "Post";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Post for dynamic purposes.
  **/
  public static factory(data: PostInterface): Post{
    return new Post(data);
  }  
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Post',
      plural: 'Posts',
      properties: {
        content: {
          name: 'content',
          type: 'string'
        },
        creation: {
          name: 'creation',
          type: 'Date'
        },
        id: {
          name: 'id',
          type: 'number'
        },
        boardId: {
          name: 'boardId',
          type: 'number'
        },
      },
      relations: {
        comments: {
          name: 'comments',
          type: 'Comment[]',
          model: 'Comment'
        },
        board: {
          name: 'board',
          type: 'Board',
          model: 'Board'
        },
      }
    }
  }
}
