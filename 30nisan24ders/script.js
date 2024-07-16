import "./style.css";

console.log(document.getElementById("app"));

const h1 = document.createElement("h1");
h1.innerHTML = "Hello World";
console.log(h1.textContent);

const selectAll = document.querySelectorAll("h1");
console.log(selectAll);

/*
const myArr = ["a", "b", "c"];

for(let i = 0; i < myArr.length; i++){
    selectAll[i].textContent = i + 1;
}*/

const p = document.querySelector("p");
p.innerHTML = "Sucuk life";
console.log(p.textContent);

const xYz = document.querySelector("p");
xYz.textContent = "Suck my Sucukkkk";
console.log(xYz.textContent);

const allItems = document.querySelectorAll("p");
console.log(allItems);

const allItems1 = document.querySelectorAll("#app1 p")
console.log(allItems1[0].textContent);

const allItems2 = document.querySelectorAll("#app p")
console.log(allItems2[0].textContent);

const name = "Remy";
console.log(`Hey man ${name}`)

const myArr = ["a", "b", "c"];
console.log(myArr);


const app1 = document.querySelector("#app1");

const myPar = document.createElement("p");
myPar.textContent= "Hello World";   
app1.appendChild(myPar);
console.log(app1);

for(let i = 0; i <= 5; i++){
    const myPar = document.createElement("p");
    myPar.textContent = " p";
    app1.appendChild(myPar);
}


let myFirstNode = document.createElement("xyz");
let firstClone = myFirstNode.cloneNode(true);
console.log(firstClone);

const ul = document.createElement("ul");

const df = new DocumentFragment();

for(let i = 0; i<5; i++){
    const li = document.createElement("li");
    li.textContent = "GET THE FUCK HERE";
    df.appendChild(li);
}

ul.appendChild(df);

console.dir(app1);

const myDiv = document.querySelector("#app1");
myDiv.getAttribute("app1");
myDiv.setAttribute("class", "myDiv");
console.log(myDiv);

const myModels = (a,b ) => console.log(a,b);
console.log(31, 69);

const bestModels = (a) => {
    a();
}
bestModels(() => console.log("The Best Models"));


const modelCount = (a) => {
    a(31);
}

modelCount((size) => console.log(size));



function calculateTheJerkSecond(dickSize, pussyWise){
    return dickSize * pussyWise;
}

let dickSize = 31;
let pussyWise = 69;
console.log(`The Estimated Jerk Time is: ${calculateTheJerkSecond(dickSize, pussyWise)}`); 


let kek = 31;

const pXz = (kek) => console.log(`How much for a kek: ${kek}`);

pXz(31);



    if(kek < 32) {
        console.log(`Kek's price is not that, it is this price ${kek}`)
    }

    let divs = document.querySelectorAll('div');
console.log(divs instanceof Array);  
console.log(divs instanceof NodeList);  

let arr = [1, 2, 3];
console.log(arr instanceof Array); 
console.log(arr instanceof NodeList);  

let firstArr = [1, 2, 3];
firstArr.forEach(function(item) {
    console.log(item);
});

let secondArr = [2,4,6];
let newArr = secondArr.map(function(item ){
    return item * 2;
});

let thirdArr = [3,6,9];
let newestArr = thirdArr.filter(function(item){
    return item  % 2 === 0;

});

let fourthArr = [4,8,12];
let mySum = fourthArr.reduce(function(total, item ){
    return total + item;

}, 0);

let fifthArr = [5,10,15];
fifthArr.push(1,2,3);
console.log(fifthArr);

let sixthArr = [6,12,18];
let firstShift = sixthArr.shift();
console.log(firstShift);


let seventhArr = [7,14,21];
let lastPop = seventhArr.pop();
console.log(lastPop);

let eightArr = [8,16,24];
eightArr.unshift(1,2,3);
console.log(eightArr);

let ninthArr = [9,18,27];
let ninthOneArr = ninthArr.slice(1,3);
console.log(ninthOneArr);

let tenthArr = [10,20,30];
tenthArr.splice(0 ,2, 'a', 'b')
console.log(tenthArr);

const myList = document.querySelectorAll("asshole, li");

myList.forEach((elem) => {
    elem.classList.add("Get-the-fuck-out");
});

let listArr = [1,2,3,4,5];

let newListArr = listArr.map((elem, index, arr) => {
    return elem *2;

});
console.log(newListArr);

const anArr = Array.from(listArr);

const aSecondArr = anArr.map((elem, index, arr) =>{

    /*or => const aSecondArr = anArr.map((elem, index, arr) => Math.random());*/ 
    return Math.random();
});
    console.log(aSecondArr);

    const users = [
    {
        name: "John Doe",
        age: 25,
        email: "john.doe@example.com"
    },
    {
        name: "Jane Smith",
        age: 30,
        email: "jane.smith@example.com"
    },
    {
        name: "Mike Johnson",
        age: 35,
        email: "mike.johnson@example.com"
    }
    ];


    const myUsers = users;
    myUsers.textContent = `name ${myUsers[0].name} age ${myUsers[0].age}`;
    console.log(myUsers);

    users.map((user) => console.log(user.name));
    /*or:
        users.forEach((user) => console.log(user.name));
    */

        const span = document.querySelector("span");

        users.map((elem) =>{
            const qqq = document.createElement("qqq");
            qqq.textContent = `name: ${elem.name} age ${elem.age}`;
            span.appendChild(qqq);
        });



        window.addEventListener("dblclick", () => console.log("You double clicked the window"));
