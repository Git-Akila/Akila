import React, { useState, useEffect } from 'react';

import axios from 'axios';
import './scroll.css';
function Data() {

// using Axios
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('https://bxnzaopdi.kairaaexchange.com/api/v1/pair-list')
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log("Error:", err);
      })
 }, []);
return (
    <>
      <div className='logos bg-slate-400 '>
        <div className='logos-slide flex list-none  bg-slate-100 gap-5'>
            {data.data && data.data.map((element) => {
            return (
              <div className='text-center justify-center align-middle'>
                <img src={`${element.logo}`} alt="" />
                <div ><ul className='gap-5 text-center'>
                  <li>{element.firstcurrency_name}</li>

                  <li>{element.volume}</li></ul>
            </div>
          </div>
            )
          }) }
        </div>
      </div>
       </>
  )
}

export default Data;

_________________________________________________________________________________________________________________________________________________

scroll.css
__________

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
body{
    background-color: #f2f2f2;
}
@keyframes slide{
    from{
        transform:translateX(0);
    }
    to{
        transform:translateX(-100%);
    }
}


.logos{
    overflow:hidden;
    padding:60px 0;
    background:white;
}

.logos-slide{
    white-space:nowrap;
    animation:45s slide infinite linear;


}
.logos-slide:hover{
   animation: 0;


}
.logos-slide img{
    height:50px;
    margin:0 40px;
}


_________________________________________________________X___________________________________________________________X__________________________


