$(document).ready(() => {
      
    
const homeScreen = document.getElementById('homeScreen');
   
    
$(homeScreen).removeClass('.hideMe').fadeIn({queue: false, duration: 'slow'});
    
   $(homeScreen).animate({
        top: "60"
    }, () => {
        
    })   
   
   

const game = document.getElementById('wholeDamnThing');    
const start = document.getElementById('enter');    
    
 
function startGame() {  
    
let time = 0;

 
    
    
    
    function timer() {
        setInterval(() => {
            time++;
        }, 1000)  
    }
    
timer();
    
    

    
    
const blanksHTML = document.getElementById('blanks');
const missesHTML = document.getElementById('misses');
const trigger = document.getElementById('click');
const playerInput = document.getElementById('playerInput');
const hanger = document.getElementById('hanger');
const title = document.getElementById('title');
const missesTitle = document.getElementById('missesTitle');
const head = document.getElementById('head');
const body = document.getElementById('body');  
const armL = document.getElementById('armL');   
const armR = document.getElementById('armR');   
const outcome = document.getElementById('outcome');
const yourTime = document.getElementById('yourTime');    

  
const json = '{ "1": "chucky", "2": "jason", "3": "shocker", "4": "saw", "5": "hostel", "6": "leatherface", "7": "ash", "8": "house", "9": "chud", "10": "basketcase", "11": "pieces", "12": "juggalo", "13": "misfits", "14": "danzig", "15": "splice", "16": "psycho", "17": "vertigo", "18": "alien", "19": "slither", "20": "predator", "21": "species", "22": "mimic", "23": "crow", "24": "freddy", "25": "scream", "26": "zodiac", "27": "seven", "28": "vhs", "29": "candyman", "30": "carrie", "31": "cujo", "32": "dreamcatcher", "33": "purge", "34": "unfriended", "35": "halloween", "36": "splinter", "37": "wishmaster", "38": "phantasm", "39": "exorcist", "40": "possession", "41": "frenzy", "42": "warlock", "43": "hellraiser", "44": "pinhead", "45": "jigsaw", "46": "babadook", "47": "vacancy", "48": "ghoulies", "49": "hobgoblins", "50": "dracula", "51": "frankenstein", "52": "pumpkinhead", "53": "sharknado", "54": "sharktopus", "55": "slenderman", "56": "arachnophobia", "57": "insidious", "58": "jaws", "59": "bones", "60": "ticks", "61": "trancers", "62": "troll", "63": "tremors", "64": "maniac", "65": "clownhouse", "66": "baskin", "67": "it", "68": "conjuring", "69": "creep", "70": "sinister", "71": "acolytes", "72": "videodrome", "73": "collector", "74": "collection", "75": "dentist", "76": "strangeland", "77": "teeth", "78": "braindead", "79": "underworld", "80": "eraserhead", "81": "baghead", "82": "freaks", "83": "flatliners", "84": "vanishing", "85": "severance", "86": "critters", "87": "hannibal", "88": "valentine", "89": "reanimator", "90": "uncaged", "91": "xfiles", "92": "phantoms", "93": "cooties", "94": "scanners" } ';


const parsed = JSON.parse(json);

const storage = [];

for(const x in parsed){
  storage.push(parsed[x]);
}
    



    


function getWord() {
    const randomIndex = Math.floor(Math.random() * storage.length);
    word = storage[randomIndex];
}

let count = 0;

getWord();

    const blank = [];
    let misses = [];

function board() {
    for (let i = 0; i < word.length; i++) {   
            blank.push('_  ');
    }
        blanksHTML.innerHTML = blank.join('');
    
    
    //$(homeScreen).removeClass('.hideMe').fadeIn({queue: false, duration: 'slow'});
    
   $("#wholeDamnThing").animate({
        top: "60"
    }, () => {
        
    }) 
    
    
    $(blanksHTML).removeClass('.hideMe').fadeIn(800);
    $(playerInput).removeClass('.hideMe').fadeIn(1200);
    $(hanger).removeClass('.hideMe').fadeIn(1000);
    $(title).removeClass('.hideMe').fadeIn(600);
    $(missesTitle).removeClass('.hideMe').fadeIn(1400);
}

 board();

    
    
    
function checkDuplicates()  {
    const uniqueGuesses = [];
    $.each(misses, (position, element) => {
        if (element.length > 0 && $.inArray(element, uniqueGuesses) == -1) {
            uniqueGuesses.push(element);
        } else {
            count--;
        }
    });
    misses = uniqueGuesses;
}    


function guess() {
    letterOriginal = document.getElementById('userGuess');
    letter = letterOriginal.value.toLowerCase();
    if (/^[a-zA-Z]*$/.test(letter) && letter !== '') {      
        for (let i=0; i < word.length; i++) {
            if (letter === word[i]) {
                blank[i] = `${letter}  `;
                blanksHTML.innerHTML = blank.join('');
            }  else { 
            } 
        }
        
    } else {
        console.log("invalid");
    }

    if (!word.includes(letter)) {
        misses.push(letter);
        misses.sort();
        checkDuplicates();
        missesDisplay = misses.join();
        missesHTML.innerHTML = `${missesDisplay} `;
        count++;
        document.getElementById('missAlert').innerHTML = "<img src='assets/x.png'/>";
        
        
        setTimeout(() => {
                  document.getElementById('missAlert').innerHTML = "";
            
        }, 100);
  
        
    }
    
    if (!blank.includes("_  ")) {
            game.classList.add('hideMe');    
            outcome.innerHTML = "You Win!";
        yourTime.innerHTML = `Your Time: <br>${time}`;
    setTimeout(() => {
        location.reload();
    }, 2000)
    }
    
    if (count === 1) {
        head.classList.remove('hideMe');
    } else if (count === 2) {
        body.classList.remove('hideMe');
    } else if(count === 3) {
        armL.classList.remove('hideMe');
    } else if (count === 4) {
        armR.classList.remove('hideMe');
    } else if (count === 5) {
        legL.classList.remove('hideMe');
    } else if (count === 6) {
        legR.classList.remove('hideMe');
        game.classList.add('hideMe');    
        outcome.innerHTML = `You Lose!<br>Answer:<br>${word}`; 
    setTimeout(() => {
        location.reload();
    }, 2000)
    }
    

}


trigger.addEventListener('click', () => {
    guess();
    
    if (document.getElementById('userGuess').value = "") {
        alert("empty");
    }
    
    
    document.getElementById('userGuess').value = "";
})

} 
    
    
start.addEventListener('click', () => {
    game.classList.remove('hideMe');
    document.getElementById('homeTitle').classList.add('hideMe');
    start.classList.add('hideMe');
    startGame();
})    



})

