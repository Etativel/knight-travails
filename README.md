# Chess Knight Movement Animation

This project simulates the movement of a knight on a chessboard, allowing users to click on squares to see the knight move along the valid paths in a smooth sliding animation. The knight's movement adheres to the unique "L" shape rule of chess, making it a fun and interactive way to visualize the knight's potential moves.

## Features

- **Interactive Chessboard**: A dynamic 8x8 chessboard is created where each square can be clicked.
- **Knight Movement Animation**: The knight smoothly slides along its path rather than jumping, enhancing the visual experience.
- **Valid Moves Calculation**: The project calculates valid knight moves based on the current position, providing users with an accurate representation of potential movements.

## Technologies Used

- **HTML**: For structuring the chessboard layout.
- **CSS**: For styling the chessboard and knight icon.
- **JavaScript**: For implementing the logic of knight movements and animations.
- **ES6 Modules**: For organizing the code into separate files.

## Installation

1. **Clone the repository**:

   ```bash
   git clone git@github.com:Etativel/knight-travails.git
   cd chess-knight-movement
   ```

2. **Open the `index.html` file** in your preferred web browser to view the project.

## How to Use

1. Click on any square on the chessboard to see the knight move from its current position to the clicked square.
2. The knight will animate smoothly along the path, stopping at each valid move.

## Project Structure

```
chess-knight-movement/
│
├── index.html           # Main HTML file
├── index.js             # Main Javascript file
├── styles/              # Folder containing CSS files
│   └── style.css        # CSS for styling the chessboard and knight
└── js/                  # Folder containing JavaScript files
    └── gameboard.js     # JavaScript logic for knight moves
```

## Example Knight Moves

- Clicking on a square will animate the knight moving according to the rules of chess.
- The knight can move in an "L" shape (two squares in one direction and one square perpendicular).

## Future Improvements

- Add visual indicators for possible moves when the knight is clicked.
- Include an option to reset the board or move the knight back to the starting position.
- Implement additional chess pieces and their movements.

## Acknowledgements

- This project was inspired by the mechanics of chess and aims to provide an engaging way to learn about the knight's movements.
- Special thanks to all the contributors and resources that helped in the development of this project.
