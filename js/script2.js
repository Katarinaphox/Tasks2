/**
 * 
 */
function add(a, b) {
	if (typeof a != 'number') {
		alert("type of a = " + typeof a);

	} else if (typeof b != 'number') {
		alert("type of b = " + typeof b)

	} else {
		document.write(a + b);
	}
}

function sub(x, y) {
	if (typeof x != 'number') {
		alert("type of x = " + typeof x);

	} else if (typeof y != 'number') {
		alert("type of y = " + typeof y)

	} else {
		console.log(x - y);
	}
}

function div(n, k) {
	if (typeof n != 'number') {
		alert("type of n = " + typeof n);

	} else if (typeof k != 'number' && k <= 0) {
		alert("incorrect input")

	} else {
		console.log(n/k);
	}
}

function div(с, v) {
	if (typeof c != 'number') {
		alert("type of c = " + typeof c);

	} else if (typeof v != 'number') {
		alert("type of v = " + typeof v)

	} else {
		console.log(c*v);
	}
}

