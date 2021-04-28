const body = document.getElementsByTagName('body');
const button = document.getElementById('start');
const button2 = document.getElementById('stop');
const card = document.getElementById('imageContainer');
const yes = document.getElementById('yes');
const no = document.getElementById('no');
const scoreBox = document.getElementById('scoreDiv');
const bestScore = document.getElementById('bestScore');
const end = document.getElementById('stop');
const cards = [];
let guesses = 0;
shown = [];
let show;
let img;
let score = 0;
let seen = false;
// const cards = [image1.jpg,image2.jpg,image3.jpg,image4.jpg,image5.jpg,image6.jpg,image7.jpg,image8.jpg,image9.jpg,image10.jpg]

for(i=1; i<=10; i++){
    cards.push(`image${i}.jpg`)
}

button.addEventListener('click',startGame);
// button2.addEventListener('click', )
yes.addEventListener('click', yesAnswer);
no.addEventListener('click', checkAnswer);
end.addEventListener('click', endGame);

function endGame(){
    shown = [];
    card.removeChild(img);
    score = 0;
    scoreBox.textContent = 0;
}

function yesAnswer(){
    if(shown.includes(`${cards[show]}`)){
        seen = true;
        score++;
        scoreBox.textContent = score;
        startGame();
    }else{
        alert('Incorrect reaponse');
        startGame();
    }
        
}
    
function checkAnswer(){
    if(!shown.includes(`${cards[show]}`)){
        seen = false;
        score++;
        scoreBox.textContent = score;
        startGame();
    }else{
        alert('Incorrect reaponse');
        startGame();
    }
        
}

function startGame(){
    if(!img){
        img = document.createElement('img');
    }

    if(guesses != 10){
    show = Math.floor(Math.random() * cards.length);
    
    img.src = `${cards[show]}`;
    card.append(img);
    // document.body.card.append(card);
    shown.push(`${cards[show]}`)
    }else{
        alert('Game Over');

    }

}

// C:\Users\ceh71\repos\reactMemeoryGame
// Imagefile:///C:/Users/ceh71/repos/reactMemeoryGame/images1.jpg
