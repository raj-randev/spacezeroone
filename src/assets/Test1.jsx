import React from 'react'
import { useState } from 'react'

const data = [
    { name: 'Item A', price: 125 },
    { name: 'Item B', price: 230 },
    { name: 'Item C', price: 295 },
    { name: 'Item D', price: 245 },
    { name: 'Item E', price: 900 },
    { name: 'Item F', price: 875 },
    { name: 'Item G', price: 235 },
    { name: 'Item H', price: 400 },
];



const Test = () => {
   

    const [isShown, setIsShown] = useState(true)
    const [buttonText, setButtonText] = useState('View All' )

    const handleClick = () => {
        setIsShown(current => !current)
        setButtonText(()=> {
            if (buttonText === "View All") {
                setButtonText("Collapse")
            } else {
                setButtonText("View All")
            }
        })
      };

    const numAscending = [...data].sort((a, b)=> a.price - b.price)

    const allItems = numAscending
    
    let fiveItems = numAscending.slice(0, 5)
    
    return (
        <div className="ProductListContainer">
            
            <button className='buttonOne' onClick={handleClick}>{buttonText}</button>
            <table className='ProductTable'>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {isShown ? fiveItems.map((d)=> (
                        
                        <tr key={d.name}>
                            <td>{d.name}</td>
                            <td>{d.price}</td>
                        </tr>
                    )) : allItems.map((d)=> (
                        
                        <tr key={d.name}>
                            <td>{d.name}</td>
                            <td>{d.price}</td>
                        </tr> 
                        ))}
                </tbody>
                
            </table>
        </div>
    )
}

export default Test;
