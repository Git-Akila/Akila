import React, { useState } from 'react'

function ToDolist() {
    const [State, setState] = useState([
        {
            id: 1,
            name: 'Cricket',
            checked: true,
        },
        {
            id:2,
            name:'Chess',
            checked:false,
        },
        {
            id:3,
            name:'PlayGround',
            checked:true,
        },
    ])
    const onChangefun=(id)=>{
            const a=State.map((e)=>id===e.id? {...e,checked:!e.checked}:e)     //condi ? {..}:null
            setState(a);
            localStorage.setItem("todo",JSON.stringify(a));

    }
    const deleteFun=(id)=>{
        const b=State.filter((e)=>e.id!==id)
        setState(b);

    }
    
    return (
        <>{(State.length)?(
        
        <ul>
            {State.map((e)=>{
                return (
                    <li key={e.id}>
                        <input type='checkbox' onChange={()=>onChangefun(e.id)} checked={e.checked}/>
                        <label style= {e.checked?{textDecoration:'line-through'}:null} onDoubleClick={()=>onChangefun(e.id)}>{e.name}</label>
                        <button onClick={()=>deleteFun(e.id)}>Delete</button>
                    </li>
                )
            })}
            </ul>):(
                <p>List is empty!!!!</p>)}

        </>
    )
}

export default ToDolist;


// import React,{useState} from 'react';

// function ToDolist() {
//     const [state,setState]=useState(
//     [
//         {
//             id:1,
//             checked:true,
//             item:'Coder',
//         },
//         {
//             id:2,
//             checked:true,
//             item:'Cricketer',
//         },
//         {
//             id:3,
//             checked:false,
//             item:'AI developer',
//         },]
//     )
//    const handleCheck=(id)=>{    // ...item helps to select all objec values
//     const listitems=state.map((item)=> item.id ===id?{...item,checked:!item.checked}:item)
//     setState(listitems);
//     localStorage.setItem("todo",JSON.stringify(listitems));
//    }


//    const handleDelete=(id)=>{
//     const listitems=state.filter((item)=> item.id!==id)
//     setState(listitems);
//    }
//     // const numbers=[-1,-2,-3,0, 1,2,3,4,5];
//     // const item=numbers.filter(n=>n>=0).map(n=>({numbers:n}))
//     // console.log(item);
//   return (
//     <>{(state.length)?(
// <ul>
//     {state.map((item)=>(
//         <li>
//             <input type="checkbox" checked={item.checked}
//             onChange={()=>{handleCheck(item.id)}}
//             />
//             <label style={(item.checked)?{textDecoration:'line-through'}:null}
//             onDoubleClick={()=>handleCheck(item.id)}>{item.item}</label>
//             <button onClick={()=>{handleDelete(item.id)}}>Delete</button>
//         </li>
//     ))}</ul>):
//     (<p>Your list is Empty!!!</p>)
//     }
//     </>
//   )
// }

// export default ToDolist;
