/* tslint:disable */
import {
  Post
} from '../index';

declare var Object: any;
export interface CommentInterface {
  content: string;
  creation: Date;
  id?: number;
  postId?: number;
  post?: Post;
}

export class Comment implements CommentInterface {
  content: string;
  creation: Date;
  id: number;
  postId: number;
  post: Post;
  constructor(data?: CommentInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Comment`.
   */
  public static getModelName() {
    return "Comment";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Comment for dynamic purposes.
  **/
  public static factory(data: CommentInterface): Comment{
    return new Comment(data);
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
      name: 'Comment',
      plural: 'Comments',
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
        postId: {
          name: 'postId',
          type: 'number'
        },
      },
      relations: {
        post: {
          name: 'post',
          type: 'Post',
          model: 'Post'
        },
      }
    }
  }
}
