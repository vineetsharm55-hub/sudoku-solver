# Sudoku Solver

A Data Structures project on **recursion and backtracking**, built twice: a browser interface and a console solver in C++.

## Versions

### C++ solver (`sudoku.cpp`)
A real backtracking solver:

1. Find the next empty cell.
2. Try digits 1 to 9, keeping only those that don't clash in the row, column or 3×3 box.
3. Recurse. If the recursion fails, reset the cell to empty and try the next digit.

It prints the board before and after solving, or reports that no solution exists.

```bash
g++ -o sudoku sudoku.cpp
./sudoku
```

### Web interface (`index.html`, `script.js`, `style.css`)
A 9×9 grid with the buttons **Solve**, **Hint**, **Check**, **Clear** and **Reset**. Open `index.html` in any browser, no build step needed.

> The web version loads one built-in puzzle and shows its stored solution. It does not run the backtracking algorithm in the browser; that logic lives in the C++ version.

## Project structure

```
sudoku-solver-master/
├── index.html    # Page layout
├── style.css     # Styling
├── script.js     # Grid, buttons, hint and check logic
└── sudoku.cpp    # Backtracking solver
```

## Ideas for next steps

- Port the backtracking solver to JavaScript so the web version solves any puzzle
- Animate the backtracking steps to visualise the recursion
- Let users enter their own puzzle

## Author

[@vineetsharm55-hub](https://github.com/vineetsharm55-hub)
