
function chickenMonkey () {
    for (i = 1; i <=100; i++) {
            if (i % 5 === 0 && i % 7 ===0) { //check if i is a multiple of 5 and 7
                console.log("ChickenMonkey")
            } else if (i % 5 === 0) {  //check if i is a multiple of 5
                console.log("Chicken")
            } else if (i % 7 === 0) {  //check if i is a multiple of 7
                console.log("Monkey")
            } else {                   //if nothing else is true, console.log the number
                console.log(i)
            }
        }
    }
    
chickenMonkey()

let bandNum = 1;

function takeNum (bandName = "Yo, put in a band name!") {
    console.log(`${bandNum}. ${bandName} `);
    bandNum++;
}
takeNum('Panic!')
takeNum('Jason Lancaster')
