import React, { Component} from 'react'
import "./contact.css"


class Contact extends Component {
    render() {
        return(
            <div class="flex h-95 mb-10  items-center justify-start bg-white p-8" id="contact">
                <div class="mx-auto w-full max-w-lg">
                    <h1 class="text-4xl font-medium text-red-600 text-center">Get In Touch</h1>
                    <div class="container">
                        <p class="mt-3 text-center">Email us at contact@kadul.com or message us here:</p>
                    </div>
                    <form action="https://api.web3forms.com/submit" method="POST" class="mt-10">

                    <input type="hidden" name="access_key" value="d04b4e14-0113-4c70-99ff-389ffc2c1d6e" /> 
                    <div class="grid gap-6 sm:grid-cols-2">
                        <div class="relative z-0">
                        <input required type="text" name="name" class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-black focus:outline-none focus:ring-0" placeholder=" " />
                        <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-black peer-focus:dark:text-black">Your name</label>
                        </div>
                        <div class="relative z-0">
                        <input required type="text" name="email" class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-black focus:outline-none focus:ring-0" placeholder=" " />
                        <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-black peer-focus:dark:text-black">Your email</label>
                        </div>
                        <div class="relative z-0 col-span-2">
                        <textarea required name="message" rows="5" class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-black focus:outline-none focus:ring-0" placeholder=" "></textarea>
                        <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-black peer-focus:dark:text-black">Your message</label>
                        </div>
                    </div>
                    <input type="hidden" name="redirect" value="https://web3forms.com/success"></input>
                    <button type="submit" class="mt-5 rounded-md border-2 border-black bg-black px-10 py-2 text-white
                     hover:bg-white hover:text-black  hover:border-2 hover:border-black">Send Message</button>
                    </form>
                </div>
            </div>
        );
            

    }
}    


export default Contact