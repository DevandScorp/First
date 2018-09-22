function check(str, bracketsConfig) {
    var stack = [];
    var flag;
    stack.push(str.charAt(0));
    for(let i = 1;i<str.length;++i){
        flag = true;
        for(let bracket of bracketsConfig){
            if(stack[stack.length-1]===bracket[0] && str.charAt(i)===bracket[1]){
                stack.pop();
                flag = false;
                break;
            }

        }
        if(flag)stack.push(str.charAt(i));
    }
    return stack.length === 0;

}
console.log(check('111115611111111222288888822225577877778775555666677777777776622222',[['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']]));