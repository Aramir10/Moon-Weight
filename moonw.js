

var user = prompt("input your weight ");
var planet = parseInt(prompt("Chosse your planet: 1 for Mars, 2 for Moon, 3 for Jupiter 4 for Venus, 5 for Saturn "));
var peso = parseInt(user);

var gearth = 9.8;


var gmars = 3.7;
var gluna = 1.6;
var gjupiter = 24.7;
var gsaturn = 10.44;
var gvenus = 8.87;
var final;
var name;
final = parseInt(final);

if (planet === 1) {
	final = peso * gmars / gearth;
	name = "Mars";
} else if (planet === 2) {
	final = peso * luna / gearth;
	name = "Moon";
} else if (planet === 3) {
	final = peso * gjupiter / gearth;
	name = " Jupiter"
} else if (planet === 4) {
	final = peso * gvenus / gearth;
	name = " Venus "
} else if (planet === 5) {
	final = peso * gsaturn / gearth
	name = "Saturn"
} else {
	alert("thats  not valid ")
}


document.write(" Your weight in " + name + " is " + final);
