import React from "react";

function Player(props){
      const cells = props.cells;
      const x = props.x;
      const y = props.y;

    //Todo arrow left
    const arrowRightHandler = ()=>{
        props.moveRightHandler();
        console.log("Moved right");
    }

    //Todo arrow right
    const arrowLeftHandler = ()=>{
        props.moveLeftHandler();
        console.log("Moved left");
    }

    //todo arrow up
    const arrowUpHandler = ()=>{
        props.moveUpHandler();
        console.log("Moved up");
    }

    //todo arrow down
    const arrowDownHandler = ()=>{
        props.moveDownHandler();
        console.log("Moved down");
    }


    return <div className="player">
        <div className="grid-item"/>
        <button  disabled={x === 0} className="grid-item" onClick={arrowUpHandler}>⇧</button>
        <div className="grid-item"/>
        <button disabled={y === 0} className="grid-item" onClick={arrowLeftHandler}>⇦</button>
        {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
        <div className="grid-item">🐱</div>
        <button disabled={y === cells[x].length-1} className="grid-item" onClick={arrowRightHandler}>⇨</button>
        <div className="grid-item"/>
        <button disabled={x === cells.length-1} className="grid-item" onClick={arrowDownHandler}>⇩</button>
        <div className="grid-item"/>
    </div>
}

export default Player;