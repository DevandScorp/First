class Sorter {
    constructor() {
        this.arr = [];
        this.sorter_method = function(a,b){
            if(a>b) return 1;
            if(a<b) return -1;
            return 0;
        }
    }

    add(element) {
        this.arr.push(element);
    }

    at(index) {
        return this.arr[index];
    }

    get length() {
        return this.arr.length;
    }

    toArray() {
        return this.arr;
    }

    sort(indices) {
        indices.sort((a,b)=>a>=b);
        let temp = [];
        for(let i of indices){
            temp.push(this.arr[i]);
        }
        temp.sort(this.sorter_method);
        let j = 0;
        for(let i of indices){
            this.arr[i] = temp[j++];
        }
    }

    setComparator(compareFunction) {
        this.sorter_method = compareFunction;
    }
}
const sorter = new Sorter();
sorter.add(6);
sorter.add(5);
sorter.sort([0, 1]);

sorter.add(2);
sorter.add(1);
sorter.sort([1, 0]);

console.log(sorter.toArray(), [5, 6, 2, 1]);
console.log(sorter.length, 4);
console.log(sorter.at(0), 5);
console.log(sorter.at(1), 6);
console.log(sorter.at(2), 2);
console.log(sorter.at(3), 1);
