

// changing individual properties with code and using setInterval
var rotationSpeedX = 0.01;
var rotationSpeedY = 0.02;
var rotationSpeedZ = 0.03;
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
	myOtherBox.object3D.rotation.x -= rotationSpeed;
	console.log(myOtherBox.object3D.rotation.x);
}

setInterval(spin, 16); //equivalent to 60 fps
