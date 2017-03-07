// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var quote;

//RANDOM BACKGROUND COLOR FUNCTION/
//Creates a random number for each RGB value//
function colourify() {
  return Math.floor(Math.random() * 256 );
  }

//Creates and puts together RGB value for use in background color//
function randomColour() {
  var colour = 'rgb(';
    colour += colourify() + ',';
    colour += colourify() + ',';
    colour += colourify() + ')';
    return colour;
  }

// RANDOM QUOTE GENERATOR FUNCTION//
//Counter tracks indexes in array//
var counter  = quotes.length;

//Calculates random number within the length of the 'quotes' array//
//Returns object in the array based off the random number//
function getRandomQuote() {
  
  //resets counter to original value once all quotes have been displayed once//
  if (counter === 0 ) {
    counter = quotes.length;
  }
  
  //creates random number to pick index within quotes array and stores object in variable//
  var index = Math.floor(Math.random() * counter);
  quote = quotes[index]
  console.log(quote);
  
  //removes quote object from array and returns it into new array//
  //this prevents quote from being duplicated before all quotes have been shown//
  
  var newQuote = quotes.splice(index,1);
  
  //pushes object in new array back into the end of old array//
  quotes.push(newQuote[0]);
  
  //counter decreases so that it does not take newly pushed object into account//
  counter -= 1;
  
	return quote

}

//PRINT FUNCTION FOR RANDOM QUOTE//
//Calls getRandomQuote function//
//Constructs string of HTML containing the quotes properties//
//Prints the string into 'quote-box' div in index.html//
function printQuote() {
	var printHTML = "";
  quote = getRandomQuote();
	printHTML += "<p class='quote'>" + quote['quote'] + "</p>";
	printHTML += "<p class='source'>" + quote['source'];
  //If the quote has no citation, display nothing for that property//
    if (quote['citation'] == undefined) {
      printHTML += "<span class='citation'>" + ""  + "</span>"
    } else {
      printHTML += "<span class='citation'>" + quote['citation'] + "</span>";
    }
  //If the quote has no year, display nothing for that property//
    if (quote['year'] == undefined) {
      printHTML += "<span class='year'>" + ""  + "</span>"
    }  else { 
      printHTML += "<span class='year'>" + quote['year'] + "</span></p>";
    }
  //Prints tags property//
  printHTML += "<p class='tags'>" + quote['tags']; + "</p>"
  //Prints HTML string to 'quote-box' div//
  document.getElementById('quote-box').innerHTML = printHTML
  //Calls random background color function//
  document.body.style.backgroundColor = randomColour();
  }

printQuote();

//QUOTE INTERVAL DISPLAY//
//Displays a random quote every 5 seconds regardless if user clicks button to show new quote//
setInterval(function(){printQuote()}, 5000);

