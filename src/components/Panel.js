
import React, {useState} from 'react';
import Player from "./Player";
import Cell from "./Cell";
import { v4 as uuid4 } from 'uuid';


function Panel(props){

    const cells = props.cells;
    const [xPosition, setXPosition] = useState(0);
    const [yPosition, setYPosition] = useState(0);

    const moveRightHandler = () =>{
        props.moveRight(xPosition, yPosition);
        const tempYPosition = yPosition + 1;
        setYPosition(tempYPosition);
    }

    const moveLeftHandler = () =>{

        props.moveLeft(xPosition, yPosition);
        const tempYPosition = yPosition - 1;
        setYPosition(tempYPosition);
    }

    const moveDownHandler = () =>{
        props.moveDown(xPosition,yPosition);
        const tempXPosition = xPosition + 1;
        setXPosition(tempXPosition);
    }

    const moveUpHandler = () =>{
        props.moveUp(xPosition,yPosition);
        const tempXPosition = xPosition - 1;
        setXPosition(tempXPosition);
    }

    return (
        <div className="panel" >
            {cells.map(el=>
                <div className="cellrow-class" key={uuid4()}>
                    {el.map(elem => {
                         if(elem === 0){return <Player
                             moveLeftHandler={moveLeftHandler}
                             moveRightHandler={moveRightHandler}
                             moveDownHandler={moveDownHandler}
                             moveUpHandler={moveUpHandler}
                             cells={cells}
                             x={xPosition}
                             y={yPosition}
                             key={uuid4()}
                         />}
                        return < Cell cell={elem} key={uuid4()} />})}
                </div>
            )}
        </div>
    );
}

export default Panel;