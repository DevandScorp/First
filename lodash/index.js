import {template} from './lodash';
const user = {
    name: 'Max',
    surname: 'Dachevsky'
};
console.log('hello');
console.log(typeof template(user));
console.log(typeof template(user));
document.body.innerHTML = template(user);
// document.body.appendChild(template(user));