// function createSecretHolder(secret) {
//     class Secret{
//         constructor(secret){
//             this.secret = secret;
//         }
//         getSecret(){
//             return this.secret;
//         }
//         setSecret(secret){
//             this.secret = secret;
//         }
//     }
//     return new Secret(secret)
// }
function createSecretHolder(secret) {
    function Secret(secret){
        let _secret = secret;
        this.getSecret = function(){
            return _secret;
        };
        this.setSecret = function (sec) {
            _secret = sec;
        }
    }
    return new Secret(secret);
}
const obj = createSecretHolder(5);
console.log(obj.getSecret());
console.log(obj.setSecret(3));
console.log(obj.getSecret());