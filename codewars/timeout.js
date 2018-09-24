const returnBackInSecond = (param) => {
    return new Promise(resolve => {
                setTimeout(() => {
                    resolve(param);
                }, 1000);
            });

};
var param = "Hello";
let check;
returnBackInSecond(param)
    .then((returnedValue) => {
        check = returnedValue;
    });

const startTime = Date.now();

let intervalId = setInterval(() => {
    const currentTime = Date.now();
    const delta = currentTime - startTime;
    if (check === param) {
        clearInterval(intervalId);
        if (delta < 1000 || delta > 1500) {
            console.log(false);
        } else {
            console.log(true);
        }
    } else {
        if (delta > 1500) {
            console.log(false);
            clearInterval(intervalId);
        }
    }
}, 100);

