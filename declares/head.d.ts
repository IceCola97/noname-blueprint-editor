// 定义编辑器相关概念的接口声明文件
// 仅定义DTO对象，UI实现中应该定义额外的VO来引用这些DTO

// TODO: 允许把choose类函数作为分支节点使用

/*
蓝图项目总览:
    项目
        声明项 (角色)
        内容项 (卡牌、主动技能、被动技能、mod技能以及复合技能)
            元信息结构节点
            时机结构节点
            各种函数结构节点
                入口执行流节点
                其他执行流节点
                出口执行流节点
        其他项 (暂未设计，但是基本上是函数)

执行上下文、执行流、事件设计:
    执行上下文:
        1. 当任意函数开始执行时，当前的函数作为执行上下文入栈
        2. 当出口节点被执行时，此时退出的是当前执行上下文指向的函数

    执行流:
        1. 当任意函数开始执行时自动分配一条主执行流
        2. 执行流经过If等分支节点可能被分为多个主执行流分支
        3. 在有返回值的函数中，任意一条主执行流都必须执行到出口节点，并在此之前出口节点的输入端口要接收一次输入
        4. 执行流可以被暂停，此时此执行流及所有父执行流都将被暂停执行
        5. 永远只有一条正在执行的执行流
        6. 所有执行流的创建绑定在当前执行上下文中，当执行流执行了出口节点时，所有未执行完成的执行流都将销毁

    子执行流:
        1. 当经过循环、序列等节点时，执行流可能会暂停，并交由这些节点发出它的子执行流
        2. 子执行流到达出口节点的要求和效果与主执行流一致
        3. 子执行流可以被中断，即中途退出并停止执行，此时回到它的父执行流

    事件:
        1. 事件触发是一条单步指令，不会进行任何的执行流控制，触发的回调是一个异步的执行流
        2. 事件回调是一个特殊的入口节点，由系统发出或者当前函数的事件触发，仅正在执行的函数会接收，创建事件执行流时使用当前正在执行的函数上下文
        3. 如果执行流触发了一个事件，那么事件会在触发的执行流完成或暂停后立即执行，优先于返回父执行流
        4. 如果系统发出了事件，则等待当前执行流完成或暂停后立即执行，同样优先于返回父执行流
*/