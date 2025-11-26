import React from "react";
import Cards from "./cards";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Course() {
  const [book, setBook]=useState([])
  useEffect(()=>{
    const getBook=async()=>{
      try{
        const res= await axios.get("http://localhost:4001/book");
        console.log(res.data)
        setBook(res.data)
      }catch(error){
        console.log(error);
      }
    }
    getBook();
  },[])
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            Welcome to our 
            <span className="text-pink-500">Store!!!</span>
          </h1>
          <p className="m-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
            praesentium quo. Commodi, veritatis officiis laboriosam
            reprehenderit ea asperiores deserunt provident nostrum earum vitae.
            Quia iste rerum blanditiis aut vero debitis!Lorem
          </p>
         <Link to="/">
           <button className=" bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
             Back
           </button>
         </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
            {
                book.map((item)=>(
                    <Cards key={item.id} item={item} />
                ))
            }
        </div>
      </div>
    </>
  );
}

export default Course;
