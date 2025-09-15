class Rover {
    constructor(x, y, direction, obstacles = []) {
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.obstacles = new Set(obstacles.map(([x, y]) => `${x},${y}`));
    }

    static leftTurns = {
        NORTH: "WEST",
        WEST: "SOUTH",
        SOUTH: "EAST",
        EAST: "NORTH",
    };

    static rightTurns = {
        NORTH: "EAST",
        EAST: "SOUTH",
        SOUTH: "WEST",
        WEST: "NORTH",
    };

    static movement = {
        NORTH: { x: 0, y: 1 },
        SOUTH: { x: 0, y: -1 },
        EAST: { x: 1, y: 0 },
        WEST: { x: -1, y: 0 },
    };

    turnLeft() {
        this.direction = Rover.leftTurns[this.direction];
    }

    turnRight() {
        this.direction = Rover.rightTurns[this.direction];
    }

    move(deltaX, deltaY) {
        const nextX = this.x + deltaX;
        const nextY = this.y + deltaY;
        const nextPositionKey = `${nextX},${nextY}`;

        if (this.obstacles.has(nextPositionKey)) {
            throw new Error(`Obstacle detected at (${nextX}, ${nextY}). Movement aborted.`);
        }

        this.x = nextX;
        this.y = nextY;
    }

    moveForward() {
        const { x, y } = Rover.movement[this.direction];
        this.move(x, y);
    }

    moveBackward() {
        const { x, y } = Rover.movement[this.direction];
        this.move(-x, -y);
    }

    static commands = {
        F: "moveForward",
        B: "moveBackward",
        L: "turnLeft",
        R: "turnRight",
    };

    execute(commands) {
        for (let cmd of commands) {
            const action = Rover.commands[cmd];
            if (!action) throw new Error(`Invalid command: ${cmd}`);
            this[action]();
        }
        return this.report();
    }

    report() {
        return `(${this.x}, ${this.y}) ${this.direction}`;
    }
}

module.exports = Rover;
