const createSerializedObject = () => {
    const event = {
        title: "Conference"
    };
};
const object = createSerializedObject();
console.log(typeof object);
console.log(object);
console.log((typeof object==='object'));
console.log(JSON.parse(JSON.stringify(object)));
console.log(JSON.parse(JSON.stringify(object))===object);