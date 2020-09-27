import React, {useState} from 'react';
import Player from "./Player";
import Cell from "./Cell";
import { v4 as uuid4 } from 'uuid';

function Header(props){
    const [widthValue, setWidthValue] = useState(1);
    const [heightValue, setHeightValue] = useState(1);
    const wrongKeys = ['e', '+', '-', '.'];

    const cells = props.cells;
    const [xPosition, setXPosition] = useState(0);
    const [yPosition, setYPosition] = useState(0);

    const handleWidth = (event) =>{
        const valueItem = event.target.value;
        setWidthValue(valueItem);
    }

    const handleHeight = (event) =>{
        const valueItem = event.target.value;
        setHeightValue(valueItem);
    }
    const buttonHandler = () =>{
        setXPosition(0);
        setYPosition(0);
        props.generateBoard(widthValue, heightValue);
        // setWidthValue(1);
        // setHeightValue(1)
    }

    //Todo prevent from entering non digit characters
    function keyDown(e){
        for(let i = 0; i < wrongKeys.length; i++){
            if(e.key === wrongKeys[i]){
                e.preventDefault();
                console.log("wrong key " + e.key);
            }
        }
    }

    //<<<<<<<< div panel >>>>>>>>>>>>>>>>>>>>>>


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

        <div>
            <div className="header-class">
                <input type="number"  onChange={handleWidth}
                       onKeyDown={keyDown}
                       value={widthValue}
                       min="1" max="10"/>

                <label><strong>X</strong></label>

                <input type="number" onChange={handleHeight}
                       onKeyDown={keyDown}
                       value={heightValue}
                       min="1" max="10"/>

                <button className="main-button btn btn-primary"
                        onClick={buttonHandler}>board size</button>
            </div>
            <hr/>

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

        </div>)
}

export default Header;