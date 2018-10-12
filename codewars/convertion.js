let Alphabet = {
    BINARY:        '01',
    OCTAL:         '01234567',
    DECIMAL:       '0123456789',
    HEXA_DECIMAL:  '0123456789abcdef',
    ALPHA_LOWER:   'abcdefghijklmnopqrstuvwxyz',
    ALPHA_UPPER:   'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    ALPHA:         'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
};
console.log(convert("15", Alphabet.DECIMAL, Alphabet.BINARY)); // should return "1111"
console.log(convert("15", Alphabet.DECIMAL, Alphabet.OCTAL)); // should return "17"
console.log(convert("1010", Alphabet.BINARY, Alphabet.DECIMAL)); // should return "10"
console.log(convert("1010", Alphabet.BINARY, Alphabet.HEXA_DECIMAL));

function convert(input, source, target) {
    const convertToTarget1 = convertToTarget(convertToDecimal(input, source), target);
    return convertToTarget1;
}
function convertToDecimal(input, sourceAlph) {
    let posMap = getPos(sourceAlph),
        sourceLen = sourceAlph.length;
    const values = input.split('').reverse();
    let dec = 0;
    for(let i = 0;i<values.length;++i){
        dec+=Math.pow(sourceLen,i)*posMap[values[i]];
    }
    return dec;

}

function convertToTarget(inputInDecimal, target) {
    let symbolMap = getSymbols(target);
    let targetLen = target.length;
    const remainder = [];
    let divider = inputInDecimal;
    do {
        remainder.push(divider % targetLen);
        divider = Math.floor(divider / targetLen);
    } while (divider > 0);
    const reversed = remainder.reverse();
    for(let i = 0;i<reversed.length;++i){
        reversed[i] = symbolMap[reversed[i]];
    }
    return reversed.join('');

}
function getPos(alph) {
    const map = {};
    for(let i = 0;i<alph.length;++i){
        map[alph[i]] = i;
    }
    return map;
}
function getSymbols(alph) {
    const map = {};
    for(let i = 0;i<alph.length;++i){
        map[i] = alph.charAt(i);
    }
    return map;
}

