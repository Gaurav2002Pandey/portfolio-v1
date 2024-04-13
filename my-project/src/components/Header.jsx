import React from "react";
import { useNavigate } from "react-router-dom";

const Header = ()=>{
    const navigate = useNavigate()


    return(
        <>
        
        
         <div className=" flex flex-row justify-between align-middle p-0 m-0 bg-opacity-30 bg-cyan-400 w-screen h-20 ">
           
                       <p className=" hover:scale-110 transition duration-300 p-4 font-extrabold text-white text-4xl">
                        Portfolio
                     </p>
           
            <div className=" mt-4 flex flex-row">
                <p   onClick={()=>navigate("/")} className="  cursor-pointer  hover:rounded-xl hover:scale-110   hover:bg-green-400  duration-400  transition   ease-in    rounded-full p-1 ml-20 h-10  text-xl text-slate-50 border border-white ">Home</p>
                <p onClick={()=>navigate("/about")} className=" cursor-pointer  hover:rounded-xl hover:scale-110  hover:bg-green-400 duration-400  transition  ease-in rounded-full p-1 ml-20 h-10   text-xl text-slate-50 border border-white ">About me</p>
                <p onClick={()=>navigate("/project")}  className=" cursor-pointer  hover:rounded-xl hover:scale-110   hover:bg-green-400 duration-400   transition ease-in rounded-full p-1 ml-20  h-10   text-xl text-slate-50 border border-white "> Projects</p>
                <p onClick={()=>navigate("/contact")} className="  cursor-pointer  hover:rounded-xl hover:scale-110   hover:bg-green-400 duration-400   transition ease-in  rounded-full p-1 mr-20 ml-20 h-10  text-xl text-slate-50 border border-white ">Contact</p>
            </div>
        </div>
        </>
       
    )
}

export default Header