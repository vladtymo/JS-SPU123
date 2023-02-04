// -=-=-=-=-=-=-=-=- data types -=-=-=-=-=-=-=-=-

let koef = 10.55;
let login = "super_user123";
let flag = true;
// anonymous function
let summ = function (a, b) { console.log(a + b); };
// arrow function
let div = (a, b) => console.log(a + b);
let user = {
    login: "super_programmer",
    password: "Qwerty"
};
let array = [1, 44, -4, "red", "green", true, [1, 2, 3], user, summ];

// interpolation `...${value}...`
// '' equals to ""

// show variable types
console.log(`Number: ${koef}, type: ${typeof (koef)}`);
console.log(`Login: ${login}, type: ${typeof (login)}`);
console.log(`Flag: ${flag}, type: ${typeof (flag)}`);
console.log(`User: ${user.login} ****, type: ${typeof (user)}`);
console.log(`Function: ${summ}, type: ${typeof (summ)}`);
console.log(`Array: ${array}, type: ${typeof (array)}`);

// dynamic typing: we can change types in runtime
koef = 'A';
console.log(`Number: ${koef}, type: ${typeof (koef)}`);

// -=-=-=-=-=-=-=-=- browser dialogs -=-=-=-=-=-=-=-=-
alert("Some alert message!");
username = prompt("Enter your name:");

// convert string to number: number = +{string}
age = +prompt("Enter your age:");

console.log(`Username: ${username}, type: ${typeof (username)}`);
console.log(`Age: ${age + 1}, type: ${typeof (age)}`);

// step: value ** step
console.log('Step: ${2 ** 8}');

let isContinue = confirm("Do you want to continue?");
alert(isContinue ? "Good!" : "Exit!");

// -=-=-=-=-=-=-=-=- functions -=-=-=-=-=-=-=-=-
function sub(a, b) {
    if (b == 666) console.warn("Bad request!");
    return a - b;
}

console.log("Result:", sub(20, 5));