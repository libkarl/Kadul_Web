import React, { Component} from 'react'
import "./services.css"




class Services extends Component {
    render() {
        return(
            
            <div class=" bg-white mb-14" id="possibilities">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                    <div class="lg:text-center">
                    <h2 class="text-3xl text-red-600 font-semibold tracking-wide text-center">Services</h2>
                    
                    <p class="mt-4 p-6 mx-auto w-8/12 text-center text-xl text-black ">Apart from innovative products, we also offer investment service and consulting. Thanks to the experience gained in the international environment, we can propose a wide range of cooperation:</p>
                    </div>

                    <div class="mt-10 w-10/12 mx-auto">
                    <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        <div class="relative">
                        <dt>
                            <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-700  text-white">
                            
                            <svg
                                class="h-6 w-6"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M21 8.77217L14.0208 1.79299C12.8492 0.621414 10.9497 0.621413 9.77817 1.79299L3 8.57116V23.0858H10V17.0858C10 15.9812 10.8954 15.0858 12 15.0858C13.1046 15.0858 14 15.9812 14 17.0858V23.0858H21V8.77217ZM11.1924 3.2072L5 9.39959V21.0858H8V17.0858C8 14.8767 9.79086 13.0858 12 13.0858C14.2091 13.0858 16 14.8767 16 17.0858V21.0858H19V9.6006L12.6066 3.2072C12.2161 2.81668 11.5829 2.81668 11.1924 3.2072Z"
                                    fill="currentColor"
                                />
                            </svg>
                            </div>
                            <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Passive house designing
                            </p>
                        </dt>
                        <dd class="mt-2 ml-16 text-base text-black">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd>
                        </div>

                        <div class="relative">
                        <dt>
                            <div class="absolute flex items-center justify-center fill-current  bg-red-700  text-white h-12 w-12 rounded-xl">
                            
                            <svg   class="h-6 w-6 " src="../assets/smartphone.svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                            </svg>
                            </div>
                            <p class="ml-16 text-lg leading-6 font-medium text-gray-900"> Price–performance ratio</p>
                        </dt>
                        <dd class="mt-2 ml-16 text-base text-black">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd>
                        </div>

                        <div class="relative">
                        <dt>
                            <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-700  text-white">
                           
                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            </div>
                            <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Build Fast building method</p>
                        </dt>
                        <dd class="mt-2 ml-16 text-base text-black">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd>
                        </div>

                        <div class="relative">
                        <dt>
                            <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-700  text-white">
                          
                            <svg
                                class="w-6 h6"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"
                                    fill="currentColor"
                                />
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M11 0H13V4.06189C12.6724 4.02104 12.3387 4 12 4C11.6613 4 11.3276 4.02104 11 4.06189V0ZM7.0943 5.68018L4.22173 2.80761L2.80752 4.22183L5.6801 7.09441C6.09071 6.56618 6.56608 6.0908 7.0943 5.68018ZM4.06189 11H0V13H4.06189C4.02104 12.6724 4 12.3387 4 12C4 11.6613 4.02104 11.3276 4.06189 11ZM5.6801 16.9056L2.80751 19.7782L4.22173 21.1924L7.0943 18.3198C6.56608 17.9092 6.09071 17.4338 5.6801 16.9056ZM11 19.9381V24H13V19.9381C12.6724 19.979 12.3387 20 12 20C11.6613 20 11.3276 19.979 11 19.9381ZM16.9056 18.3199L19.7781 21.1924L21.1923 19.7782L18.3198 16.9057C17.9092 17.4339 17.4338 17.9093 16.9056 18.3199ZM19.9381 13H24V11H19.9381C19.979 11.3276 20 11.6613 20 12C20 12.3387 19.979 12.6724 19.9381 13ZM18.3198 7.0943L21.1923 4.22183L19.7781 2.80762L16.9056 5.6801C17.4338 6.09071 17.9092 6.56608 18.3198 7.0943Z"
                                    fill="currentColor"
                                />
                            </svg>
                            </div>
                            <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Heating systems</p>
                        </dt>
                        <dd class="mt-2 ml-16 text-base text-black">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd>
                        </div>

                        <div class="relative">
                        <dt>
                            <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-700  text-white">
                           
                            <svg
                            class="w-6 h-6"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
                                fill="currentColor"
                            />
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M12 3C17.5915 3 22.2898 6.82432 23.6219 12C22.2898 17.1757 17.5915 21 12 21C6.40848 21 1.71018 17.1757 0.378052 12C1.71018 6.82432 6.40848 3 12 3ZM12 19C7.52443 19 3.73132 16.0581 2.45723 12C3.73132 7.94186 7.52443 5 12 5C16.4756 5 20.2687 7.94186 21.5428 12C20.2687 16.0581 16.4756 19 12 19Z"
                                fill="currentColor"
                            />
                            </svg>
                            </div>
                            <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Mentorship during and before starting a building investment</p>
                        </dt>
                        <dd class="mt-2 ml-16 text-base text-black">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd>
                        </div>

                        <div class="relative">
                        <dt>
                            <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-700  text-white">
                           
                            <svg
                            class="w-6 h-6"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M11 19V22H13V19H14C16.2091 19 18 17.2091 18 15C18 12.7909 16.2091 11 14 11H13V7H15V9H17V5H13V2H11V5H10C7.79086 5 6 6.79086 6 9C6 11.2091 7.79086 13 10 13H11V17H9V15H7V19H11ZM13 17H14C15.1046 17 16 16.1046 16 15C16 13.8954 15.1046 13 14 13H13V17ZM11 11V7H10C8.89543 7 8 7.89543 8 9C8 10.1046 8.89543 11 10 11H11Z"
                                fill="currentColor"
                            />
                            </svg>
                            </div>
                            <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Planning of the international investment processes</p>
                        </dt>
                        <dd class="mt-2 ml-16 text-base text-black">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd>
                        </div>

                        

                        
                    </dl>
                    </div>
                </div>
                </div>
        );
            

    }
}    


export default Services