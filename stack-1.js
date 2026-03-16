let stack = [];
let top = -1;

function push(value) {
    top = top + 1;
    stack[top] = value;
}

function pop() {
    removed = stack[top];
    top = top - 1;
    return removed
}

push(10);
push(20);
push(30);
push(40);
push(50);
console.log("stack : ",stack);
console.log("pop : ",pop());