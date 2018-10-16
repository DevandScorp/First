function isSantaClausable(obj) {
    return typeof(obj['sayHoHoHo'])==='function'
        && typeof(obj['distributeGifts'])==='function'
        && typeof obj['goDownTheChimney']==='function';

}
function isSantaClausablebetter(obj) {
    return ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney'].every(meth => typeof obj[meth] === 'function');
}