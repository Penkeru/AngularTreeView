import {IconNames} from '../enums/icon-names.enum';
import {EntityTypeEnum, IEntity} from './IEntity';


export interface ITreeNode {
  data: IEntity;
  parent: ITreeNode;
  children?: Array<ITreeNode>;
  nodeDisplayName: string;
  nodeIcon?: IconNames;
  type: EntityTypeEnum;
  isLeaf: boolean;
  expanded: boolean;
  disabled: boolean;
  selected: boolean;
}




export interface ExpandEvent {
  currentExpandNode: ITreeNode;
  event: PointerEvent;
}
