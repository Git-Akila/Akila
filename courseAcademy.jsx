"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useState, useEffect } from 'react'
import image2 from '../../../nextjs-form/public/assets/image2.jpg'


function Courses() {
  const [courses, setCourses] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/courses')
      .then((res) => res.json())
      .then((data) => {
        setCourses(data.courses)
        setLoading(false)

      })
  }, [])
  // console.log("THE DATA ISSSSs",JSON.stringify(courses));




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
    {
      "title": "Investment and Trading",
      'Description': "Understanding blockchain technology can help investors make informed decisions and navigate the complexities of the cryptocurrency ecosystem.",
      "subhead": [
        "Investment strategies.",
        "Trading techniques",
        "cryptocurrency markets",
      ]
    },
    {
      "title": "Career Opportunities",
      'Description': "Understanding blockchain technology can inspire and find entrepreneurial ventures.",
      "subhead": [
        "Blockchain-based business models.",
        "Develop decentralized applications.",
        "Launch blockchain startups.",
        "Launch blockchain startups.",
      ]
    },
  ]


  // for course page
  const blockchaincourse =  [
    {
      "id": 1,
      "title": 'Immutability',
      "image": "Img1",
    },
    {
      "id": 2,
      "title": 'Reduced Costs',
      "image": "Img2",
    },
    {
      "id": 3,
      "title": 'Improved Efficiency',
      "image": "Img3",
    },
    
  ]

  const course2=[
    {
      "id": 4,
      "title": 'Traceability',
      "image": "Img4",
    },
    {
      "id": 5,
      "title": 'Enhanced Security',
      "image": "Img5",
    },
    {
      "id": 6,
      "title": 'Tansparency',
      "image": "Img6",
    },
  ]


  return (<>
    <div className=''>
      <div className='flex flex-col text-center p-4'>
        <h1 className='text-3xl font-bold'> Our Courses</h1>
        <p className='text-xl'>Unlock Your Potential with Our Online Programs</p>
      </div>

      <div className='grid justify-between gap-10 px-15 py-4 md:grid-cols-2 lg:grid-cols-2'>

        {courses.map((c) => (
          <Link key={c.id} href={`/courses/${c.id}`} className='border m-auto rounded-lg transform transition duration-500 hover:scale-105 md:hover:scale-110'>
            <div>
              <Image
                className='rounded-lg p-4'
                src={c.img}
                width={500}
                height={500}
                alt="Picture of the author" />
              <div className='p-4'>
                <h1 className='pt-3 text-2xl font-semibold'>{c.name}</h1>
                <p>62 modules</p>

              </div>

            </div>
          </Link>
        ))}
      </div>
      {/* ******************************************** */}
       {/* <div className=''>

       {blockchaincourse.map((course)=>(
        
        <div key={course.id} className='justify-between'>
            <li>{course.title}</li>
        </div>
      ))}

      {course2.map((e)=>(
          <div key={e.id} className=''>
            <p>{e.title}</p>
          </div>
      ))}
        

      </div>  */}
      <div className='text-3xl bg-[#15265D] p-5 font-bold justify-center text-center'>
        <h2 className='text-white'>Building the Future<span className='text-[#FF8C19] px-2'>With Blockchain</span></h2>

      </div>
      <div className='bg-[#fff] md:p-10 flex sm:justify-between md:justify-between'>
        <ul className='p-5 text-center'><li className='bg-[#15265D] p-2 mb-2 text-white'>Immutability
           </li>
          <li className='bg-[#15265D] p-2 mb-2 text-white'>Reduced Costs</li>
          <li className='bg-[#15265D] p-2 mb-2 text-white'>Improved Efficiency</li>
          </ul>
         <Image src={image2} className='w-[200px] h-[200px] rounded-full'/>
          <ul className='p-5 text-center '>
          <li className='bg-[#15265D] p-2 mb-2 text-white'>Traceability</li>
          <li className='bg-[#15265D] p-2 mb-2 text-white'>Enhanced Security</li>
          <li className='bg-[#15265D] p-2 mb-2 text-white'>Tansparency</li>
          </ul>
      </div>

      {/* ********************************************************************************************** */}
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
      {/* ****************************************************************************************************** */}

          {/* <div>
            <p>Welcome to join with us.Your future awaits, and we're excited to be a part of it.</p>
            <button>Get Started</button>
          </div> */}

    </div></>

  )
}
export default Courses


