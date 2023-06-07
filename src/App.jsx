import React, { useState } from "react";

const App=()=>
{

    let CurrTime= new Date().toLocaleTimeString();
    const [ctime,setctime]=useState(CurrTime);
    const updatetime=()=>
    {
        let CurrTime= new Date().toLocaleTimeString();
        setctime(CurrTime);
      
    };
    return(
        <>
            <h1>{ctime}</h1>
            <button onClick={updatetime}>Get Time</button>
        </>
    );
};
export default App;