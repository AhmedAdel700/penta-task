const Rover = require("./rover");

describe("Mars Rover with Obstacle Detection", () => {
    test("should move forward when facing NORTH", () => {
        const rover = new Rover(0, 0, "NORTH");
        rover.execute("F");
        expect(rover.report()).toBe("(0, 1) NORTH");
    });

    test("should move backward when facing NORTH", () => {
        const rover = new Rover(0, 0, "NORTH");
        rover.execute("B");
        expect(rover.report()).toBe("(0, -1) NORTH");
    });

    test("should turn left correctly", () => {
        const rover = new Rover(0, 0, "NORTH");
        rover.execute("L");
        expect(rover.report()).toBe("(0, 0) WEST");
    });

    test("should turn right correctly", () => {
        const rover = new Rover(0, 0, "NORTH");
        rover.execute("R");
        expect(rover.report()).toBe("(0, 0) EAST");
    });

    test("should execute a complex command string", () => {
        const rover = new Rover(4, 2, "EAST");
        rover.execute("FLFFFRFLB");
        expect(rover.report()).toBe("(6, 4) NORTH");
    });

    test("should throw an error for invalid commands", () => {
        const rover = new Rover(0, 0, "NORTH");
        expect(() => rover.execute("X")).toThrow("Invalid command: X");
    });

    test("should detect obstacle and abort movement", () => {
        const obstacles = [[1, 0]];
        const rover = new Rover(0, 0, "EAST", obstacles);
        expect(() => rover.execute("F")).toThrow("Obstacle detected at (1, 0). Movement aborted.");
    });

    test("should avoid obstacle and continue moving after turning", () => {
        const obstacles = [[1, 0]];
        const rover = new Rover(0, 0, "EAST", obstacles);
        rover.execute("LFF");
        expect(rover.report()).toBe("(0, 2) NORTH");
    });
});
