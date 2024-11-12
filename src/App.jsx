import { useState } from "react";


function App(){
    let [counter, shavan] = useState(Math.random().toFixed(2)*100);

    let add=()=>{
        // console.log('hello shavan ');
        shavan(counter + 1);
        console.log(counter + 1);
        
    }
    let remove=()=>{
        let x=counter-1;
        if(x<0){
            console.log(alert('negative will not show click on add button'));
        }else{
        shavan(x);
        console.log(x);
    }
        
    }
    return(
        <center>
        <div>
            <h1>this is your value :- {counter}</h1>
            <button onClick={add}>ADD {counter}</button><br/>
            <button onClick={remove}>REMOVE {counter}</button>
        </div>
        </center>
    )
}



export default App