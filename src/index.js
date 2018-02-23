module.exports = function solveEquation(equation) {
  var result = [];
  var inputArray = equation.split(" ");
  var newArray = [];
  for (var i = 0; i < inputArray.length; i++){
    if (inputArray[i + 1] === "*" ){
      if (inputArray[i - 1] === "-"){
          newArray.push(-inputArray[i])
      }
	    else{
        newArray.push(parseInt(inputArray[i]))
      }
  }
  }
  if (inputArray[inputArray.length - 2] === "-"){
    newArray.push(parseInt(-inputArray[inputArray.length - 1]));
  }
  else{
    newArray.push(parseInt(inputArray[inputArray.length - 1]));
  }
  var a = newArray[0];
  var b = newArray[1];
  var c = newArray[2];
  var d = Math.pow(b, 2) - 4 * a * c;
  if (d > 0) {
    var result1 = (-b + Math.sqrt(d)) / (2 * a);
    var result2 = (-b - Math.sqrt(d)) / (2 * a);
  }
  result.push(Math.round(result1));
  result.push(Math.round(result2));
  return result.sort(function(a,b){return a - b});
}