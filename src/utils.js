console.log('utils.js is running!');

const square = (x) => x * x;

// named export -> not an object -> reference to the name of the function you are trying to export
export { square }

//exports - default export - named exports