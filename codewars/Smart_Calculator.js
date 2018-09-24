class SmartCalculator {
    constructor(initialValue) {
        this.stack=[initialValue];
        this.res=initialValue;
    }
    count(){
        for(let i = this.stack.length-1;i>=0;--i){
            if(this.stack[i]==='^'){
                this.stack[i-1]=Math.pow(this.stack[i-1],this.stack[i+1]);
                // console.log("Before splicing:");
                // console.log(this.stack);
                this.stack.splice(i,2);
                i = this.stack.length-1;
                // console.log("After splicing:");
                // console.log(this.stack);
            }
        }
        // console.log(this.stack);
        for(let i = 0;i<this.stack.length;++i){
            if(this.stack[i]==='*'){
                this.stack[i-1]*=this.stack[i+1];
                // console.log("Before splicing:");
                // console.log(this.stack);
                this.stack.splice(i,2);
                i = 0;
                // console.log("After splicing:");
                // console.log(this.stack);
            }
            else if(this.stack[i]==='/'){
                this.stack[i-1]/=this.stack[i+1];
                // console.log("Before splicing:");
                // console.log(this.stack);
                this.stack.splice(i,2);
                i =0;
                // console.log("After splicing:");
                // console.log(this.stack);
            }
        }
        // console.log(this.stack);
        for(let i = 0;i<this.stack.length;++i){
            if(this.stack[i]==='+'){
                this.stack[i-1]+=this.stack[i+1];
                // console.log("Before splicing:");
                // console.log(this.stack);
                this.stack.splice(i,2);
                i =0;
                // console.log("After splicing:");
                // console.log(this.stack);
            }
            else if(this.stack[i]==='-'){
                this.stack[i-1]-=this.stack[i+1];
                // console.log("Before splicing:");
                // console.log(this.stack);
                this.stack.splice(i,2);
                i =0;
                // console.log("After splicing:");
                // console.log(this.stack);
            }
        }

        return this.stack[0];
    }
    valueOf(){
        let a = this.count();
        return a;
    }
    toString(){
        let a = this.count();
        return a;
    }
    add(number) {
        // your implementation
        this.stack.push('+');
        this.stack.push(number);
         // console.log(this.res);
        return this;
    }

    subtract(number) {
        // your implementation
        this.stack.push('-');
        this.stack.push(number);
         // console.log(this.res);
        return this;
    }

    multiply(number) {
        this.stack.push('*');
        this.stack.push(number);
         // console.log(this.res);
        return this;
    }

    devide(number) {
        this.stack.push('/');
        this.stack.push(number);
         // console.log(this.res);
        return this;
    }

    pow(number) {
        this.stack.push('^');
        this.stack.push(number);
         // console.log(this.res);
        return this;
    }
}
let calculator = new SmartCalculator(7);
let value = calculator
    .multiply(2)
    .subtract(26)
    .pow(1)
    .add(78)
    .subtract(81)
    .multiply(1);
console.log(value.valueOf());
let calculator1 = new SmartCalculator(10);

const value1 = calculator1
    .add(73)
    .multiply(1)
    .multiply(2)
    .pow(1)
    .pow(2)
    .multiply(1);
console.log(value1.valueOf());
let calculator2 = new SmartCalculator(7);

const value2 = calculator2
    .add(69)
    .multiply(2)
    .multiply(2)
    .multiply(2)
    .pow(2)
    .subtract(28)
    .subtract(78)
    .pow(2);
console.log(value2.valueOf());
