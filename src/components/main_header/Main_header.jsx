import React from 'react'
import "./main_header.css"

const Main_header = () => {
  return (
    <div className="container mx-auto p-6  bg-transparent ">
        <div class="stage mt-10">
        <div class="wrapper">
            <div class="slash"></div>
            <div class="sides">
            <div class="side"></div>
            <div class="side"></div>
            <div class="side"></div>
            <div class="side"></div>
            </div>
            <div class="text">
            <div class="text--backing">
                House|For|Everyone</div>
            <div class="text--left">
                <div class="inner">
                House|For|Everyone</div>
            </div>
            <div class="text--right">
                <div class="inner">
                House|For|Everyone</div>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Main_header