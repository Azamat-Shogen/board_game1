import React, { useState } from 'react';
import './App.css';
import Board from "./components/Board";


const cellArr = [[0]];

function App() {

    const [cells, setCells] = useState(cellArr)


    //Todo create board
    const generateBoard = (widthValue, heightValue) =>{
        const outer = [];

        for(let i = 0; i < heightValue; i++){
            const inner = [];
            for(let j = 0; j < widthValue; j++){
                inner.push("");
            }
            outer.push(inner);
        }
        outer[0][0] = 0;
        setCells(outer);
    }

    //Todo move left
    const moveRight = (x, y)=>{
        const a = [...cells];
        const right = a.map(elem => elem.map(()=> ""));
        right[x][y+1] = 0;
        setCells(right);
    }

    //Todo move right
    const moveLeft = (x, y)=>{
        const a = [...cells];
        const left = a.map(elem => elem.map(()=> ""));
        left[x][y-1] = 0;
        setCells(left);
    }

    //Todo move down
    const moveDown = (x, y)=>{
        const a = [...cells];
        const down = a.map(elem => elem.map(()=> ""));
        down[x+1][y] = 0;
        setCells(down);
    }

    //Todo move up
    const moveUp = (x, y)=>{
        const a = [...cells];
        const up = a.map(elem => elem.map(()=> ""));
        up[x-1][y] = 0;
        setCells(up);
    }

    return (
        <div className="App">
            <Board generateBoard={generateBoard}
                    cells={cells}
                    moveLeft={moveLeft}
                    moveRight={moveRight}
                    moveDown={moveDown}
                    moveUp={moveUp}
            />

        </div>
    );
}

export default App;
