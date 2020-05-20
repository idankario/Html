var scene = new THREE.Scene();
document.addEventListener( 'mousemove', onMouseMove, false );
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
var mouseX;
var mouseY;

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

window.addEventListener("resize", function() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
});

var distance = Math.min(300, window.innerWidth / 4);
var geometry = new THREE.Geometry();

for (var i = 0; i < 1500; i++) {

  var vertex = new THREE.Vector3();

  var theta = THREE.Math.randFloatSpread(400); 
  var phi = THREE.Math.randFloatSpread(360); 

  vertex.x = distance * Math.sin(theta) * Math.cos(phi);
  vertex.y = distance * Math.sin(theta) * Math.sin(phi);
  vertex.z = distance * Math.cos(theta);

  geometry.vertices.push(vertex);
}
var particles = new THREE.Points(geometry, new THREE.PointsMaterial({color: 0xff44ff, size: 2}));
particles.boundingSphere = 50;


var renderingParent = new THREE.Group();
renderingParent.add(particles);

var resizeContainer = new THREE.Group();
resizeContainer.add(renderingParent);
scene.add(resizeContainer);

camera.position.z = 400;

var animate = function () {
  requestAnimationFrame( animate );
  renderer.render( scene, camera );
};
var myTween;
function onMouseMove(event) {
  if(myTween)
    myTween.kill();
  
  mouseX = ( event.clientX / window.innerWidth ) * 2 - 1;
  mouseY = - ( event.clientY / window.innerHeight ) * 2 + 1;
  myTween = gsap.to(particles.rotation, {duration: 0.1, x: mouseY*-1, y: mouseX});
  //particles.rotation.x = mouseY*-1;
  //particles.rotation.y = mouseX;
}
animate();

// Scaling animation
var animProps = {scale: 1, xRot: 0, yRot: 0};
gsap.to(animProps, {duration: 10, scale: 1.3, repeat: -1, yoyo: true, ease: "sine", onUpdate: function() {
  renderingParent.scale.set(animProps.scale,animProps.scale,animProps.scale);
}});

gsap.to(animProps, {duration: 120, xRot: Math.PI * 2, yRot: Math.PI * 4, repeat: -1, yoyo: true, ease: "none", onUpdate: function() {
  renderingParent.rotation.set(animProps.xRot,animProps.yRot,0);
}});




var currentTab= 0;// Current tab is set to be the first tab (0)

showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
}
