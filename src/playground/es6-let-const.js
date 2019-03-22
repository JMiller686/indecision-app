var nameVar = 'Josh'
var nameVar = 'Mike'
console.log('nameVar', nameVar)

let nameLet = 'Jen'
nameLet = 'Jenny'
console.log('nameLet', nameLet)

const nameConst = 'Josh'
console.log('nameConst', nameConst)

function getPetName() {
    var petName = 'Hal';
    return petName;
}
getPetName();

//Block scoping

var fullName = 'Josh Miller';
if(fullName) {
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
}
