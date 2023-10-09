/* 1. Global Execution <-- this

2. Memory Phase <-- memory is executed here 

3. Execution Phase <-- actual value is executed

Example :

let val1 = 10
let val2 = 5
function addNum(num1, num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(10,2)

first Global execution 

then in memory phase

val1 = undefined
val2 = undefined
addNum = defination
result1 = undefined
result2 = undefined

then in executin Phase

val1 = 10
val2 = 5
result = 15 --> addNum = {
    new variable environment + Execution thread

    Memory Phase: 
    val1 = undefined
    val2 = undefined
    total = undefined

    Executional Context
    val1 = 10
    val2 = 5
    total = 15
}  --- Once complete it gets deleted

result = 12 --> addNum = {
    new variable environment + Execution thread

    Memory Phase: 
    val1 = undefined
    val2 = undefined
    total = undefined

    Executional Context
    val1 = 10
    val2 = 2
    total = 12
}  --- Once complete it gets deleted

Call Stack ---> Works on lifo principles, 
{
    3. three()
    2. two()
    1. one()
    0. Global Execution
}
*/