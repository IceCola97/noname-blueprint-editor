declare namespace BpString {
    const indexOf: BuiltinFunction<'indexOf', [TextType, TextType], NumberType>;
    const slice: BuiltinFunction<'slice', [TextType, NumberType, NumberType], TextType>;
    const split: BuiltinFunction<'split', [TextType, TextType], ArrayType<TextType>>;
}