/**
 * 表示函数结构节点
 * 
 * @abstract
 */
interface FunctionNode<TArguments extends ArgumentDataTypes, TReturn extends ReturnDataType> {
    /**
     * 表示输入的参数类型
     */
    inputs: TArguments;
    /**
     * 表示输出的参数类型
     */
    outputs: TReturn;
}

/**
 * 表示编辑器生成的函数结构节点
 * 
 * @abstract
 */
interface FlowFunctionNode<TArguments extends ArgumentDataTypes, TReturn extends ReturnDataType> extends FunctionNode<TArguments, TReturn> {
    /**
     * 表示蓝图执行流的入口节点
     */
    entryNode: EntryNode<TArguments>;
    /**
     * 表示蓝图执行流的出口节点
     */
    endNode: EndNode<TReturn>;
}

/**
 * 表示一个编辑器运行时确定参数参数与返回值类型的函数
 * 
 * 同时也表示用户在当前技能或牌中声明的一个自定义函数
 * 
 * @abstract
 */
interface UserFunctionNode extends FunctionNode<ArgumentDataTypes, ReturnDataType> {
    /**
     * 表示函数的引用标识符
     * 
     * 调用函数应该使用此项
     */
    symbol: string;
}

/**
 * 表示通过编辑器生成的用户定义的函数
 */
interface UserFlowFunctionNode extends UserFunctionNode, FlowFunctionNode<ArgumentDataTypes, ReturnDataType> {}

/**
 * 表示一个包含JavaScript函数代码的函数
 * 
 * 此函数是一个用户定义函数
 * 由用户自行管理类型与返回值，但可能出现编辑器无法预料的错误
 */
interface UserCodeFunctionNode extends UserFunctionNode {
    /**
     * 表示当前代码节点的内容
     */
    code: string;
}