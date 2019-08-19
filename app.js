// ### Task 1
// 1. Add the necessary code to wait for the DOM to load to make sure that 
// anything you manipulate in the DOM has loaded. You can do this either using 
// window.onload or adding an event listener for DOMContentLoaded.

//window.onLoad 
//waits for CSS, DOMContentLoaded doesn`t 

// 2. Replace the text "Change me" with "Hello World!".

document.querySelector("h1").innerHTML = "Hello World!"

// 3. When a user hovers over one of the colored boxes change the text to display the color that is being hovered over.

let section = document.querySelector("section");
section.addEventListener("mouseover", function (e) {
    console.log(e.target);
    document.querySelector(".selected").innerText = e.target.className;
})

// let section = document.querySelector("section");
// let colorCubes = section.children;
// let selected = document.querySelector(".selected")

// setTimeout(() => {
//     for (i in colorCubes) {
//         colorCubes[i].addEventListener("mouseenter", function (e) {
//             selected.innerText = e.target.className;
//         });
//     }
// }, 0);








// 4. Create a new div element.

let newDiv = document.createElement('div');

// 5. Give your new div a class of purple and style it so that it has a background color of purple.

newDiv.classList.add("purple")
newDiv.style.backgroundColor = "purple"

// 6. Append your new div to the page to the section tag.

section.appendChild(newDiv);

// ### Task 2
// Race your divs! Create a racing game with the two divs with classes of "car1" and "car2". When the "Start the race!" button is pressed, the two cars should move across the screen until one of them is at the end of the screen. When one of the blocks reaches the end - you should alert "winner!"

let button = document.querySelector("button");

button.addEventListener("click", function () {

    let car1 = document.querySelector(".car1")
    let car2 = document.querySelector(".car2")

    let random1 = Math.ceil(Math.random() * 8) + 2;
    let random2 = Math.ceil(Math.random() * 8) + 2;

    let lower = Math.min(random1, random2);
    let winner;

    console.log(random1);
    console.log(random2);
    console.log(lower);

    const race = () => {
        if (random1 != random2) {
            winner = random1 < random2 ? "car1" : "car2";
            car1.style = `transition: ${random1}s; margin-left: 92%`;
            car2.style = `transition: ${random2}s; margin-left: 92%`;
        } else {
            random1 = Math.fix(Math.random() * 8, 2);
            random2 = Math.fix(Math.random() * 8, 2);
            race();
        }
    }
    race();

    setTimeout(() => {
        document.querySelector("h2").innerHTML = winner + " has WON!!";
    }, lower * 1000)
})
