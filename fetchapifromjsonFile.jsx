const API_URL="http://localhost:3500/items";
    const [State,setState]= useState([]);
    const [Fetch, setFetchErr]=useState([]);

   
        useEffect(()=>{
            const fetchItems=async () =>{
                try{
                    const response=await fetch(API_URL);
                    console.log(response);
                    if(!response.ok) throw Error("Data not received");
                    const listItems=await response.json();
                    console.log(listItems);
                    setState(listItems);
                    setFetchErr(null);
                }catch(err){
                    setFetchErr(err.message);
                }
            }
    (async ()=> await fetchItems())()
        },[])
    
        
