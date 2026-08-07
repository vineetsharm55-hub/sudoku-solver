
const board = document.getElementById("board");
const cells = [];
let hintIndex = 0;
const solution = [
    [5,3,4,6,7,8,9,1,2],
    [6,7,2,1,9,5,3,4,8],
    [1,9,8,3,4,2,5,6,7],
    [8,5,9,7,6,1,4,2,3],
    [4,2,6,8,5,3,7,9,1],
    [7,1,3,9,2,4,8,5,6],
    [9,6,1,5,3,7,2,8,4],
    [2,8,7,4,1,9,6,3,5],
    [3,4,5,2,8,6,1,7,9]
];

// Default Sudoku Puzzle
const puzzle = [
    [5,3,0,0,7,0,0,0,0],
    [6,0,0,1,9,5,0,0,0],
    [0,9,8,0,0,0,0,6,0],
    [8,0,0,0,6,0,0,0,3],
    [4,0,0,8,0,3,0,0,1],
    [7,0,0,0,2,0,0,0,6],
    [0,6,0,0,0,0,2,8,0],
    [0,0,0,4,1,9,0,0,5],
    [0,0,0,0,8,0,0,7,9]
];

// Create 81 input boxes
for(let row = 0; row < 9; row++)
{
    for(let col = 0; col < 9; col++)
    {
        let input = document.createElement("input");

        input.type = "text";
        input.maxLength = 1;
        input.className = "cell";

        if(puzzle[row][col] !== 0)
        {
            input.value = puzzle[row][col];
            input.readOnly = true;
            input.style.background = "#e9ecef";
            input.style.fontWeight = "bold";
        }

       board.appendChild(input);
        cells.push(input);
    }
}
document.getElementById("solve").addEventListener("click", function(){

    let index = 0;

    for(let i=0;i<9;i++)
    {
        for(let j=0;j<9;j++)
        {
            cells[index].value = solution[i][j];
            index++;
        }
    }

});
document.getElementById("reset").addEventListener("click", function(){

    let index = 0;

    for(let i = 0; i < 9; i++)
    {
        for(let j = 0; j < 9; j++)
        {
            if(puzzle[i][j] == 0)
            {
                cells[index].value = "";
                cells[index].readOnly = false;
                cells[index].style.background = "white";
            }
            else
            {
                cells[index].value = puzzle[i][j];
                cells[index].readOnly = true;
                cells[index].style.background = "#e9ecef";
            }

            index++;
        }
    }
 // Reset hint counter
    hintIndex = 0;

    // Reset status message
    document.getElementById("status").innerHTML = "Ready to Solve 🎯";
    document.getElementById("status").style.color = "black";
});
document.getElementById("check").addEventListener("click", function () {

    let correct = true;

    let index = 0;

    for(let i = 0; i < 9; i++)
    {
        for(let j = 0; j < 9; j++)
        {

            if(puzzle[i][j] == 0)
            {
                if(Number(cells[index].value) !== solution[i][j])
                {
                    correct = false;
                }
            }

            index++;
        }
    }

    if(correct)
    {
        document.getElementById("status").innerHTML =
        "🎉 Congratulations! Sudoku Solved Successfully.";

        document.getElementById("status").style.color = "green";
    }
    else
    {
        document.getElementById("status").innerHTML =
        "❌ Some cells are incorrect. Try Again!";

        document.getElementById("status").style.color = "red";
    }

});
document.getElementById("hint").addEventListener("click", function(){

    while(hintIndex < 81)
    {
        let row = Math.floor(hintIndex / 9);
        let col = hintIndex % 9;

        if(puzzle[row][col] == 0)
        {
            cells[hintIndex].value = solution[row][col];
            cells[hintIndex].style.background = "#fff3cd";
            hintIndex++;
            return;
        }

        hintIndex++;
    }

    alert("No more hints available!");
});