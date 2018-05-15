/**
 * 
 */
function showAverSumResult() {
	var a = parseInt(document.getElementById('num1').value);
	var b = parseInt(document.getElementById('num2').value);
	var c = parseInt(document.getElementById('num2').value);
	var result = a + b + c;
	document.write(Math.round(result));

}

var arr = [ 6, 7, 10 ];
var sum = 0;
for (var i = 0; i < arr.length; i++) {
	sum += arr[i];
}
console.log(sum / arr.length);
