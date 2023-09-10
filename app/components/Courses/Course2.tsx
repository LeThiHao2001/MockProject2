"use client"
import React, { useEffect, useState } from "react";
import CartDataService from "../services/couse.service";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Data from '../Navbar/Drawerdata';

const Course2 = () => {
  
  const [course, setCourse] = useState([
    {
      name: "",
    imageSrc: "",
    profession:"",
    price: "",
    category:"",
  }
  ]);

  const [courseFillter, setCourseFillter] = useState([
    {
      name: "",
    imageSrc: "",
    profession:"",
    price: "",
    category:"",
  }
  ]);

  const [message, setMessage] = useState("");



 
  
 




  const [selectedButton, setSelectedButton] = useState<'mobiledevelopment' | 'webdevelopment' | 'datascience' | 'cloudcomputing' | 'all' | null>('webdevelopment');

  const mobileDevelopment = course.filter((name) => name.category === 'mobiledevelopment');
  const webDevelopment = course.filter((name) => name.category === 'webdevelopment');
  const dataScience = course.filter((name) => name.category === 'datascience');
  const cloudComputing = course.filter((name) => name.category === 'cloudcomputing');
  
  


  const getCourse = async ()=>{
    const {data} = await CartDataService.getAll();
    console.log(data.data)
    if(data.status === 200){
        const arr: any[] =[];
        for (let index = 0; index < data.data.length; index++) {
            const element = data.data[index];
            if (element.category===selectedButton) {
                arr.push(element);
            }
            
        }

      setCourse(arr);
      console.log("Arr : "+ arr);
    }
  }


useEffect(() => {
    console.log("Consolog : "+selectedButton);
    getCourse();
    
    
  }, [selectedButton])


  const nameElements = course.map((name, index) => (

      <div key={index}>
          <div className=" text-lg sm:text-sm py-5 lg:py-0">
              <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                  <img
                      src={name.imageSrc}
                      alt={name.imageSrc}
                      className="h-full w-full object-cover object-center"
                  />
              </div>
              <div className='flex justify-between'>
                  <div className="mt-6 block font-normal text-gray-900">
                      {name.name}
                  </div>
                  <div className="mt-6 block text-lg font-semibold text-green border-solid border-2 border-green rounded-md px-1">
                      ${name.price}
                  </div>
              </div>
              <p aria-hidden="true" className="mt-2 mb-5 text-2xl font-semibold ">
                  {name.profession}
              </p>

              <div className='flex justify-between border-solid border-2 border-grey500 rounded-md p-2'>
                  <p>12 Classes</p>
                  <div className='flex flex-row space-x-4'>
                      <div className='flex'>
                          <img src={'/assets/courses/account.svg'} alt="circle" />
                          <p className='text-lightgrey ml-1'>120</p>
                      </div>
                      <div className='flex'>
                          <img src={'/assets/courses/Star.svg'} alt="star" />
                          <p className='ml-1'>4.5</p>
                      </div>
                  </div>
              </div>

          </div>
      </div>
  ));


  return (
      <div>
          <div id='courses-section' className="mx-auto max-w-2xl py-16 px-4 sm:py-36 sm:px-6 lg:max-w-7xl lg:px-8">

              <div className='sm:flex justify-between items-center pb-12'>
                  <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 my-4">Popular Courses</h2>
                  <div>
                      <button className="bg-transparent hover:bg-purple text-purple font-medium hover:text-white py-3 px-4 border border-purple hover:border-transparent rounded">
                          Explore Classes
                      </button>
                  </div>
              </div>

              <div className='flex nowhitespace space-x-5 rounded-xl bg-white p-1 overflow-x-auto'>

                  {/* FOR DESKTOP VIEW */}
                  <button onClick={() => setSelectedButton('webdevelopment')} className={"bg-white " + (selectedButton === 'webdevelopment' ? 'text-black border-b-2 border-orange' : 'text-lightgrey') + " pb-2 text-lg hidden sm:block"}>Web Development</button>
                  <button onClick={() => setSelectedButton('mobiledevelopment')} className={"bg-white " + (selectedButton === 'mobiledevelopment' ? 'text-black border-b-2 border-orange' : 'text-lightgrey') + " pb-2 text-lg hidden sm:block"}>Mobile Development</button>
                  <button onClick={() => setSelectedButton('datascience')} className={"bg-white " + (selectedButton === 'datascience' ? 'text-black border-b-2 border-orange' : 'text-lightgrey') + " pb-2 text-lg hidden sm:block"}>Data Science</button>
                  <button onClick={() => setSelectedButton('cloudcomputing')} className={"bg-white " + (selectedButton === 'cloudcomputing' ? 'text-black border-b-2 border-orange' : 'text-lightgrey') + " pb-2 text-lg hidden sm:block"}>Cloud Computing</button>

                  {/* FOR MOBILE VIEW */}
                  {/* <GlobeAltIcon onClick={() => setSelectedButton('webdevelopment')} width={70} height={70} className={"bg-white " + (selectedButton === 'webdevelopment' ? 'border-b-2 border-orange fill-orange' : '') + " pb-2 block sm:hidden"} />
                  <DevicePhoneMobileIcon onClick={() => setSelectedButton('mobiledevelopment')} width={70} height={70} className={"bg-white " + (selectedButton === 'mobiledevelopment' ? 'border-b-2 border-orange fill-orange' : '') + " pb-2 block sm:hidden"} />
                  <CircleStackIcon onClick={() => setSelectedButton('datascience')} width={70} height={70} className={"bg-white " + (selectedButton === 'datascience' ? 'border-b-2 border-orange fill-orange' : '') + " pb-2 block sm:hidden"} />
                  <CloudIcon onClick={() => setSelectedButton('cloudcomputing')} width={70} height={70} className={"bg-white " + (selectedButton === 'cloudcomputing' ? 'border-b-2 border-orange fill-orange' : '') + " pb-2 block sm:hidden"} /> */}

              </div>

              <div>
                  <div className="mx-auto max-w-7xl">
                      <div className="grid grid-cols-1 gap-y-10 gap-x-8 py-12">
                          <div className="col-start-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8">
                              {nameElements.length > 0 ? (
                                  nameElements
                              ) : (
                                  <p>No data to show</p>
                              )}
                          </div>
                      </div>
                  </div>
              </div>

          </div>
      </div>
  );
}


export default Course2;
