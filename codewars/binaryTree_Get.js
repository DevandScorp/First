const tree = {
    value: 100,
    left: {
        value: 90,
        left: { value: 70 },
    },
    // right: {
    //     value: 120,
    //     left: {value: 110}
    // }
};

function recursion(tree) {
    const res = [];
    (function getResult(...trees) {
        let next = [];
        res.push(trees.map(a => a.value));
        trees.forEach(a => next.push(a.left, a.right));
        next = next.filter(a => typeof a !== 'undefined');
        if (!next.length) return res;
        getResult(...next);
        return res;
    }(tree));
    return res;
}
let array = recursion(tree);
console.log(array);
console.log(JSON.stringify(array)===JSON.stringify([ [ 100 ], [ 90, 120 ], [ 70, 99, 110, 130 ] ]));