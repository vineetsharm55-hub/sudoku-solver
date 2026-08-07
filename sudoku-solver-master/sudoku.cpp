#include <iostream>
using namespace std;
void printBoard(int board[9][9])
{
    for(int row = 0; row < 9; row++)
    {
        if(row % 3 == 0)
        {
            cout << "+-------+-------+-------+" << endl;
        }

        for(int col = 0; col < 9; col++)
        {
            if(col % 3 == 0)
                cout << "| ";

            if(board[row][col] == 0)
                cout << ". ";
            else
                cout << board[row][col] << " ";
        }

        cout << "|" << endl;
    }

    cout << "+-------+-------+-------+" << endl;
}
bool findEmpty(int board[9][9], int &row, int &col)
{
    for(int i = 0; i < 9; i++)
    {
        for(int j = 0; j < 9; j++)
        {
            if(board[i][j] == 0)
            {
                row = i;
                col = j;
                return true;
            }
        }
    }

    return false;
}
bool isSafe(int board[9][9], int row, int col, int num)
{
    // Check Row
    for(int i = 0; i < 9; i++)
    {
        if(board[row][i] == num)
        {
            return false;
        }
    }

    // Check Column
    for(int i = 0; i < 9; i++)
    {
        if(board[i][col] == num)
        {
            return false;
        }
    }

    // Check 3x3 Box
    int startRow = row - row % 3;
    int startCol = col - col % 3;

    for(int i = 0; i < 3; i++)
    {
        for(int j = 0; j < 3; j++)
        {
            if(board[startRow + i][startCol + j] == num)
            {
                return false;
            }
        }
    }

    return true;
}
bool solveSudoku(int board[9][9])
{
    int row, col;

    // If no empty cell remains, puzzle is solved
    if(!findEmpty(board, row, col))
    {
        return true;
    }

    // Try numbers 1 to 9
    for(int num = 1; num <= 9; num++)
    {
        if(isSafe(board, row, col, num))
        {
            board[row][col] = num;

            // Recursive call
            if(solveSudoku(board))
            {
                return true;
            }

            // Backtracking
            board[row][col] = 0;
        }
    }

    return false;
}
int main()
{
    int board[9][9] =
    {
        {5,3,0,0,7,0,0,0,0},
        {6,0,0,1,9,5,0,0,0},
        {0,9,8,0,0,0,0,6,0},
        {8,0,0,0,6,0,0,0,3},
        {4,0,0,8,0,3,0,0,1},
        {7,0,0,0,2,0,0,0,6},
        {0,6,0,0,0,0,2,8,0},
        {0,0,0,4,1,9,0,0,5},
        {0,0,0,0,8,0,0,7,9}
    };

    cout << "==========================================" << endl;
    cout << "          SUDOKU SOLVER PROJECT" << endl;
    cout << "==========================================" << endl;

    cout << "\nOriginal Sudoku:\n" << endl;
    printBoard(board);

    if(solveSudoku(board))
    {
        cout << "\nSolved Sudoku:\n" << endl;
        printBoard(board);
    }
    else
    {
        cout << "\nNo Solution Exists!" << endl;
    }

    return 0;
}