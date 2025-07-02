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
interface BinaryExpression<TType extends DataType> extends Expression<TType> {
    /**
     * 左侧表达式
     */
    left: Expression<TType>;
    /**
     * 右侧表达式
     */
    right: Expression<TType>;
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

declare enum BinaryOperator {
    /**
     * 值相等
     */
    Equal,
    /**
     * 值不相等
     */
    NotEqual,
    /**
     * 数值相加
     */
    NumberAdd,
    /**
     * 数值相减
     */
    NumberSubtract,
    /**
     * 数值相乘
     */
    NumberMultiply,
    /**
     * 数值相除
     */
    NumberDivide,
    /**
     * 数值取余
     */
    NumberModulus,
    /**
     * 数值的幂
     */
    NumberPower,
    /**
     * 数值小于比较
     */
    NumberLessThan,
    /**
     * 数值小于等于比较
     */
    NumberLessEqual,
    /**
     * 数值大于比较
     */
    NumberGreaterThan,
    /**
     * 数值大于等于比较
     */
    NumberGreaterEqual,
    /**
     * 字符串拼接
     */
    StringConcat,
    /**
     * 字符串小于比较
     */
    StringLessThan,
    /**
     * 字符串小于等于比较
     */
    StringLessEqual,
    /**
     * 字符串大于比较
     */
    StringGreaterThan,
    /**
     * 字符串大于等于比较
     */
    StringGreaterEqual,
    /**
     * 逻辑与
     */
    LogicalAnd,
    /**
     * 逻辑或
     */
    LogicalOr,
    /**
     * 位与
     */
    BitAnd,
    /**
     * 位或
     */
    BitOr,
    /**
     * 位异或
     */
    BitXor,
}

declare enum UnaryOperator {
    /**
     * 逻辑非
     */
    LogicalNot,
    /**
     * 位取反
     */
    BitNot,
    /**
     * 取负数
     */
    Negative,
}