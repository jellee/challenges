function isValid(strParam) {
  var lower = ['a','b','c','d','e','f', 'g', 'h', 'i', 'j'];
  var upper = ['N', 'L', 'Q', 'R'];
  var strLen = strParam.length;

  if (strLen == 1) {
    if (lower.indexOf(strParam[strLen-1]) > -1) {
      return true;
    }
    return false;
  }

  // else the string needs to start with upper
  if(strParam[0] == 'Z') {
    return isValid(strParam.substr(1));
  } else if (!upper.indexOf(strParam[0])) {
    return false;
  }

  // check combinations of substrings
  for (var i=0; i < strLen; i++) {
    if (isValid(strParam.substr(1, 1+i)) && 
      isValid(strParam.substr(2+i))) {
      return true;
    }
  }
  return false;
}

function validateString(strParam) {
  var strings = strParam.split(/\s+/);

  // run isValid for each string
  for(var i=0; i < strings.length; i++) {
  	var valid = "";
  	if (isValid(strings[i])) {
  		valid = "VALID";
  	} else {
  		valid = "INVALID";
  	}
 	console.log(strings[i] + " " + valid);
  }
}

validateString("Ze")
validateString("Za Nj")
validateString("QZja\nRhfa")