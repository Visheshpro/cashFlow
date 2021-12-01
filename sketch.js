var gameState = "Starting"

function preload(){

  
}

function setup() {

  //Creating canvas
  createCanvas(displayWidth, displayHeight);

  //Displaying Logo
  loadImage('Assets/cashflow.png', cashflow => {
    image(cashflow, displayWidth/2-200, 50,400,400);
  });

  //New Room Buttons
  newRoomButton = createButton('New room')
  newRoomButton.position(displayWidth/2-200,500)
  newRoomButton.style('background-color','yellow')
  newRoomButton.style('color','white')
  newRoomButton.style('padding','15px 32px')
  newRoomButton.style('display','inline-block')
  newRoomButton.style('text-align','center')
  newRoomButton.style('font-size','16px') 
  newRoomButton.style('font-size','16px')
  newRoomButton.style('border','2px solid yellow')
  newRoomButton.style('border-radius','4px')
  newRoomButton.style('transition-duration','0.4s')
  newRoomButton.mouseOver(hoverOverRoomButton)
  newRoomButton.mouseOut(mouseOutRoomButton)
  newRoomButton.mousePressed(changeToScreen2)

  // Continue Game Button
  continueButton = createButton('Continue Game')
  continueButton.position(displayWidth/2,500)
  continueButton.style('background-color','orange')
  continueButton.style('color','white')
  continueButton.style('padding','15px 32px')
  continueButton.style('display','inline-block')
  continueButton.style('text-align','center')
  continueButton.style('font-size','16px') 
  continueButton.style('font-size','16px')
  continueButton.style('border','2px solid orange')
  continueButton.style('border-radius','4px')
  continueButton.style('transition-duration','0.4s')
  continueButton.mouseOver(hoverOverContinueButton)
  continueButton.mouseOut(mouseOutContinueButton)
  
}

function draw() {

  drawSprites()
}


function hoverOverRoomButton() {
  newRoomButton.style('background-color','white')
  newRoomButton.style('color','yellow')
}

function mouseOutRoomButton() {
  newRoomButton.style('background-color','yellow')
  newRoomButton.style('color','white')
}

function hoverOverContinueButton() {
  continueButton.style('background-color','white')
  continueButton.style('color','orange')
}

function mouseOutContinueButton() {
  continueButton.style('background-color','orange')
  continueButton.style('color','white')
}

function changeToScreen2() {
  clear()
  newRoomButton.remove()
  continueButton.remove()
  var Screen2 = new NewGame()
}