import "./style.css";

const users = [
    {
        id: 1,
        name: "John",
        surname: "Doe",
        age: 25,
        email: "john.doe@example.com",
        location: "New York"
    },
    {
        id: 2,
        name: "Jane",
        surname: "Smith",
        age: 30,
        email: "jane.smith@example.com",
        location: "London"
    },
    {
        id: 3,
        name: "Michael",
        surname: "Johnson",
        age: 35,
        email: "michael.johnson@example.com",
        location: "Sydney"
    },
    {
        id: 4,
        name: "Emily",
        surname: "Brown",
        age: 28,
        email: "emily.brown@example.com",
        location: "Toronto"
    },
    {
        id: 5,
        name: "David",
        surname: "Wilson",
        age: 32,
        email: "david.wilson@example.com",
        location: "Berlin"
    }
];

//POPPING UP USER CREDENTIALS
const theSelectedEmail = document.querySelectorAll(".email-btn");//selecting all the email buttons

theSelectedEmail.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        console.log(`The user's email is: ${users[index].email}`);
        alert(`The user's email is ${users[index].email}`);
    });
});

const theSelectedNames = document.querySelectorAll(".name-btn");

theSelectedNames.forEach((btn, index) => {
    btn.addEventListener("click", () =>{
        console.log(`The user's name is ${users[index].name}`);
        alert(`The user's name is ${users[index].name} and the user's age is ${users[index].age}`);
    });

});


const theSelectedSurNames = document.querySelectorAll(".surname-btn");

 theSelectedSurNames.forEach((btn, index) => {

    btn.addEventListener("click", () => {
        console.log(`The user's surname is ${users[index].surname}`);
        alert(`The user's surname is ${users[index].surname} and the user's id is ${users[index].id} and there is another spot, user's location is ${users[index].location}`);
    });

 });

// MAKING A LIST OF USERS
const navBar = document.createElement("nav");//creating a navBar
const userList = document.createElement("ul");//creating a list

users.forEach((user) => {//looping through the users array
    const listItem = document.createElement("li");//creating a list item
    const emailButton = document.createElement("button");
    const ageLocationButton = document.createElement("button");
    const idButton = document.createElement("button");
    idButton.classList.add("name-btn");
    idButton.textContent = `${user.id}`;
    ageLocationButton.classList.add("surname-btn");
    ageLocationButton.textContent = `${user.age} ${user.location}`;
    emailButton.classList.add("email-btn");
    emailButton.textContent = `${user.name} ${user.surname}`
    listItem.appendChild(idButton);//adding the button to the list item
    listItem.appendChild(emailButton);//adding the button to the list item
    listItem.appendChild(ageLocationButton);//adding the button to the list item
    userList.appendChild(listItem);//adding the list item to the list
});

navBar.appendChild(userList); //adding the list to the navBar
document.body.prepend(navBar); //adding the navBar to the body




