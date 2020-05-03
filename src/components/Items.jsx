import React from 'react';

function Items(props){

    const elementos = props.items;

    return (
        <div>
            <ul>
                {elementos.map((elem, index) => {
                    return (
                        <li 
                            key={index.toString()} 
                            onClick={() => {
                                props.onClick(index);
                            }}>
                            {elem}
                        </li>
                    );
                })}
            </ul>
        </div>        
    );
}
export default Items;