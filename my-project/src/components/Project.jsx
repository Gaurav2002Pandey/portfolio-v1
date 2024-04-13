import Header from "./Header"
import wave from '../images/wave (3).png'
import wavetop from '../images/wave (4).png'
const Project = ()=>{
    return(
        <>
       <div className=' fixed  z-40'>
            <Header/>
        </div>
        <img className=' z-0  fixed top-0' src={wavetop}/>
        <img className=' z-0 h-40  fixed w-screen bottom-0' src={wave} />
            <div className=" flex fixed  mt-20 flex-row justify-between  w-screen  h-screen ">
               <p className="  absolute ">
 this is Project page
               </p>
               
            </div>

        
        </>
    )
}

export default Project 