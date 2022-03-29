for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    // debugger;
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
	console.log(`Wrapped ${gifts[i]} and added a bow!`);
	// debugger;
    }

    return gifts;
}

wrapGifts(gifts);

function writeCards(names, event) {
    let cardsArray = [];
    console.log("Inside writeCards function...");
    for (let i = 0; i < names.length; i++) {
	cardsArray.push("Thank you, " + names[i] + ", for the wonderful " + event + " gift!");
	// debugger;
    }

    return cardsArray;
}

cardsArray = writeCards(["Sam", "Tim"], "birthday");
console.log("cardsArray: " + cardsArray);

// Examples Provided In Assignment:
/*
function plantGarden() {
    let keepWorking = true;
    while (keepWorking) {
	chooseSeedLocation();
	plantSeed();
	waterSeed();
	keepWorking = checkForMoreSeeds();
    }
}

let countup = 0;
while (countup < 10) {
    console.log(countup++);
}

for (let countup = 0; countup < 10; countup++) {
    console.log(countup);
}
*/

function countDown(integer) {
    let counter = integer;
    while (counter >= 0) {
	console.log(counter);
	counter--;
    }
}

countDown(10);
