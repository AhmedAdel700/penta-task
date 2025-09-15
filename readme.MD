# 🚀 Mars Rover Simulator (Part 1 & 2)

This is a simple **Mars Rover simulator** built with JavaScript. The rover can move around a 2D grid, turn left or right, and move forward or backward — all based on a command string. It can also detect and avoid obstacles.

---

## 📦 Features

- Move forward (`F`) or backward (`B`)
- Turn left (`L`) or right (`R`)
- Detect obstacles and abort movement if one is encountered
- Report current position and direction
- Includes unit tests using Jest

---

## 🧠 How It Works

The rover is initialized with:

- A starting position `(x, y)`
- A direction it is facing (`NORTH`, `EAST`, `SOUTH`, or `WEST`)
- (Optional) A list of obstacle coordinates

It receives a string of commands, like `"FFRFLB"`, and executes them in order:

| Command | Action           |
|---------|------------------|
| `F`     | Move forward     |
| `B`     | Move backward    |
| `L`     | Turn left        |
| `R`     | Turn right       |

If the next position has an obstacle, the rover **stops and throws an error**.

---

## 🛠️ Installation

```bash
# Clone the repo
git clone https://github.com/AhmedAdel700/penta-task.git
cd penta-task

# Install dependencies
npm install

# To Run The App (Run The Test)
npm test