function thunk(fn ,n) {
    if(fn(n)===0)return true;
    else return fn(n)
}


function trampoline(thunk) {
}

function isEven(n) {
    return (n === 0 ? true : isOdd(n - 1));
}

function isOdd(n) {
    return (n === 0 ? true : isEven(n - 1));
}