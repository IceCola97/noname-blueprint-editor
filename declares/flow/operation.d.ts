/// <reference path="../flowNode.d.ts" />

// #### 操作节点

/**
 * 表示一个游戏事件操作
 * 
 * @abstract
 */
interface OperationNode extends ComplexInstNode {
    outputs: readonly [OutputPort<GameEventType>];
}

// ##### 玩家操作节点

// ###### 牌移动
// 从${牌组A}中以牌是${正反面}向上的方式从${牌组A头尾部}开始移动${牌的要求}的${数量}张牌到${牌组B}

// interface MoveCardNode extends OperationNode {
//     inputs: InputPorts<[]>;
// }

interface PlayerDrawNode extends OperationNode {
    inputs: InputPorts<[PlayerType, NumberType]>;
}

// ...