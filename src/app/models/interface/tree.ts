import {IconNames} from '../enums/icon-names.enum';
import {EntityTypeEnum} from '../enums/entity-type.enum';


export interface ITreeNode {
  data?: any;
  parent?: ITreeNode;
  children?: Array<ITreeNode>;
  nodeDisplayName?: string;
  nodeIcon?: IconNames;
  type?: EntityTypeEnum;
  isLeaf?: boolean;
  expanded?: boolean;
  disabled?: boolean;
  selected?: boolean;
}

export type ITree = ITreeNode[];


export interface ExpandEvent {
  currentExpandNode: ITreeNode;
  event: PointerEvent;
}
