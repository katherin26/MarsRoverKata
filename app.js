

// Create 2D (10x10) array representing area where rover will be moving 
let grid = [
    [{x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}, {x: 3, y: 0}, {x: 4, y: 0}, {x: 5, y: 0}, {x: 6, y: 0}, {x: 7, y: 0}, {x: 8, y: 0}, {x: 9, y: 0}],
    [{x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}, {x: 3, y: 1}, {x: 4, y: 1}, {x: 5, y: 1}, {x: 6, y: 1}, {x: 7, y: 1}, {x: 8, y: 1}, {x: 9, y: 1}],
    [{x: 0, y: 2}, {x: 1, y: 2}, {x: 2, y: 2}, {x: 3, y: 2}, {x: 4, y: 2}, {x: 5, y: 2}, {x: 6, y: 2}, {x: 7, y: 2}, {x: 8, y: 2}, {x: 9, y: 2}],
    [{x: 0, y: 3}, {x: 1, y: 3}, {x: 2, y: 3}, {x: 3, y: 3}, {x: 4, y: 3}, {x: 5, y: 3}, {x: 6, y: 3}, {x: 7, y: 3}, {x: 8, y: 3}, {x: 9, y: 3}],
    [{x: 0, y: 4}, {x: 1, y: 4}, {x: 2, y: 4}, {x: 3, y: 4}, {x: 4, y: 4}, {x: 5, y: 4}, {x: 6, y: 4}, {x: 7, y: 4}, {x: 8, y: 4}, {x: 9, y: 4}],
    [{x: 0, y: 5}, {x: 1, y: 5}, {x: 2, y: 5}, {x: 3, y: 5}, {x: 4, y: 5}, {x: 5, y: 5}, {x: 6, y: 5}, {x: 7, y: 5}, {x: 8, y: 5}, {x: 9, y: 5}],
    [{x: 0, y: 6}, {x: 1, y: 6}, {x: 2, y: 6}, {x: 3, y: 6}, {x: 4, y: 6}, {x: 5, y: 6}, {x: 6, y: 6}, {x: 7, y: 6}, {x: 8, y: 6}, {x: 9, y: 6}],
    [{x: 0, y: 7}, {x: 1, y: 7}, {x: 2, y: 7}, {x: 3, y: 7}, {x: 4, y: 7}, {x: 5, y: 7}, {x: 6, y: 7}, {x: 7, y: 7}, {x: 8, y: 7}, {x: 9, y: 7}],
    [{x: 0, y: 8}, {x: 1, y: 8}, {x: 2, y: 8}, {x: 3, y: 8}, {x: 4, y: 8}, {x: 5, y: 8}, {x: 6, y: 8}, {x: 7, y: 8}, {x: 8, y: 8}, {x: 9, y: 8}],
    [{x: 0, y: 9}, {x: 1, y: 9}, {x: 2, y: 9}, {x: 3, y: 9}, {x: 4, y: 9}, {x: 5, y: 9}, {x: 6, y: 9}, {x: 7, y: 9}, {x: 8, y: 9}, {x: 9, y: 9}]
];


function moveForward(roverObject) {
    console.log('Moving forward');

    if (roverObject.direction === 'W') {
        if (roverObject.x === 0) {
            console.log('Cannot move forward. Rover has reached west boundary')
        } else {
            roverObject.x--;
        }
    }

    if (roverObject.direction === 'E') {
        if (roverObject.x === 9) {
            console.log('Cannot move forward. Rover has reached east boundary');
        } else {
            roverObject.x++;
        }
    }

    if (roverObject.direction === 'N') {
        if (roverObject.y === 0) {
            console.log('Cannot move forward. Rover has reached north boundary');
        } else {
            roverObject.y--;
        }
    }

    if (roverObject.direction === 'S') {
        if (roverObject.y === 9) {
            console.log('Cannot move forward. Rover has reached north boundary');
        } else {
            roverObject.y++;
        }
    }

    roverObject.travelLog.push({x: roverObject.x, y: roverObject.y});
    console.log(`New position is x = ${roverObject.x}  y = ${roverObject.y}`);
}


function turnLeft(roverObject) {
    console.log('Turning left');

    switch(roverObject.direction) {
        case 'N': roverObject.direction = 'W'; break;
        case 'W': roverObject.direction = 'S'; break;
        case 'S': roverObject.direction = 'E'; break;
        case 'E': roverObject.direction = 'N'; break;
    }

    console.log(`Now facing ${roverObject.direction}`);
}

function turnRight(roverObject) {
    console.log('Turning right');

    switch(roverObject.direction) {
        case 'N': roverObject.direction = 'E'; break;
        case 'E': roverObject.direction = 'S'; break;
        case 'S': roverObject.direction = 'W'; break;
        case 'W': roverObject.direction = 'N'; break;
    }

    console.log(`Now facing ${roverObject.direction}`);
}

function moveRover(roverObject, commands) {

    for(let i = 0; i < commands.length; i++) {
        let command = commands[i];

        if (command === 'r') {
            turnRight(roverObject);
        }

        if (command === 'l') {
            turnLeft(roverObject);
        }

        if (command === 'f') {
            moveForward(roverObject);
        }
    }

    console.log('This is the trajectory traveled:');
    console.log(roverObject.travelLog);
}

// Create object representing rover and its properties
let rover = {
    direction: 'N',
    x: 0,
    y: 0,
    travelLog: []
};


moveRover(rover, "rffrfflfrff");