const body = document.getElementsByTagName('body');
const button = document.getElementById('start');
const button2 = document.getElementById('stop');
const card = document.getElementById('imageContainer');
const yes = document.getElementById('yes');
const no = document.getElementById('no');
const score = document.getElementById('scoreDiv');
const bestScore = document.getElementById('bestScore');
const cards = [];
let guesses = 0;
shown = [];
// const cards = [image1.jpg,image2.jpg,image3.jpg,image4.jpg,image5.jpg,image6.jpg,image7.jpg,image8.jpg,image9.jpg,image10.jpg]

for(i=1; i<=10; i++){
    cards.push(`images${i}.jpg`)
}

button.addEventListener('click',startGame());
button2.addEventListener('click', )
yes.addEventListener('click', yesAnswer());
no.addEventListener('click', checkAnswer());

function yesAnswer(){
    if(shown.includes(`${cards[show]}`)){
        seen = true;
        score++;
        startGame();
    }else{
        alert('Incorrect reaponse');
        startGame();
    }
        
}
    

function noAnswer(){
    if(shown.includes(`${cards[show]}`)){
        seen = false;
        score++;
        startGame();
    }else{
        alert('Incorrect reaponse');
        startGame();
    }
        
}






function startGame(){

    if(guesses != 10){
    const show = Math.floor(Math.random()) * cards.length;
    img = document.createElement('img');
    img.src = `${cards[show]}`;
    card.append(img.src);
    document.body.card.append(card);
    shown.push(`${cards[show]}`)
    }else{
        alert('Game Over');

    }

}

// C:\Users\ceh71\repos\reactMemeoryGame
// Imagefile:///C:/Users/ceh71/repos/reactMemeoryGame/images1.jpg
