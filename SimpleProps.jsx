How Props works??????
-----------------------------

  import Simple1 from './simple1'
  import Simple2 from './simple2'

  function SimpleProps(){
  const carInfo={brand: "kitKat", color: "red"}
  return(
    <>
    <Simple1 carInfo={carInfo}/>                        //Self Closing Tag   and DeStucturing data
    <Simple2 carInfo={carInfo}/>
    </>
    )
}
export default SimpleProps;
-------------------------------------------------------------------------------------------------------------------------------------------------------------
  
Props in Functional Component
-----------------------------

  import React from 'react';
  function Simple1(props){
    const {carInfo}=props;
    const text=`Hi, I'm a ${color} ${brand} Car`;
    return (
      <>
        <h1>{text}</h1>
      
      </>
      )
  }
export default Simple1;
*****************************************************************************************************************************************************
  
Props in Class Components
--------------------------

import React from 'react';
class Simple2 extends React.Component{
  render(){
    const {carInfo}=this.props;
    const {brand, color}=carInfo;
    return(
      <h2>I'm a {color} {brand} Chocolate!!!!!</h2>
      )
  }
 }
export default Simple2;

_________________________________________________________________________________________________________________________________________________________

CONDITIONAL RENDERING
----------  ---------
  import Car from './car'
  function CarCar(){
  //const carInfo={brand: "kitkat", color: "Chocolate" }
  const carInfo={};
  return(
    <>
  {carInfo.brand !== undefined && carInfo.color !== undefined <Car carInfo={carInfo}/> : null}
    </>)
  }


//notes: {  !==   && !==  : null}  this null helps to keep the tags are looks good .. normal output :the choco undefined  undefined ..i like it  (VS)  the choco.. i like
