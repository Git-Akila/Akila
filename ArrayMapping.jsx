const data1 = [
    {
      "title": "Global Impact",
      'Description': "Blockchain technology has the potential to address global challenges and allows individuals to contribute to social impact initiatives and explore the technologies.",
      "subhead": [
        "Financial inclusion.",
        "identity management",
        "Launch blockchain startups.",
      ]
    },
    {
      "title": "Emerging Technology",
      'Description': "Blockchain is a rapidly evolving technology with potential applications across various industries.    ",
      "subhead": [
        "finance ",
        "healthcare",
        "supply chain management",

      ]
    },
   ]

______________________________________________________________________________________________________________________________________________________
 
    
  
********************************************************************************************************************************************************
<div className='grid justify-between gap-10 px-15 py-4 md:grid-cols-2 lg:grid-cols-2'>

        {data1.map((e) => (
          <div key={e.id} className=' flex items-center flex-col gap-4 bg-blue-100 p-8 rounded-md '>
            <h1 className='font-bold text-2xl'>{e.title}</h1>
            <p>{e.Description}</p>
            <ul className='list-disc'>
              {e.subhead.map((e1, i) => (
                <li key={i}>{e1}</li>))}
            </ul>
          </div>

        ))}

      </div>
