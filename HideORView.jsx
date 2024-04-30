const [index, setIndex] = useState(null);
    function ViewOrNot(i) {
        // console.log(`asdfsf ${i}`);
        if(index === i){
            setIndex(null);
        }else{
        setIndex(i);
        }
    }

******************************************************************************************************************************************************************************

 <div className='container mx-auto border-2 border-gray-500'>
                {cTop.map((ctop,i) => {
                    return (
                        <>
                            <div className='flex justify-between'><h1 className='text-xl font-bold py-3 ' key={ctop.id}>{ctop.title}</h1>
                                <button className='mx-20 font-bold ' onClick={() => ViewOrNot(ctop.id)}>{index === ctop.id  ? "⊝" : "⊕"}</button></div>

                            {index === ctop.id && (<ul className=' list-disc px-20 leading-10 text-lg border-b-2 border-b-gray-300'>
                                {ctop.description.map((e) => {
                                    return <li key={i + 100}>{e}</li>
                                })}
                            </ul>)}

                        </>
                    )

                })}

            </div>
