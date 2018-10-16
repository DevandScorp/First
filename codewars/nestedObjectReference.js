Object.prototype.hash = function(string) {
    const args = string.split('.');
    let res = this;
    args.forEach(a => {
        if(!res)return res;
        res = res[a];
    })
    // for(let i = 0;i<args.length;++i){
    //     if(!res)return res;
    //     res = res[args[i]];
    // }
    return res;
}
Object.prototype.hash2 = function(string) {
    var arr = string.split('.');
    return arr.reduce(function(pv, cv){
        return (pv) ? pv[cv] : pv;
    }, this);
}
var obj = {
    person: {
        name: 'joe',
        history: {
            hometown: 'bratislava',
            bio: {
                funFact: 'I like fishing.'
            }
        }
    }
};
console.log(obj.hash('person.name'));
console.log(obj.hash('person.game.home') == undefined);