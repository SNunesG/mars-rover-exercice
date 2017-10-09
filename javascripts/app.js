// Rover Obstacles Bonus
// ======================
var obstaclesBoard = [
  ['','','X','','','','','X'],
  ['','X','X','','','','','X'],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ','X','X',' ',' ','X',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  ['X','X','X','X','X','X','X','p'],
  ['r','','','','','','',''] ];
// ======================
// Rover Object Goes Here
// ======================
var rover1 ={
  name : "Rover 1",
  direction : "N",
  x : 0,
  y : 0,
  travelLog :[]
};
var rover2 ={
  name: "Rover 2",
  direction : "N",
  x : 0,
  y : 1,
  travelLog :[]
};
// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  if( rover.direction === "N"){
    rover.direction = "W";
  }
  else if( rover.direction === "W"){
    rover.direction = "S";
  }
  else if( rover.direction === "S"){
    rover.direction = "E";
  }
  else {
    rover.direction = "N";
  }
  console.log("DIRECTION " + rover.direction);
}

function turnRight(rover){
  console.log("turnRight was called!");
  if( rover.direction === "N"){
    rover.direction = "E";
  }
  else if( rover.direction === "W"){
    rover.direction = "N";
  }
  else if( rover.direction === "S"){
    rover.direction = "W";
  }
  else {
    rover.direction = "S";
  }
  console.log("DIRECTION " + rover.direction);
}


function turnRover(rover, turn){
  console.log("Moving " + rover.name);
  switch (turn) {
    case "l":
      turnLeft(rover);
      break;
    case "r":
      turnRight(rover);

      break;
    case "f":
      moveForward(rover);
      break;
    case "b":
      moveBackward(rover);
      break;
    default:
  }
}
function moveRober(robot, commandList) {
  var roverToMove = checkRobot(robot);
  if(roverToMove != null){
    for( var i = 0; i < commandList.length; i ++)
    {
      if((commandList[i].toLowerCase() === "l" ) ||
         (commandList[i].toLowerCase() === "r" ) ||
         (commandList[i].toLowerCase() === "f" ) ||
         (commandList[i].toLowerCase() === "b" )){
           turnRover(roverToMove, commandList[i].toLowerCase());
         }
    }
    return commandList[0].toLowerCase();
  }else {
    console.log("Type the correct Robot");
  }
}

function tracking(rover, x, y){
  rover.travelLog.push([x,y]);
  console.log("ROBOTS' LOG:");
  for( var i = 0; i < rover.travelLog.length; i++)
  {
    console.log(rover.travelLog[i]);
  }
}
  // Rover Obstacles Bonus
  // ======================
  function respectGrid(rover, x,y){
      var rowBoard = obstaclesBoard.length;
      var columnBoard = obstaclesBoard[0].length;
      // ======================

      if( ( x >= 0 && x <= rowBoard ) && ( y >= 0 && y <= columnBoard ) ) {
        if( obstaclesBoard[x][y] != "X" ){
          if( rover.name === "Rover 1"){
            if(rover2.x != x && rover2.y != y){
              return true;
            }else{
              console.log( "The robot " + rover2.name + " is on this place");
              return false;
            }
          }else{
            if( rover1.x != x && rover1.y != y){
              return true;
            }else {
              console.log( "The robot " + rover1.name + " is on this place");
              return false;
            }
          }
      }else{
        console.log( "OBSTACLE");
        return false;
      }
      }else{
        console.log("THE ROBOT MUST RESPECT THE GRID");
        return false;

      // Rover Obstacles Bonus
      // ======================
      }
    }

    function moveForward(rover){
      console.log("moveForward was called");
      if( rover.direction === "W"){
        if(respectGrid(rover, rover.x, rover.y - 1)){
          rover.y -= 1;
        }
      }
      else if( rover.direction === "N"){
        if(respectGrid(rover, rover.x - 1, rover.y)){
          rover.x -= 1;
        }
      }
      else if( rover.direction === "S"){
        if(respectGrid(rover, rover.x + 1, rover.y)){
          rover.x += 1;
        }
      }
      else {
        if(respectGrid(rover, rover.x, rover.y + 1)){
          rover.y += 1;
        }
      }
      tracking(rover, rover.x, rover.y);
    }
    function moveBackward(rover){
      console.log("moveBackward was called");
      if( rover.direction === "W"){
        if(respectGrid(rover, rover.x, rover.y + 1)){
          rover.y += 1;
        }
      }
      else if( rover.direction === "N"){
        if(respectGrid(rover, rover.x + 1, rover.y)){
          rover.x += 1;
        }
      }
      else if( rover.direction === "S"){
        if(respectGrid(rover, rover.x - 1, rover.y)){
          rover.x -= 1;
        }
      }
      else {
        if(respectGrid(rover, rover.x, rover.y - 1)){
          rover.y -= 1;
        }
      }
      tracking(rover, rover.x, rover.y);
    }

    function checkRobot(robot){
      switch (robot.toLowerCase()) {
        case "rover1":
          return rover1;
        case "rover2":
          return rover2;
        default:
          return null;
      }
    }

  // ======================
