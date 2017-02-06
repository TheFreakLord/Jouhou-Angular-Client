/* tslint:disable */
import {
  Post
} from '../index';

declare var Object: any;
export interface BoardInterface {
  name: string;
  short: string;
  id?: number;
  posts?: Post[];
}

export class Board implements BoardInterface {
  name: string;
  short: string;
  id: number;
  posts: Post[];
  constructor(data?: BoardInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Board`.
   */
  public static getModelName() {
    return "Board";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Board for dynamic purposes.
  **/
  public static factory(data: BoardInterface): Board{
    return new Board(data);
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
      name: 'Board',
      plural: 'Boards',
      properties: {
        name: {
          name: 'name',
          type: 'string'
        },
        short: {
          name: 'short',
          type: 'string'
        },
        id: {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        posts: {
          name: 'posts',
          type: 'Post[]',
          model: 'Post'
        },
      }
    }
  }
}
