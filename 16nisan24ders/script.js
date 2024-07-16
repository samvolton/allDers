import "./style.css"

const myModels = {
    name: "Julie",
    age: "45",
    gender: "female",
    location: "Nigeria",
    occupation: "Model",
    height: "5.9",
    hobbies: ["photography", "fucking", "reading"]
}

const ageElement = document.getElementById("age");
ageElement.textContent = "Age: " + myModels.age;

const occupationElement = document.getElementById("occupation");
occupationElement.textContent = "Occupation: " + myModels.occupation;

const hobbyElement = document.getElementById("hobby");
hobbyElement.textContent = "Hobby: " + myModels.hobbies[1];

const myArray = {
    myArray: [1, 2, 3, 4, 5]
}


const findArray = document.getElementById("myArr");
findArray.textContent = "Array: " + myArray[0];

const assHoles = ["a", "b", "c"];
const substitute = assHoles[1];
console.log(substitute);
assHoles[1] = "z";
assHoles[assHoles.length]  = substitute;
console.log(assHoles);


assHoles.push("q");
console.log(assHoles);


function method(callbackFn, thisArg){
    const length = this.length;
    for (let i = 0; i<length; i++){
        if (i in this) {
            const result = callbackFn.call(thisArg, this[i], i, this)
        }
    }
}

const exArray = ["Hello", "World", "!"];
const exOneArray = exArray.join("  -  ");

console.log("asd" + 1);

console.log(exArray);
console.log(exOneArray);
console.log(exOneArray.split(" &"));

const nums  = [1, 2, [], 3, 4, 5];
nums[2] += 5;
console.log(nums);

const numbers = [1,2,3,4,5,6];
numbers[3] = numbers[3] + 5;
console.log(numbers);

for(let i = 1; i<=5; i++){
    console.log(i);
}

const fn  = function() {
    console.log("Asshole");
};

const fn1 = () => {
    console.log("Asshole1");
};

fn();
fn1(); 

const myDick = (dickSize) => {
    console.log("Size: " + dickSize);
};

myDick("Big")

const girlCount = (pussy, asshole, boobs) => {
    console.log(`Hey ${pussy}, ${asshole}, ${boobs}`);
};

girlCount("Tight" + " " +  "pussy ", + " " + "fucked up" + "Holed", "Legit");

const diceFuck = () => Math.random() * 31;
const diceOne = diceFuck();
console.log(diceOne);

const oneToSix = () => Math.ceil(Math.random) * 6;
const myNumber = oneToSix();
console.log(myNumber);


const myNum = [1,2,3,4,5,6,7,8,9];

for(let i = 0; i < myNum.length; i++ ){
    myNum[i] += Math.ceil(Math.random() * 10);
}
console.log(myNum); 

let i;
const mySevenMx = [];

for(let i = 0; i <= 99; i++){
    i += Math.ceil(Math.random());
    console.log(i);

    if(i % 7 === 0) {
        mySevenMx.push(i);
    }
}

console.log(mySevenMx);


let x = 0;
const mySevenMultipliers = [];
for(let x = 0; x < 100; x++){
    x += Math.ceil(Math.random() * 10);
    if(x % 7 === 0){
        mySevenMultipliers.push(x)
        console.log(mySevenMultipliers);
        console.log(mySevenMultipliers + " : " + "Array After the seven multipliers")
    }
}