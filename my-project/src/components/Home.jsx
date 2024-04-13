import Header from './Header';
import a5 from './a5.png';
import { useNavigate } from "react-router-dom";
import wave from '../images/wave (3).png'
import wavetop from '../images/wave (4).png'
const Home = () => {
const navigate = useNavigate()


    return (
        <> 
        <div className=' fixed z-40'>
            <Header/>
        </div>
             
                <img className=' z-0 fixed top-0' src={wavetop}/>
                <div className="  fixed z-40 mt-24   flex flex-row justify-between  w-screen  h-screen  ">
                      
                <div className="   hover:scale-105 hover:shadow-2xl  transition ease-in duration-300 shadow-xl rounded-xl bg-white border p-3 h-96 border-black bg-opacity-30 ml-20 mt-20 w-[60%] ">
                <p className="  text-4xl font-medium  text-black">
                    Wellcome , I`AM Raj Gaurav
                         </p>
                    <p className=" mt-10 text-2xl ">
                       A passionate developer specializing in React.js and React Native. 
                        With a keen eye for detail and a dedication to excellence, I craft immersive digital experiences that resonate with users.
                    </p>
                    <p className=" pt-5  text-2xl">Explore my portfolio and discover the transformative power of React.js and React Native. From dynamic web applications to immersive mobile experiences, I invite you to embark on a journey of innovation, creativity, and unparalleled craftsmanship. Welcome to Gaurav's Portfolio.</p>
                </div>
                <img  className=" transition   hover:scale-105 duration-500  mt-20 mr-16 h-80 rounded-full w-80 border border-black" src={a5}/>

            </div>
            <img className=' z-0 h-40  absolute w-screen bottom-0' src={wave} />
        </>
    )
}

export default Home