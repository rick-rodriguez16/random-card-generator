window.onload = () => {

    // these arrays create the full deck of cards
    let suit = ["♥", "♣", "♦", "♠"];
    let value = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

    // random_suit() and random_value() choose a suit and value from each array
    random_suit = () => Math.floor((Math.random()) * 4);
    random_value = () => Math.floor((Math.random()) * 13);


    // get_suit() picks the random card suit from the suit[] array and applies its color
    get_suit = () => {

        let drawn_suit = suit[random_suit()];

        if (drawn_suit === "♥" || drawn_suit === "♦") {
            let red_suit = "<div class=\"drawn_suit\" style=\"color:red\">" + drawn_suit + "</div>";
            return red_suit;
        }
        else {
            let black_suit = "<div class=\"drawn_suit\">" + drawn_suit + "</div>";
            return black_suit;
        }
    }

    // get_value() picks a random card value from the value[] array
    get_value = () => {

        let drawn_value = value[random_value()];
        return drawn_value;
    }

    // drawn_card() creates the card with its suit and value
    drawn_card = () => {

        let suit = get_suit();
        let value = get_value();
        document.querySelector(".top-suit").innerHTML = suit;
        document.querySelector(".card-value").innerHTML = value;
        document.querySelector(".bottom-suit").innerHTML = suit;
    }

    // display_card() displays the card on the screen
    display_card = () => {

        document.querySelector(".wrapper").innerHTML =
            `<div class="card">
                <div class="top-suit"></div>
                <div class="card-value"></div>
                <div class="bottom-suit"></div>
            </div>`;
        drawn_card();
    }
}