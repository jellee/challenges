# pig latin
# add way if starts with vowel
# else move first letter and add ay
import re

def pigLatin (sentence) :
	sarray = sentence.split()
	newarray = []

	for word in sarray :
		subwords = [pigLatinWord(w) for w in word.split('-')]
		newarray.append('-'.join(subwords))
	return ' '.join(newarray)

def pigLatinWord (word) :
	vowels, punc = 'aeiou', ''
	wlenI = len(word) - 1
	cap = (word[0] == word[0].upper())
	word = word.lower()

	if re.match('[^\w]', word[wlenI]) :
		punc = word[wlenI]
		word = word[:wlenI]

	if word[0] in vowels : word += 'w'
	else : word = word[1:] + word[0]

	if cap : word = word.capitalize()
	return word + 'ay'+ punc

print pigLatin('this party is really awesome')
print pigLatin('hey there, did you think that party was fun?')
print pigLatin('Hey, what did Jenny think about the party last night?')
print pigLatin("That backflip that Jenny did was uber-cool, don't you think?")
