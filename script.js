const btnInstruction = document.querySelector(".instr");
const cover = document.querySelector(".cover")
const btnChoice = document.querySelector(".open");
const instruction = document.querySelector(".instruction")
const choice = document.querySelector(".choice");
const exit = document.querySelectorAll('.exit')
const square = document.querySelectorAll('.square')
const images = document.querySelectorAll(".sqimg");
const score = document.querySelector(".score");
const scoreS = document.querySelector(".scoreS");
const btnScore = document.querySelector(".btnScore");
const choose = document.querySelectorAll(".choose");
const chooseImg = document.querySelectorAll(".choose img");
const btnChooser = document.querySelector(".chooser");
let aiFlag = true;
let player = [];
let ai = [];
let playerM = 'pics/cross.png';
let aiM = 'pics/circle.png';
let playerChoice = false;

btnInstruction.addEventListener('click', function() {
    instruction.classList.add('show');
})
btnChoice.addEventListener('click', function() {
    choice.classList.add('show');
})

exit.forEach(ex => {
    ex.addEventListener('click', function() {
        if (this.classList.contains('choice')) {
            choice.classList.remove('show');
        }
        else if (this.classList.contains('instruction')) {
            instruction.classList.remove('show');
        }
    })
});

square.forEach(sq => {
    sq.addEventListener('click', function() {
        if (this.classList.contains('taken')) {
            return;
        }

       let classy = this.getAttribute('class');
       classy = classy.slice(7, 10);
       document.querySelector('img.' + classy).src = playerM;
        player.push(classy);
        this.classList.add('taken');
        
        if (player.indexOf("no1") > -1 && player.indexOf('no2') > -1 && player.indexOf('no3') > -1 || player.indexOf("no1") > -1 && player.indexOf('no4') > -1 && player.indexOf('no7') > -1 || player.indexOf("no3") > -1 && player.indexOf('no6') > -1 && player.indexOf('no9') > -1 || player.indexOf("no1") > -1 && player.indexOf('no5') > -1 && player.indexOf('no9') > -1 || player.indexOf("no3") > -1 && player.indexOf('no5') > -1 && player.indexOf('no7') > -1 || player.indexOf("no2") > -1 && player.indexOf('no5') > -1 && player.indexOf('no8') > -1 || player.indexOf("no4") > -1 && player.indexOf('no5') > -1 && player.indexOf('no6') > -1 || player.indexOf("no7") > -1 && player.indexOf('no8') > -1 && player.indexOf('no9') > -1)
        {
            
            score.classList.add('show');
            cover.classList.add('show');
            scoreS.textContent = "Wygrana!";
            return;
        }  
        if (player.length + ai.length == 9) {
            score.classList.add('show');
            cover.classList.add('show');
            scoreS.textContent = "Remis!";
            return;
        }

        for (let i=0; aiFlag; i++) {     

      const aiChoice = 'no' + Math.floor((Math.random()* 9)+ 1);
      if (player.indexOf(aiChoice) == -1 && ai.indexOf(aiChoice) == -1)  {
          aiFlag = false;
      
      document.querySelector("." + aiChoice).classList.add('taken');
      document.querySelector('img.' + aiChoice).src = aiM;
      ai.push(aiChoice);
      }
        }
        
      aiFlag = true;
        if (ai.indexOf("no1") > -1 && ai.indexOf('no2') > -1 && ai.indexOf('no3') > -1 || ai.indexOf("no1") > -1 && ai.indexOf('no4') > -1 && ai.indexOf('no7') > -1 || ai.indexOf("no3") > -1 && ai.indexOf('no6') > -1 && ai.indexOf('no9') > -1 || ai.indexOf("no1") > -1 && ai.indexOf('no5') > -1 && ai.indexOf('no9') > -1 || ai.indexOf("no3") > -1 && ai.indexOf('no5') > -1 && ai.indexOf('no7') > -1 || ai.indexOf("no2") > -1 && ai.indexOf('no5') > -1 && ai.indexOf('no8') > -1 || ai.indexOf("no4") > -1 && ai.indexOf('no5') > -1 && ai.indexOf('no6') > -1 || ai.indexOf("no7") > -1 && ai.indexOf('no8') > -1 && ai.indexOf('no9') > -1) 
        {

            
            score.classList.add('show');
            cover.classList.add('show');
            scoreS.textContent = "Przegrana!";
            return;
        }

    })
})

btnScore.addEventListener('click', function() {
    images.forEach(image => {
        image.src = "";
    });
    player = [];
    ai = [];
    square.forEach(s => {
        s.classList.remove('taken'); 
    })

    score.classList.remove('show');    
    cover.classList.remove('show');
})

choose.forEach(image => {
    image.addEventListener('click', function() {
        choose.forEach(el => {
            el.classList.remove('selected');
        })
        this.classList.add('selected');
        if (this.getAttribute('id') == 'choice1') {
            playerChoice = false;
        }
        else {
            playerChoice = true;
        }
    })
});

btnChooser.addEventListener('click', function() {
    if (playerChoice == false) {
        playerM = 'pics/cross.png';
        aiM = 'pics/circle.png'
    }
    else {
        playerM = 'pics/circle.png';
        aiM = 'pics/cross.png';
    }
    choice.classList.remove('show');
    images.forEach(image => {
        image.src = "";
    });
    player = [];
    ai = [];
    square.forEach(s => {
        s.classList.remove('taken'); 
    })
})

