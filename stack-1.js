let stack = [];
let top = -1;

function push(value) {
    top = top + 1;
    stack[top] = value;
}

function pop() {

    if( top == -1) 
        return 'Stack is empty';
    removed = stack[top];
    top = top - 1;
    return removed
}

function printStack() {

    if( top == -1)
        return 'Stack is empty';
    let result = '';

    for(let i=0; i<=top; i++) {
        result += stack[i];
        if(i<top) result += ' > ';
    }
    return result;
}

function peek() {
    if( top == -1)
        return 'Stack is empty';
    return stack[top];
}

// push(10);
// push(20);
// push(30);
// push(40);
// push(50);
console.log("initial stack : ",stack);
console.log("pop : ",pop());
console.log("print stack: ",printStack());
console.log("peek : ",peek());