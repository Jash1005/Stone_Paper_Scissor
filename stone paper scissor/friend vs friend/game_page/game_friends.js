const player1_name = localStorage.getItem('player1_name');
const player1_score = document.querySelector('.player1_name');
const user = document.querySelector('.uscore');
const comp = document.querySelector('.cscore');
const decision = document.querySelector('.result');
const user_choice_img = document.querySelector('.user');
const comp_choice_image = document.querySelector('.computer'); 
const choose_ur_option = document.querySelector('.choose_ur_option');
const h1_choose_ur_option = document.querySelector('.choose_ur_option h1');

const choice_array = ["stone", "paper", "scissor"];

let computer_score = 0;
let user_score = 0;

player1_score.innerText = player1_name ? player1_name.toLocaleUpperCase() : 'Player1';
const choice_buttons = document.querySelectorAll('.choice');

const reset = document.querySelector('.reset');
reset.addEventListener('click', resetbtn);

choice_buttons.forEach((button) => {
    button.addEventListener('click', () => {
        button.classList.add('highlighted');
        let userchoice = button.getAttribute('id');

        user_choice_img.src = `E:/placement/Project/stone paper scissor/images/${userchoice}.png`;
    
        setTimeout(() => {
            button.classList.remove('highlighted');
            let result = computer(userchoice);
            declareresult(result);
        }, 100);
    });
});

function declareresult(result) {
    if (result == 'tie') {
        decision.innerText = `Ohhh! It's a Tie`; 
    } else if (result == 'user') {
        decision.innerText = 'Hurrey! You Won this round';
    } else {
        decision.innerText = 'Opps! You Lost this round';
    }

    if (win(computer_score, user_score)) {
        if (computer_score == 3) {
            gameover('Computer');
        } else {
            gameover(player1_name);
        }
    }
}

function computer(userchoice) {
    let comp_choice = choice_array[Math.floor(Math.random() * 3)];
    
    comp_choice_image.src = `E:/placement/Project/stone paper scissor/images/${comp_choice}.png`;

    if (userchoice === comp_choice) {
        return 'tie';
    } else if ((userchoice === "stone" && comp_choice === "scissor") ||
               (userchoice === "scissor" && comp_choice === "paper") ||
               (userchoice === "paper" && comp_choice === "stone")) {
        user.innerText = ++user_score;
        return 'user';
    } else {
        comp.innerText = ++computer_score;
        return 'computer';
    }
}

function gameover(name) {
    h1_choose_ur_option.innerText = `Game Over! ${name} won the Match.`;
    choose_ur_option.style.display = 'flex';
    choose_ur_option.style.flexDirection = 'column';

    computer_score = 0;
    user_score = 0;
    // Disable buttons
    choice_buttons.forEach((button) => {
        button.disabled = true; 
    });

    // Reset text after 5 seconds
    setTimeout(() => {
        user.innerText = 0;
        comp.innerText = 0;
        decision.innerText = '';
        choice_buttons.forEach((button) => {
            button.disabled = false;
        });
    }, 5000);
}

function win(x, y) {
    return x == 3 || y == 3;
}

function resetbtn() {
    computer_score = 0;
    user_score = 0;
    user.innerText = 0;
    comp.innerText = 0;
    decision.innerText = '';
    choice_buttons.forEach((button) => {
        button.disabled = false;
    });
}
