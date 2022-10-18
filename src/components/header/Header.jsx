import React, { Component} from 'react'
import "./header.css"
import {BiBuildingHouse} from "react-icons/bi"
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return(
            <div class=" mt-16 mb-15 container mx-auto " id="home">
                <div class="bg-white ">
                   
                        <div class=" ml-12 flex items-center justify-between h-auto header">
                            <div class="flex items-center">
                                <a class="flex-shrink-0 " href="https://react-icons.github.io/react-icons/search?q=build" target="_blank" without rel="noreferrer" >
                                    <div class="">
                                       
                                    <BiBuildingHouse size={60}/>
                                    </div>
                                </a>
                                
                            </div>
                            <div class="block">
                                <div class=" flex items-center ">
                                    <div class="typewriter">
                                        <h1 class="font-semibold arial text-2xl mr-10  hidden 2xl:block ">Innovative solutions in construction industry.</h1>
                                    </div>
                                </div>
                            </div>
                            <div class=" flex items-center ">
                                <Link to='/'class="anime_bt mt-12"><span class="ef"></span>Back-{'>'}</Link>
                            </div>
                            
                            
                        </div>
                   
                    
                </div>
            </div>
        );

    }
}    



export default Header