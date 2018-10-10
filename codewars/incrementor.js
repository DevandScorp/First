let x = 1;
const incrementor = () => {
    function count(){
        x++;
        return count;
    }
    return count;
};
incrementor()();
incrementor();
console.log(x);