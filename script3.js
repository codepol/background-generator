var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var quotes = [
	'<i>The Way Get Started Is To Quit Talking And Begin Doing.  </i><strong>Walt Disney</strong>',
	'<i>The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.  </i><strong>Winston Churchill</strong>',
	"<i>Don’t Let Yesterday Take Up Too Much Of Today.  </i><strong>Will Rogers</strong>",
	"<i>You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.  </i><strong>Unknown</strong>",
	"<i>It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.  </i><strong>Inspirational Quote By Vince Lombardi</strongr>",
	'<i>If You Are Working On Something That You Really Care About, You Don\’t Have To Be Pushed. The Vision Pulls You.  </i><strong>Steve Jobs</strong>',
	'<i>People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.  </i><strong>Rob Siltanen</strong>',
	'<i>Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.  </i><strong>Og Mandino</strong>',
	'<i>Entrepreneurs Are Great At Dealing With Uncertainty And Also Very Good At Minimizing Risk. That\’s The Classic Entrepreneur.  </i><strong>Mohnish Pabrai</strong>',
	'<i>We May Encounter Many Defeats But We Must Not Be Defeated.  </i><strong>Maya Angelou</strong>',
	'<i>Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do.  </i><strong>Johann Wolfgang Von Goethe</strong>',
	'<i>Imagine Your Life Is Perfect In Every Respect; What Would It Look Like?  </i><strong>Brian Tracy</strong>'
]

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

// RANDOMIZE BACKGROUND BUTTON

function randomizeSelect(selectId, fieldId) {

    var options = document.getElementById(selectId).children;
    var random = Math.floor(options.length * (Math.random() % 1));
    var option = options[random];
    option.selected = true;
    document.getElementById(fieldId).value = option.innerHTML; // You can use .value instead in both places
}

var values = {};

window.onload = function(e) {

    document.onchange = function(e) { // Event Delegation: http://davidwalsh.name/event-delegate
        var t = e.target;
        if(t.tagName == "SELECT")
            document.getElementById(t.id.replace("Select","Label")).value = t.children[t.selectedIndex].innerHTML;  
    }

    document.oninput = function(e) {
        var t = e.target;
        if(t.tagName == "INPUT") {
            if(values.hasOwnProperty(t.id))
                var options = values[t.id];
            else
                var options = document.getElementById(t.id.replace("Label","Select")).children;
                var currentValue = t.value;
      
            for(i in options) {
                if(options[i].innerHTML == currentValue) { // Can also use .value
                    options[i].selected = true;
                    break;
                }
            }  
        }
    }

    document.getElementById("randomize").onclick = function(e) {
        randomizeSelect("leftSelect", "leftLabel");
        randomizeSelect("rightSelect", "rightLabel");
    }
}

// RANDOM QUOTE BUTTON

function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}