export function start_round() {

    let heading_text = document.querySelector(".round_title");
        heading_text.textContent = "LET THE GAME BEGIN!";

    const button_container = document.querySelector(".button_container");
    const button = document.querySelector(".button");

    button_container.removeChild(button);

    const player_turn_text = document.querySelector(".player_left_pick");

    player_turn_text.textContent = "PLAYER CHOOSE!";
    player_turn_text.classList.add("animate");
}

export function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export function filter_choice(choice) {
    if (choice == 'player_left_rock') {
        return "ROCK";
    }else if (choice == 'player_left_paper'){
        return "PAPER";
    }else if (choice == 'player_left_scissors') {
        return "SCISSORS";
    }

    if (choice == 'player_right_rock') {
        return "ROCK";
    }else if (choice == 'player_right_paper'){
        return "PAPER";
    }else if (choice == 'player_right_scissors') {
        return "SCISSORS";
    }
}

export function game_evaluation(player_move, computer_move) {

    if (player_move == "ROCK") {
        if (computer_move == "SCISSORS") {
            return "PLAYER";
        }else if (computer_move == "ROCK") {
            return "TIE";
        }else if (computer_move == "PAPER") {
            return "COMPUTER";
        }
    }

    if (player_move == "PAPER") {
        if (computer_move == "SCISSORS") {
            return "COMPUTER";
        }else if (computer_move == "ROCK") {
            return "PLAYER";
        }else if (computer_move == "PAPER") {
            return "TIE";
        }
    }

    if (player_move == "SCISSORS") {
        if (computer_move == "SCISSORS") {
            return "TIE";
        }else if (computer_move == "ROCK") {
            return "COMPUTER";
        }else if (computer_move == "PAPER") {
            return "PLAYER";
        }
    }

};

export function reset_player_circles() {

const circles = document.querySelectorAll('.circles');
    console.log(circles);
circles.forEach(function(element) {
    console.log(element);
    element.style.backgroundColor="cornflowerblue";
});

document.querySelector('.button').textContent = "NEW ROUND";
document.querySelector('.player_right_pick').textContent = "";

}