import Header from "./Header"
import wave from '../images/wave (3).png'
import wavetop from '../images/wave (4).png'
const About = () => {
    return (
        <>

<div className=' fixed  z-40'>
            <Header/>
        </div>
        <img className=' z-0  fixed top-0' src={wavetop}/>
        <img className=' z-0 h-40  fixed w-screen bottom-0' src={wave} />
            <div className=" absolute z-40 flex mt-20  justify-center  w-screen  h-screen  ">
                 
                <div className=" mt-20 w-[70%]">
                    <p className=" ">
                       
                      <div className=" border p-2 hover:shadow-2xl hover:bg-cyan-100   hover:border-black  hover:mb-4   rounded-xl hover:scale-105 transition ease-in duration-200">
                        <div className="  font-semibold text-lg pb-2">React.js:</div><p> Within the intricate tapestry of React.js, we find our canvas for creativity. Despite our relative youth, we have dived headfirst into this framework, crafting dynamic user interfaces that dance with life. Through React.js, we infuse web applications with vitality, blending form and function seamlessly.
                        </p>
                      </div>
                          
                      <div className=" border mt-10 p-2 hover:shadow-2xl hover:bg-cyan-100    hover:mb-4  hover:border-black  rounded-xl hover:scale-105 transition ease-in duration-200">
                        <div className="  font-semibold text-lg pb-2">React Native:</div><p> The world of mobile applications beckons, and we eagerly embrace the challenge with React Native. Though our experience may be fresh, our enthusiasm knows no bounds as we endeavor to create cross-platform marvels that redefine the mobile experience. With React Native, we bridge the gap between imagination and reality, one app at a time.
                    
                        </p>
                      </div>

                       
                      <div className=" border p-2 hover:shadow-2xl mt-10 hover:bg-cyan-100   hover:mb-4  hover:border-black  rounded-xl hover:scale-105 transition ease-in duration-200">
                        <div className="  font-semibold text-lg pb-2">   MySQL:</div><p> In the labyrinthine depths of database management lies our next conquest: MySQL. While our journey into this realm may be nascent, our determination to master its intricacies knows no bounds. With MySQL, we lay the foundation for robust and scalable backend systems, empowering our applications to soar to new heights.

                    
                        </p>
                      </div>

                      <div className=" border p-2 hover:shadow-2xl mt-10  hover:bg-cyan-100  hover:mb-4  hover:border-black  rounded-xl hover:scale-105 transition ease-in duration-200">
                        <div className="  font-semibold text-lg pb-2">   Our Mission</div><p>Our mission is to carve a path of innovation, fueled by our passion for discovery and driven by our unwavering commitment to excellence. Each day presents a new opportunity to learn, to grow, and to push the boundaries of what is possible. With every project, we strive not only to meet expectations but to exceed them, delivering solutions that inspire and delight.


                    
                        </p>
                      </div>

                      <div className=" border p-2 hover:shadow-2xl mt-10 hover:bg-cyan-100   hover:mb-4  order-black  rounded-xl hover:scale-105 transition ease-in duration-200">
                        <div className="  font-semibold text-lg pb-2">   Why Choose Us?</div>
                      
                    
                      <b>Passion:</b>
                        <p>Our enthusiasm is our driving force, infusing every project with energy and excitement. We approach each endeavor with a sense of wonder and a spirit of adventure, eager to explore new horizons and push the limits of possibility.
                        </p>
                        <b>
                            Commitment:
                        </b>
                        <p> We are dedicated to our craft and to our clients, fostering a culture of collaboration, communication, and trust. We value integrity and transparency, ensuring that our clients are involved every step of the way.
                        </p>
                        <b>Innovation:</b>
                        <p>
                            Innovation is our lifeblood, and we thrive on the cutting edge. We embrace challenges as opportunities for growth, constantly seeking new ways to innovate and elevate our work to new heights.

                        </p>
                      </div>
                        

                        
                    </p>

                </div>

            </div>


        </>
    )
}

export default About