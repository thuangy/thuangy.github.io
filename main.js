
function contains(arr1, arr2) {
	for (var i = 0; i < arr1.length; i++) {
		if ($.inArray(arr1[i], arr2) === -1) {
			return false
		}
	}
	return true
}

var tttreset = document.querySelector('button');
tttreset.onclick = function() {
	stopttt = false;
	panels = [0, 1, 2, 3, 4, 5, 6, 7, 8];
	xpanels = [];
	opanels = [];
	for (x in staticpanels) {
		var panelid = tttpanel[x].getAttribute('id');
		var c = document.getElementById(panelid);
		var ctx = c.getContext("2d");
		ctx.beginPath();
		ctx.clearRect(0, 0, 100, 100);
	}
	
}

var winningcombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
var twoinarow = [[0, 1], [1, 2], [0, 2], [3, 4], [4, 5], [3, 5], [6, 7], [7, 8], [6, 8], [0, 3], [3, 6], [0, 6], [1, 4], [4, 7], [1, 7], [2, 5], [5, 8], [2, 8], [0, 4], [4, 8], [0, 8], [2, 4], [4, 6], [2, 6]]
var staticpanels = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var panels = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var xpanels = [];
var opanels = [];
var stopttt = false;

var tttpanel = document.querySelectorAll('canvas');

var opponento = panels[Math.floor(Math.random()*panels.length)];

function strategy() {
	opponento = panels[Math.floor(Math.random()*panels.length)];
	for (x in twoinarow) {
		if (contains(twoinarow[x], opanels)) {
			var oindex = Math.floor(x/3);
			for (y in winningcombos[oindex]) {
				//alert(winningcombos[oindex]);
				if (contains([winningcombos[oindex][y]], twoinarow[x]) === false && contains([winningcombos[oindex][y]], panels)) {
					return winningcombos[oindex][y]
				}
			}
		}
		else if (contains(twoinarow[x], xpanels)) {
			var xindex = Math.floor(x/3);
			for (y in winningcombos[xindex]) {
				if (contains([winningcombos[xindex][y]], twoinarow[x]) === false && contains([winningcombos[xindex][y]], panels)) {
					return winningcombos[xindex][y]
				}
			}
		}
	}
	return opponento
}


function makeo(panelid) {
	opanels.push(Number(panelid));
	panels.splice(panels.indexOf(Number(panelid)), 1);
	var c = document.getElementById(panelid);
	var ctx = c.getContext("2d");
	ctx.beginPath();
	ctx.lineWidth = 10;
	ctx.arc(50, 50, 45, 0, 2*Math.PI);
	ctx.strokeStyle="#000000";
	ctx.stroke();
	for (x in winningcombos) {
		if (contains(winningcombos[x], opanels)) {
			stopttt = true;
			alert("You lose!");
			break
		}
	}
}

function makex(panelid) {
	xpanels.push(Number(panelid));
	panels.splice(panels.indexOf(Number(panelid)), 1);
	opponento = panels[Math.floor(Math.random()*panels.length)];
	var c = document.getElementById(panelid);
	var ctx = c.getContext("2d");
	ctx.moveTo(0,0);
	ctx.lineWidth = 10;
	ctx.lineTo(100, 100);
	ctx.moveTo(100, 0);
	ctx.lineTo(0, 100);
	ctx.stroke();
	for (x in winningcombos) {
		if (contains(winningcombos[x], xpanels)) {
			stopttt = true;
			alert("You win!");
			break
		} 
	}
	if (stopttt === false) {
		if (panels.length === 0) {
			alert("It's a draw!")
		}
	}
	
}

tttpanel[0].onclick = function() {
	if (stopttt === false) {
		if (contains([0], panels)) {
			var panelid = tttpanel[0].getAttribute('id');
			makex(panelid);
			if (stopttt === false) {
				opponento = strategy();
				makeo(opponento);
			}
		}
	}
}

tttpanel[1].onclick = function() {
	if (stopttt === false) {
		if (contains([1], panels)) {
			var panelid = tttpanel[1].getAttribute('id');
			makex(panelid);
			if (stopttt === false) {
				opponento = strategy();
				makeo(opponento);
			}
		}
	}
}

tttpanel[2].onclick = function() {
	if (stopttt === false) {
		if (contains([2], panels)) {
			var panelid = tttpanel[2].getAttribute('id');
			makex(panelid);
			if (stopttt === false) {
				opponento = strategy();
				makeo(opponento);
			}
		}
	}
}

tttpanel[3].onclick = function() {
	if (stopttt === false) {
		if (contains([3], panels)) {
			var panelid = tttpanel[3].getAttribute('id');
			makex(panelid);
			if (stopttt === false) {
				opponento = strategy();
				makeo(opponento);
			}
		}
	}
}

tttpanel[4].onclick = function() {
	if (stopttt === false) {
		if (contains([4], panels)) {
			var panelid = tttpanel[4].getAttribute('id');
			makex(panelid);
			if (stopttt === false) {
				opponento = strategy();
				makeo(opponento);
			}
		}
	}
}

tttpanel[5].onclick = function() {
	if (stopttt === false) {
		if (contains([5], panels)) {
			var panelid = tttpanel[5].getAttribute('id');
			makex(panelid);
			if (stopttt === false) {
				opponento = strategy();
				makeo(opponento);
			}
		}
	}
}

tttpanel[6].onclick = function() {
	if (stopttt === false) {
		if (contains([6], panels)) {
			var panelid = tttpanel[6].getAttribute('id');
			makex(panelid);
			if (stopttt === false) {
				opponento = strategy();
				makeo(opponento);
			}
		}
	}
}

tttpanel[7].onclick = function() {
	if (stopttt === false) {
		if (contains([7], panels)) {
			var panelid = tttpanel[7].getAttribute('id');
			makex(panelid);
			if (stopttt === false) {
				opponento = strategy();
				makeo(opponento);
			}
		}
	}
}

tttpanel[8].onclick = function() {
	if (stopttt === false) {
		if (contains([8], panels)) {
			var panelid = tttpanel[8].getAttribute('id');
			makex(panelid);
			if (stopttt === false) {
				opponento = strategy();
				makeo(opponento);
			}
		}
	}
}


var myImage = document.querySelector('img')

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'Scottish_Fold_2.jpg') {
		myImage.setAttribute('src', 'Scottish_Fold_1.jpg')
	} else {
		myImage.setAttribute('src', 'Scottish_Fold_2.jpg')
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}

if (!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}