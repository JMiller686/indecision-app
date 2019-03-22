console.log('utils.js is running!');

export const square = (x) => x * x;

export const add = (a,b) => a + b;

const subtract = (a,b) => a - b;

export default subtract;

// named export -> not an object -> reference to the name of the function you are trying to export
// export { square, add, subtract as default };

//exports - default export - named exports

