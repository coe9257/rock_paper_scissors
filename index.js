import { start_round, getRandomInt, filter_choice, game_evaluation, reset_player_circles } from './functions.js';

let player_score = 0;
let computer_score = 0;

const element_array = [];

const game_logic = {
    // player = true; computer = false
    game_status: "",
    player_score: 0,
    computer_score: 0,
    player_choice: "",
    computer_choice: "",
    winner: ""
}

function reset_game() {
    game_logic.game_status = "";
    game_logic.player_score = 0;
    game_logic.computer_score = 0;
    game_logic.player_choice = "";
    game_logic.computer_choice = "";
    game_logic.winner = "";

    const button_container = document.querySelector(".button_container");
    const button = element_array.pop();
    button_container.appendChild(button);
    reset_player_circles();

}

function update_score_display(winner) {
    if (winner == "PLAYER") {
        if (game_logic.player_score == 1) {
            document.querySelector('.player_1_score_circle_1').style.backgroundColor = "black";
        }else if (game_logic.player_score == 2) {
            document.querySelector('.player_1_score_circle_2').style.backgroundColor = "black";
        }else if (game_logic.player_score == 3) {
            document.querySelector('.player_1_score_circle_3').style.backgroundColor = "black";
        }
    }

    if (winner == "COMPUTER") {
        if (game_logic.computer_score == 1) {
            document.querySelector('.player_2_score_circle_1').style.backgroundColor = "black";
        }else if (game_logic.computer_score == 2) {
            document.querySelector('.player_2_score_circle_2').style.backgroundColor = "black";
        }else if (game_logic.computer_score == 3) {
            document.querySelector('.player_2_score_circle_3').style.backgroundColor = "black";
        }
    }
}

function update_score() {

    if (game_logic.winner == "PLAYER") {
        game_logic.player_score++;
        update_score_display("PLAYER");
    }else if (game_logic.winner == "COMPUTER") {
        game_logic.computer_score++;
        update_score_display("COMPUTER");
    }
    console.log(game_logic.player_score);

    if (game_logic.player_score == 3) {
        document.querySelector(".round_title").textContent = `PLAYER WINS THE GAME`;
        reset_game();
    }else if (game_logic.computer_score == 3) {
        document.querySelector(".round_title").textContent = `COMPUTER WINS THE GAME`;
        reset_game();
    }
}

function change_game_status() {
    const player_turn_text = document.querySelector(".player_left_pick");
    const computer_turn_text = document.querySelector(".player_right_pick");
        player_turn_text.classList.remove("animate");
        
        let player_move = filter_choice(game_logic.player_choice);
        let computer_move = filter_choice(game_logic.computer_choice);

        player_turn_text.textContent = `PLAYER PICKED ${player_move}`;
        computer_turn_text.textContent = `COMPUTER PICKED ${computer_move}`;

        let result = game_evaluation(player_move, computer_move);

        if (result == "PLAYER") {game_logic.winner = "PLAYER"};
        if (result == "COMPUTER") {game_logic.winner = "COMPUTER"};
        if (result == "TIE") {game_logic.winner = "TIE"};
        if (game_logic.winner == "PLAYER" || game_logic.winner == "COMPUTER") {
            document.querySelector(".round_title").textContent = `${game_logic.winner} WINS!`;
            update_score();
        }else {
            document.querySelector(".round_title").textContent = `IT IS A TIE!`;
        }
}

function computer_choice() {
    let choice = getRandomInt(3);
    if (choice == 0) {
        game_logic.computer_choice = "player_right_rock";
    }else if (choice == 1) {
        game_logic.computer_choice = "player_right_paper";
    }else if (choice == 2) {
        game_logic.computer_choice = "player_right_scissors";
    };
    change_game_status();
}

function turn(game_status, e) {
    console.log(e.target.classList[1]);
    let e_class = e.target.classList[1];
    if (game_status == true && e_class == "player_left_rock") {
        console.log("firing");
        game_logic.player_choice = e_class;
        computer_choice(3);
    }else if (game_status == true && e_class == "player_left_paper") {
        game_logic.player_choice = e_class;
        computer_choice(3);
    }else if (game_status == true && e_class == "player_left_scissors") {
        game_logic.player_choice = e_class;
        computer_choice(3);
    }
};

document.querySelector(".player_right_pick").textContent = "";
document.querySelector(".player_left_pick").textContent = "";

document.querySelector(".button").addEventListener("click", () => {
    const button_container = document.querySelector(".button_container");
    const button = document.querySelector(".button");
    element_array.push (button);
    console.log(element_array);
    start_round();
    game_logic.game_status = true;
});

document.querySelector(".player_left_pick_R_P_C").addEventListener("click", (e) =>  {
    turn(game_logic.game_status, e)
});
document.querySelector(".player_right_pick_R_P_C").addEventListener("click", () => turn(game_logic.game_status));

