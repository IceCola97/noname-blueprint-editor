/**
 * 表示一个函数
 * 
 * @abstract
 */
interface FunctionItem<TArguments extends ArgumentDataTypes, TReturn extends ReturnDataType> extends ContentItem {
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
 * 表示由原生代码编写的函数
 * 
 * @abstract
 */
interface CodeFunctionItem<TArguments extends ArgumentDataTypes, TReturn extends ReturnDataType>
    extends FunctionItem<TArguments, TReturn> {
    /**
     * 表示当前函数的代码内容
     */
    code: string;
}

/**
 * 表示编辑器生成的函数结构节点
 * 
 * @abstract
 */
interface FlowFunctionItem<TArguments extends ArgumentDataTypes, TReturn extends ReturnDataType>
    extends FunctionItem<TArguments, TReturn> {
    /**
     * 表示蓝图执行流的入口节点
     */
    entryNode: EntryNode<TArguments>;
    /**
     * 表示蓝图执行流的出口节点
     */
    endNode: EndNode<TReturn>;
}

interface BuiltinFunction<TSymbol extends string, TArguments extends ArgumentDataTypes, TReturn extends ReturnDataType>
    extends CodeFunctionItem<TArguments, TReturn> {
    /**
     * 表示内建函数的名称
     */
    symbol: TSymbol;
    /**
     * 内建函数标志
     */
    builtin: true;
}

/**
 * 表示一个编辑器运行时确定参数参数与返回值类型的函数
 * 
 * @abstract
 */
interface UserFunction extends FunctionItem<ArgumentDataTypes, ReturnDataType> {}

/**
 * 表示通过编辑器生成的用户定义的函数
 */
interface UserFlowFunction extends UserFunction, FlowFunctionItem<ArgumentDataTypes, ReturnDataType> {}

/**
 * 表示一个用户定义函数
 * 由用户自行管理类型与返回值，但可能出现编辑器无法预料的错误
 */
interface UserCodeFunction extends UserFunction, CodeFunctionItem<ArgumentDataTypes, ReturnDataType> {}