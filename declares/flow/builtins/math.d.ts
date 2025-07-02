declare namespace BpMath {
    const PI: BuiltinFunction<'PI', [], NumberType>;
    const abs: BuiltinFunction<'abs', [NumberType], NumberType>;
    const min: BuiltinFunction<'min', [NumberType, NumberType], NumberType>;
    const max: BuiltinFunction<'max', [NumberType, NumberType], NumberType>;
}