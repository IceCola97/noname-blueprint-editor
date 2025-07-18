import { IBpContentItem } from "./core";
import { IBpData } from "./dataType";
import { IBpEntryNode, IBpEndNode } from "./flowNode";
import { BpArgumentDataTypes, BpReturnDataType } from "./utils";

export interface IBpLocalInits {
    [symbol: string | symbol]: IBpData;
}

/**
 * 表示一个函数
 * 
 * @abstract
 */
export interface IBpFunction<TArguments extends BpArgumentDataTypes, TReturn extends BpReturnDataType> extends IBpContentItem {}

/**
 * 表示由原生代码编写的函数
 * 
 * @abstract
 */
export interface IBpCodeFunction<TArguments extends BpArgumentDataTypes, TReturn extends BpReturnDataType>
    extends IBpFunction<TArguments, TReturn> {
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
export interface IBpFlowFunction<TArguments extends BpArgumentDataTypes, TReturn extends BpReturnDataType>
    extends IBpFunction<TArguments, TReturn> {
    /**
     * 表示蓝图执行流的入口节点
     */
    readonly entryNode: IBpEntryNode<TArguments>;
    /**
     * 表示蓝图函数执行前要初始化的变量值
     */
    readonly localInits: IBpLocalInits;
}

/**
 * 表示一个内建函数
 */
export interface IBpBuiltinFunction<TSymbol extends string, TArguments extends BpArgumentDataTypes, TReturn extends BpReturnDataType>
    extends IBpCodeFunction<TArguments, TReturn> {
    /**
     * 表示内建函数的名称
     */
    symbol: TSymbol;
    /**
     * 内建函数标志
     */
    readonly builtin: true;
}

/**
 * 表示一个内建的链式函数
 */
export interface IBpBuiltinLinq<TSymbol extends string, TInput extends IBpData, TRest extends BpArgumentDataTypes, TOutput extends IBpData>
    extends IBpCodeFunction<[TInput, ...TRest], TOutput> {
    /**
     * 表示内建函数的名称
     */
    symbol: TSymbol;
    /**
     * 内建函数标志
     */
    readonly builtin: true;
}

/**
 * 表示一个编辑器运行时确定参数参数与返回值类型的函数
 * 
 * @abstract
 */
export interface IBpUserFunction extends IBpFunction<BpArgumentDataTypes, BpReturnDataType> {}

/**
 * 表示通过编辑器生成的用户定义的函数
 */
export interface IBpUserFlowFunction extends IBpUserFunction, IBpFlowFunction<BpArgumentDataTypes, BpReturnDataType> {}

/**
 * 表示一个用户定义函数
 * 由用户自行管理类型与返回值，但可能出现编辑器无法预料的错误
 */
export interface IBpUserCodeFunction extends IBpUserFunction, IBpCodeFunction<BpArgumentDataTypes, BpReturnDataType> {}