
function multiply(num1, num2) {
	var result = num1 * num2;
	return result
}

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
	alert("Haha")
}

winningcombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
panels = [0, 1, 2, 3, 4, 5, 6, 7, 8]
xpanels = []
opanels = []

var tttpanel = document.querySelectorAll('canvas');

var opponento = panels[Math.floor(Math.random()*panels.length)];

function makeo(panelid) {
	opanels.push(Number(panelid));
	panels.splice(panels.indexOf(Number(panelid)), 1);
	var c = document.getElementById(panelid);
	var ctx = c.getContext("2d");
	ctx.beginPath();
	ctx.arc(150, 75, 75, 0, 2*Math.PI);
	ctx.stroke();
	for (x in winningcombos) {
		if (contains(winningcombos[x], xpanels)) {
			alert("You win!");
			break;
		}
		if (contains(winningcombos[x], opanels)) {
			alert("You lose!");
			break;
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
	ctx.lineTo(300, 150);
	ctx.moveTo(300, 0);
	ctx.lineTo(0, 150);
	ctx.stroke();
	if (panels.length === 0) {
		alert("It's a draw!")
	}
}

tttpanel[0].onclick = function() {
	var panelid = tttpanel[0].getAttribute('id');
	makex(panelid);
	makeo(opponento);
}
tttpanel[1].onclick = function() {
	var panelid = tttpanel[1].getAttribute('id');
	makex(panelid);
	makeo(opponento);
}
tttpanel[2].onclick = function() {
	var panelid = tttpanel[2].getAttribute('id');
	makex(panelid);
	makeo(opponento);
}
tttpanel[3].onclick = function() {
	var panelid = tttpanel[3].getAttribute('id');
	makex(panelid);
	makeo(opponento);
}
tttpanel[4].onclick = function() {
	var panelid = tttpanel[4].getAttribute('id');
	makex(panelid);
	makeo(opponento);
}
tttpanel[5].onclick = function() {
	var panelid = tttpanel[5].getAttribute('id');
	makex(panelid);
	makeo(opponento);
}
tttpanel[6].onclick = function() {
	var panelid = tttpanel[6].getAttribute('id');
	makex(panelid);
	makeo(opponento);
}
tttpanel[7].onclick = function() {
	var panelid = tttpanel[7].getAttribute('id');
	makex(panelid);
	makeo(opponento);
}
tttpanel[8].onclick = function() {
	var panelid = tttpanel[8].getAttribute('id');
	makex(panelid);
	makeo(opponento);
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