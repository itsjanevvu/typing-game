const Gamer = function(name) {
    let username; // this is a privatte variable that cannnot be inherited across prototype

    this.username = name;

    this.healthcount = 100; // these are public variables
};

Gamer.prototype.reduceHealth = function() {
    healthcount = this.healthcount - 6;

    return healthcount;
};

Gamer.prototype.getUserName = function() {
    return `${this.username}`;
};

const gamer1 = new Gamer("liz");

//user
let score = 20;

let curword;
let timeout;

const delay = function() {

        timeout = setTimeout(document.querySelector(".new-word").style.visibility = 'visible', 2000)



    }
    // setTimeout(() => {
    //     console.log("setting back to visible")
    //     document.querySelector(".new-word").style.visibility = 'visible';



// }, 2000);;


const setHidden = function() {
    console.log("being set hidden")
    document.querySelector(".new-word").style.visbility = 'hidden';


}

const randomWordGenerator = function() {
    let newword = "";

    for (i = 0; i < 2; i++) {
        const fruits = [
            "Apples",
            "peaches",
            "banana",
            "Melon",
            "watermelon",
            "cantoloupe",
            "Pear",
            "Blueberries",
            "Grapes",
            "Oranges",
            "tomatoes",
            "lychee",
            "Pineapple",
            "Dragon Fruit",
        ];
        newword = newword + fruits[Math.floor(Math.random() * 11)];
    }
    document.querySelector(".new-word").textContent = newword;
    curword = newword;
    console.log(newword)
    delay()

}



randomWordGenerator();






const comparison = function(genword, input) {

    let generatedWord = genword
    let useranswer = input;
    // console.log(generatedWord)
    // console.log(useranswer)


    if (generatedWord == useranswer) {
        document.querySelector(".state").textContent = "Correct!😀"
        randomWordGenerator();
        resetInput()
    } else {
        if (score > 0) {
            console.log("the current score greater than 0")
            score--;
            document.querySelector(".score").textContent = score;
            document.querySelector(".state").textContent = "You spelled wrong 😰!"
            randomWordGenerator();
            resetInput()

        } else if (score == 0) {
            document.querySelector(".state").textContent = "Game over! Try again 👋"
            document.querySelector(".playagain").style.display = "block";

        }
    }
}


document.querySelector(".playagain").addEventListener('click', function() {
    score = 20;
    document.querySelector(".score").textContent = score;
    document.querySelector(".playagain").style.display = "none";



})


document.getElementById("submitanswer").addEventListener('click', function() {

    console.log("button clicked")

    let userinput = document.querySelector(".input").value;

    comparison(curword, userinput)
    console.log(curword)
    console.log(userinput)


})

const resetInput = function() {
    document.querySelector('.input').value = "";
};