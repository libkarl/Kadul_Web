import React, { Component} from 'react'
import "./collage.css"
import Cozy_homes from "../../assets/cozy_homes.jpg"
import Residence from "../../assets/residence.jpg"
import Architect from "../../assets/architect.jpg"
import Arch_tec from "../../assets/arch_tec.jpg"

class Collage extends Component {
    render() {
        return(
            <>
                <div class="mx-auto text-center p-6 w-11/12 container">
                    <h1 class="gallery_header  text-red-600">Project gallery <span> solved problem presentation</span></h1>
                </div>
                <div class="collage mx-auto p-12 container" id='gallery'>
                    <div class="gallery">

                        <div class="gallery-item rounded-3xl ">
                            <div  >
                                <div class=" py-10 px-10 overflow-hidden h-full w-full bg-white  duration-200 hover:scale-105 hover:shadow-xl ">
                                    <img src={Cozy_homes} alt="plant" class="h-auto w-full rounded-2xl" />
                                    <div class="p-6">
                                    <p class="text-medium mb-5 text-gray-700">Well, aren't you going up to the lake tonight, you've been planning it for two weeks.</p>
                                    <button class="w-44 rounded-md py-3  bg-black text-white border-2 hover:bg-white hover:text-black hover:shadow-md duration-75 hover:border-2 border-black">See More</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="gallery-item rounded-3xl ">
                            <div  >
                                <div class="py-10 px-10 overflow-hidden h-full w-full bg-white  duration-200 hover:scale-105 ">
                                    <img src={Residence} alt="plant" class="h-auto w-full rounded-2xl" />
                                    <div class="p-6">
                                    <p class="text-medium mb-5 text-gray-700">Well, aren't you going up to the lake tonight, you've been planning it for two weeks.</p>
                                    <button class="w-44 rounded-md py-3  bg-black text-white border-2 hover:bg-white hover:text-black hover:shadow-md duration-75 hover:border-2 border-black">See More</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="gallery-item rounded-3xl ">
                            <div  >
                                <div class=" py-10 px-10 overflow-hidden h-full bg-white  duration-200 hover:scale-105 ">
                                    <img src={Architect} alt="plant" class="h-110 w-full rounded-2xl" />
                                    <div class="p-6">
                                    <p class="text-medium mb-5 text-gray-700">Well, aren't you going up to the lake tonight, you've been planning it for two weeks.</p>
                                    <button class="w-44 rounded-md py-3  bg-black text-white border-2 hover:bg-white hover:text-black hover:shadow-md duration-75 hover:border-2 border-black">See More</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="gallery-item rounded-3xl ">
                            <div  >
                                <div class=" py-10 px-10 overflow-hidden h-full bg-white duration-200 hover:scale-105 hover:shadow-xl">
                                    <img src={Arch_tec} alt="plant" class="h-auto w-full rounded-2xl" />
                                    <div class="p-6">
                                    <p class="text-medium mb-5 text-gray-700">Well, aren't you going up to the lake tonight, you've been planning it for two weeks.</p>
                                    <button class="w-44 rounded-md py-3  bg-black text-white border-2 hover:bg-white hover:text-black hover:shadow-md duration-75 hover:border-2 border-black">See More</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        

                    </div>

                </div>

                
                
            </>
            
        );
            

    }
}    


export default Collage