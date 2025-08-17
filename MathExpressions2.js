var a = 12

document.writeln(`Result:
    The Value of a is: ${a}
    The total value of ++a is: ${++a}
    Now the value of a is ${++a}
    The value of a++ is: ${++a}
    Now the value of a++ is ${a++}
    The Value of --a is ${--a}
    Now the value of a is ${--a}
    The Value of a-- is ${a--}
    Now the value of a is ${a--}
    `)


    var a = 2 
    var b =1
     var result = --a - --b + ++b + b--
     document.writeln(`The result is ${result}
        --a = ${--a}
        --a - --b${--a - --b}
        --a - --b + ++b${--a - --b + ++b}
        --a - --b + ++b + b-- ${--a - --b + ++b + b--}`)
     

var num = +prompt("write any number for multiplication table",5)

document.writeln(`Table of ${num}
    ${num} X 1 = ${num*1}
    ${num} X 2 = ${num*1}
    ${num} X 3 = ${num*1}
    ${num} X 4 = ${num*1}
    ${num} X 5 = ${num*1}
    ${num} X 6 = ${num*1}
    ${num} X 7 = ${num*1}
    ${num} X 8 = ${num*1}
    ${num} X 9 = ${num*1}
    ${num} X 10 = ${num*1}
    `)