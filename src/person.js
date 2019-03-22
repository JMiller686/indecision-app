const isAdult = (age) => age >= 18 ? true : false;

const canDrink = (age) => age < 21 ? false : true;

export { isAdult, canDrink };