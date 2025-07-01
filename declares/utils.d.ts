/// <reference path="./dataType.d.ts" />
/// <reference path="./port.d.ts" />

// ### 工具类型

/**
 * 表示参数的数据类型集合
 * 
 * 可以使用@see {InputPorts} 和@see {EntryOutputPorts} 转换成端口数组类型
 */
type ArgumentDataTypes = readonly DataType[];

/**
 * 表示返回值的数据类型
 * 
 * 可以使用@see {OutputPorts} 和@see {EndInputPorts} 转换成端口数组类型
 */
type ReturnDataType = DataType;

/**
 * 将数据类型数组转换成对应类型的输入端口数组
 */
type InputPorts<TTypes extends ArgumentDataTypes> = 
    TTypes extends readonly [] 
        ? readonly [] :
    TTypes extends readonly [infer THead extends DataType, ...infer TTail extends ArgumentDataTypes]
        ? readonly [InputPort<THead>, ...InputPorts<TTail>] :
    TTypes extends ReadonlyArray<infer TType extends DataType> 
        ? readonly InputPort<TType>[]
        : never;

/**
 * 将数据类型转换成对应类型的输出端口数组
 */
type OutputPorts<TTypes extends ArgumentDataTypes> = 
    TTypes extends readonly [] 
        ? readonly [] :
    TTypes extends readonly [infer THead extends DataType, ...infer TTail extends ArgumentDataTypes]
        ? readonly [OutputPort<THead>, ...OutputPorts<TTail>] :
    TTypes extends ReadonlyArray<infer TType extends DataType> 
        ? readonly OutputPort<TType>[]
        : never;

/**
 * 将数据类型数组转换成对应类型的输出端口数组
 */
type EntryOutputPorts<TTypes extends ArgumentDataTypes> = 
    TTypes extends readonly [] 
        ? readonly [] :
    TTypes extends readonly [infer THead extends DataType, ...infer TTail extends ArgumentDataTypes]
        ? readonly [OutputPort<THead>, ...EntryOutputPorts<TTail>] :
    TTypes extends ReadonlyArray<infer TType extends DataType> 
        ? readonly OutputPort<TType>[]
        : never;

/**
 * 将数据类型转换成对应类型的输入端口数组
 */
type EndInputPorts<TReturn extends ReturnDataType> = TReturn extends VoidType
    ? readonly [] : readonly [InputPort<TReturn>];
    
/**
 * 指定函数的不定数量与类型的输入端口
 */
type FunctionInputPorts = readonly InputPort<DataType>[];

/**
 * 指定函数的不定类型的输出端口
 */
type FunctionOutputPorts = readonly [OutputPort<DataType>] | readonly [];