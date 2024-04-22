//Props.jsx
-------------
-------------

import React, {Component} from 'react';

const Fun1 = () => {
    return (
        <thead className=''>
        <tr>
            <th>Name</th>
            <th>age</th>
            <th>Action</th>
        </tr>
    </thead>
    )

}
const Fun2 = (props) => {
    // const {character,removeCharacter}=props                  ****************//destructuring//************
    const rows=character.map((e,i)=>{
        return (<tr key={i}><td>{e.name}</td>
        <td>{e.age}</td>
        <td><button onClick={()=>removeCharacter(i)}>Delete</button></td></tr>)
    })
    return (
        <tbody className='container'>
        {rows}
    </tbody>
    )
}
export class Props extends Component {
    render() {
       const {character,removeCharacter}=this.props
        return (
            <table>
                
                <Fun1/>
                
                <Fun2  removeCharacter={removeCharacter} character={character}/>
            </table>
        )
    }
}
export default Props;


//Filter.jsx
--------------
--------------


import {Component} from 'react'
import Fun2 from './Props';

class Filter extends Component{
state={
    character:[
        {
            name:"akila",
            age:20,
        },
        {
            name:"aki",
            age:18,
        },
        {
            name:"akil",
            age:21,
        },
        {
            name:"akilaa",
            age:17,
        },
    ]
}


removeCharacter=(index)=>{
const {character}= this.state

let filtered=character.filter((e,i)=>{
    return i!==index

});
this.setState({character:filtered})
}
render(){
   
  const {character}=this.state                                                  //using my state by this KEYWORD......

    
    return (
        <div className='container'>
            <h1>Table</h1>
            <Fun2 removeCharacter={this.removeCharacter} character={character}/>                 //We want to Declare like this.........
        </div>
    )
}}
export default Filter;
