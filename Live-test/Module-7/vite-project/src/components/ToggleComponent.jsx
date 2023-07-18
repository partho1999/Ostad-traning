import { useState } from "react";


const ToggleComponent = () => {

    const [toggle, setToggle]= useState(false)



    return (
        <>
            
            <button type="button" onClick={() => setToggle(!toggle)} className="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">
             toggle button
            </button>
          {toggle && (
            <p>hello im a paragraph</p>
          )}   
        </>
    );
};

export default ToggleComponent;