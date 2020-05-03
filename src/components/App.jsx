import React, { useState } from 'react';
import Header from './Header';
import Items from './Items';
import Form from './Form';

//CHALLENGE: Make this app work by applying what you've learnt. DONE
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s



function App(){
    
    const[element, setElement] = useState("");
    const[listItems, setListItems] = useState([]);

    function handleChange(event){
        const newValue = event.target.value;
        setElement(newValue);
       
    }

    function AddElement(){
        setListItems((prev) => {
            return [...prev, element];
        });
        setElement("");
    }

    

    return (
        <div className="container">
            <Header />            
            <Form onChange={handleChange} value={element} onClick={AddElement}/>
            <Items items={listItems}/>
        </div>
    );
}
export default App;