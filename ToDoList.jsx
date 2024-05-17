// import { checkbox } from '@material-tailwind/react'
import React, { useState } from 'react'

function ToDoList1() {

    // JSON.parse(localStorage.getItem('todo_list))
    //localStorage.setItem("todo_list",JSON.stringify())

    
    const [Data1, setData1] = useState(
        [
            {
                id: 1,
                name: 'Play ground',
                checked: false,
            },
            {
                id: 2,
                name: 'Cricket',
                checked: true,

            },
            {
                id: 3,
                name: 'Play Music',
                checked: false,
            },
            {
                id: 4,
                name: 'Play List',
                checked: true,
            },
        ])


  
// To Change the Checkbox boolean value
    const onClickChecked = (id) => {
        const a = Data1.map((e) => e.id === id ? { ...e, checked: !e.checked } : e)    //Be carful {return<></>}   
        setData1(a);
    }


  // To delete the List Using Filter
    const onDeleteEvent = (id) => {
        const b = Data1.filter((e) => id != e.id ? { ...e } : null)
        setData1(b);
    }


  // To Add a New Array to the List 
    const [newItem, setNewItem] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newItem) return;
        addItem(newItem)
        setNewItem('')
}

  
    const addItem = (name) => {
        const id = Data1.length ? Data1[Data1.length - 1].id + 1 : 1;
        const listItem = { id, checked: false, name }
        const Setitem = [...Data1, listItem]
        setData1(Setitem);
    }


  // To search a List
    const [search, setSearch] = useState('')
      const handleSubmit1 = (e) => {
        e.preventDefault()
        const sea1 = Data1.filter((e) => e.name.toLowerCase().includes(search.toLowerCase()))

        setData1(sea1);
        setSearch(' ');

    }
    return (
        <><form onSubmit={(e) => handleSubmit1}>
            <input
                placeholder='Search hear' value={search} onChange={(e) => setSearch(e.target.value)} />
            <button onClick={handleSubmit1}>click</button></form>


            <form onSubmit={handleSubmit}>

                <input type='text'
                    required
                    autoFocus
                    placeholder="Add Item"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                />
                <button onClick={handleSubmit}>ADD</button>
            </form>
            {Data1.length ? (
                <ul>

                    {Data1.map((e) => {
                        return (
                            <li key={e.id}>
                                <input type='checkbox' onChange={() => onClickChecked(e.id)} checked={e.checked} />
                                <label style={e.checked ? { textDecoration: 'line-through' } : null}>{e.name}</label>
                                <button type='submit' aria-label='Add Item' onClick={() => onDeleteEvent(e.id)}>Delete</button>
                            </li>)
                    })}
                </ul>) :
                <p>List is Empty!!!</p>
            }

        </>
    )
}

export default ToDoList1;
