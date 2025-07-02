// ##### 表达式

/**
 * 表示一个表达式
 * 
 * @abstract
 */
interface Expression<TType extends DataType> { }

/**
 * 表示一个数据输入的表达式
 */
interface InputExpression<TType extends DataType> extends Expression<TType> {
    /**
     * 指示当前表达式的数据输入端口
     */
    inputSymbol: string;
}

/**
 * 表示一个常量表达式
 */
interface ConstantExpression<TType extends BasicType> extends Expression<TType> {
    /**
     * 获取当前表达式的值
     */
    value: TType;
}

/**
 * 表示一个二元表达式
 */
interface BinaryExpression<TLeft extends DataType, TRight extends DataType, TResult extends DataType>
    extends Expression<TResult> {
    /**
     * 左侧表达式
     */
    left: Expression<TLeft>;
    /**
     * 右侧表达式
     */
    right: Expression<TRight>;
}

/**
 * 表示一个一元表达式
 */
interface UnaryExpression<TType extends DataType> extends Expression<TType> {
    /**
     * 表达式
     */
    expression: Expression<TType>;
}

/**
 * 表示一个函数调用表达式
 */
interface CallExpression<TType extends DataType> extends Expression<TType> {
    /**
     * 被调用的函数的标识符
     */
    symbol: string;
    /**
     * 函数的参数表达式
     */
    arguments: FunctionArguments;
}

declare const enum BinaryOperator {
    /**
     * 值相等
     */
    equal,
    /**
     * 值不相等
     */
    notEqual,
    /**
     * 数值相加
     */
    numberAdd,
    /**
     * 数值相减
     */
    numberSubtract,
    /**
     * 数值相乘
     */
    numberMultiply,
    /**
     * 数值相除
     */
    numberDivide,
    /**
     * 数值取余
     */
    numberModulus,
    /**
     * 数值的幂
     */
    numberPower,
    /**
     * 数值小于比较
     */
    numberLessThan,
    /**
     * 数值小于等于比较
     */
    numberLessEqual,
    /**
     * 数值大于比较
     */
    numberGreaterThan,
    /**
     * 数值大于等于比较
     */
    numberGreaterEqual,
    /**
     * 字符串拼接
     */
    stringConcat,
    /**
     * 字符串小于比较
     */
    stringLessThan,
    /**
     * 字符串小于等于比较
     */
    stringLessEqual,
    /**
     * 字符串大于比较
     */
    stringGreaterThan,
    /**
     * 字符串大于等于比较
     */
    stringGreaterEqual,
    /**
     * 逻辑与
     */
    logicalAnd,
    /**
     * 逻辑或
     */
    logicalOr,
    /**
     * 位与
     */
    bitAnd,
    /**
     * 位或
     */
    bitOr,
    /**
     * 位异或
     */
    bitXor,
}

declare const enum UnaryOperator {
    /**
     * 逻辑非
     */
    logicalNot,
    /**
     * 位取反
     */
    bitNot,
    /**
     * 取负数
     */
    negative,
    /**
     * 转换成字符串
     */
    toString,
    /**
     * 转换成数字
     */
    toNumber,
    /**
     * 转换成整数
     */
    toInteger,
    /**
     * 转换成布尔值
     */
    toBoolean,
}