//arguments object - no longer bound with arrow functions

const add = (a, b) => {
    return a + b;
}

console.log(add(55,1));
// this keyword - no longer bound
const user = {
    name: 'Josh',
    cities: ['Chicago', 'Fountain Valley', 'Sycamore'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city)
    }
}

console.log(user.printPlacesLived());


//Challenge Area


const multiplier =  {
    //numbers - array of numbers
    //multiplyBy - single number
    //multiply - return a new array where the numbers have been mulitplied
    numbers: [3,6,8,9],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((num) => num * this.multiplyBy)
    }

}

console.log(multiplier.multiply());