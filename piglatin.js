// storefront
// 1. replicate this functionality in JavaScript. Keep it as modular and concise as possible.
// 2. Challenge: Using JavaScript, create a method that is one line long that solves the base case. ("this party is really awesome" => "histay artypay isway eallyray awesomeway")
// HINT: Use functional programming methodology and ternary operators.

function pigLatin (sentence) {
	return sentence.split(' ').map(function(word) { return word.split('-').map(pigLatinWord).join('-'); }).join(' ');
}

function pigLatinWord (word) {
	var vowels = 'aeiou', punc = '',
		wlenI = word.length - 1,
		cap = word[0] === word[0].toUpperCase(),
		word = word.toLowerCase();

	if (word[wlenI].match(/\W/)) {
		punc = word[wlenI];
		word = word.slice(0, -1);
	}

	if (vowels.indexOf(word[0]) > -1) { word += 'w'; }
	else { word = word.slice(1) + word[0]; }

	if (cap) { word = word[0].toUpperCase() + word.slice(1); }

	return word + 'ay'+ punc
}

// challenge one liner for base case
function pigLatinBase (sentence) {
	return sentence.split(' ').map(function(word) { return ('aeiou'.indexOf(word[0]) > -1 ? word+'w': word.slice(1) + word[0]) + 'ay'; }).join(' ');
}

console.log(pigLatinBase('this party is really awesome'));
console.log(pigLatin('this party is really awesome'));
console.log(pigLatin('hey there, did you think that party was fun?'));
console.log(pigLatin('Hey, what did Jenny think about the party last night?'));
console.log(pigLatin("That backflip that Jenny did was uber-cool, don't you think?"));
