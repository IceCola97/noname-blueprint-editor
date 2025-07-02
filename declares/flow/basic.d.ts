/// <reference path="../flowNode.d.ts" />

// #### 基本节点

/**
 * 表示一些基础单步指令节点
 */
interface BasicInstNode extends InstNode {}

/**
 * 调用自定义无返回值函数的节点
 */
interface SubroutineNode extends BasicInstNode {
    /**
     * 调用的函数标识符
     */
    symbol: string;
    /**
     * 调用的函数输入端口
     */
    inputs: FunctionInputPorts;
    /**
     * 调用的函数输出端口
     */
    outputs: readonly [];
}

interface ExpressionNode<TInputs extends ArgumentDataTypes, TOutput extends DataType> extends BasicInstNode {
    /**
     * 表达式参数输入端口
     */
    inputs: InputPorts<TInputs>;
    /**
     * 表达式结果输出端口
     */
    outputs: readonly [OutputPort<TOutput>];
    /**
     * 表示每个输入端口的名称，用于生成表达式
     */
    inputSymbols: string[];
    /**
     * 嵌入的表达式树
     */
    expression: Expression<TOutput>;
}