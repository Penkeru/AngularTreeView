import {ITreeNode} from '../interface/tree';
import {EntityToIconMapper, IconNames} from '../enums/icon-names.enum';
import {EntityTypeEnum, EntityTypeToChildCounterField, IEntity} from '../interface/IEntity';

export class TreeNode implements ITreeNode {
  public data: IEntity;
  public parent: ITreeNode;
  public children: Array<ITreeNode>;
  public nodeDisplayName: string;
  public nodeIcon: IconNames;
  public type: EntityTypeEnum;
  public isLeaf: boolean;
  public expanded: boolean;
  public disabled: boolean;
  public selected: boolean;

  constructor(data: IEntity, parent: ITreeNode = null, isDisabled: boolean = false) {
    this.data = data;
    this.parent = parent;
    this.type = data.type;
    this.nodeDisplayName = data.name;
    this.isLeaf = data[EntityTypeToChildCounterField.get(this.type)] === 0;
    this.expanded = false;
    this.selected = false;
    this.nodeIcon = EntityToIconMapper.get(this.type);
    this.disabled = isDisabled;
  }
}
