import React, { Component} from 'react'
import "./collage.css"


class Collage extends Component {
    render() {
        return(
            <section id="collage" class=" bg-white flex flex-col justify-center width: 70vh">
                <div class="grid grid-cols-2 gap-10 max-w-6xl mx-auto">
                <div class="-mt-20 flex justify-end">
                    <img class="w-2/3 h-2/3 object-cover rounded-lg overflow-hidden" src="https://images.unsplash.com/photo-1616486788371-62d930495c44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" />
                </div>
                <div class="flex justify-start">
                    <img class="rounded-lg object-cover overflow-hidden" src="https://images.unsplash.com/photo-1640020580603-e7beafd75d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80" />
                </div>
                <div class="-mt-64 flex justify-start">
                    <img class="rounded-lg object-cover overflow-hidden" src="https://images.unsplash.com/photo-1533557950217-8768f2ee7491?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />
                </div>
                <div class="flex justify-start -mr-28 ml-28">
                    <img class="w-2/3 h-2/3 object-cover rounded-lg overflow-hidden" src="https://images.unsplash.com/photo-1620371350502-999e9a7d80a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=670&q=80" />
                </div>
                <div class="-translate-y-96 transform ml-28 -mr-28 p-16 shadow-xl rounded-xl overflow-hidden bg-white">
                    <div class="space-y-4">
                        <p class="text-5xl font-bold text-black tracking-tight">
                            Available services
                        </p>
                        <p class="text-xl text-black">
                        Apart from innovative products, we also offer investment service and consulting. Thanks to the experience gained in the international environment, we can propose a wide range of cooperation.
                        </p>
                    </div>
                    <div class="grid grid-cols-2 gap-6 border-t border-b border-gray-200 my-12 py-8">
                    <div>
                        <p class="text-4xl font-bold text-black">
                        2M+
                        </p>
                        <p class="text-sm text-black">
                        people in the Apple supply chain covered by our health and safety standards in 2020
                        </p>
                    </div>
                    <div>
                        <p class="text-4xl font-bold text-black">
                        170+
                        </p>
                        <p class="text-sm text-black">
                        member companies of the Responsible Business Alliance given access to our COVID response tools
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        );
            

    }
}    


export default Collage