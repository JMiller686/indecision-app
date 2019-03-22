console.log('utils.js is running!');

export const square = (x) => x * x;

export const add = (a,b) => a + b;

// named export -> not an object -> reference to the name of the function you are trying to export
//export { square, add };

//exports - default export - named exports