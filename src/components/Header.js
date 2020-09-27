import React, {useState} from 'react';

function Header(props){
    const [widthValue, setWidthValue] = useState(1);
    const [heightValue, setHeightValue] = useState(1);
    const wrongKeys = ['e', '+', '-', '.'];

    const handleWidth = (event) =>{
        const valueItem = event.target.value;
        setWidthValue(valueItem);
    }

    const handleHeight = (event) =>{
        const valueItem = event.target.value;
        setHeightValue(valueItem);
    }
    const buttonHandler = () =>{
        props.generateBoard(widthValue, heightValue);
        setWidthValue(1);
        setHeightValue(1)
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

    return (<div className="header-class">

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
    </div>)
}

export default Header;