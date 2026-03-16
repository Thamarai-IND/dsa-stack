// To code reverse the string value using stack approach

let str = 'Hello';
let top = -1;
let stack = [];
let removed = [];

function push(value) {
    top = top + 1;
    stack[top] = value;
}

function pop() {
    if( top == -1)
        return 'stack is empty';
    while(top != -1) {
        removed.push(stack[top]);
        top--;
    }
    return removed;
}

function stringReverse(value) {
    console.log("initial string: ",value)
    let length = value.length;
    for(let i=0; i<length; i++) {
        push(value[i]);
    }
    console.log("initial stack : ",stack);
    console.log("reverse stack : ", pop());
    let reverse = "";
    for(let i=0; i<removed.length; i++) {
        reverse += removed[i];
    }
    console.log("reverse string: ", reverse)
    
}
stringReverse(str);
