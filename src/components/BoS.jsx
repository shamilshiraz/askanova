import React from 'react'
import { Link } from 'react-router-dom'

function BoS() {
  return (
    <div className="py-20 flex flex-col items-center justify-around bg-[#f7f0f1]">
      <h1 className="font-[biondi] text-3xl sm:text-6xl text-center text-[#2f1316]">
        Buy sell or rent properties in Dubai
      </h1>
      <Link
        className="mt-10 border border-[#a97a67] text-[#2f1316] py-3 px-6 text-lg sm:text-2xl 
                   rounded-full font-[note] 
                   transition-all duration-300 ease-in-out
                   hover:bg-[#a97a67] hover:text-[#f7f0f1] hover:scale-105 hover:shadow-lg"
      >
        Contact
      </Link>
    </div>
  )
}

export default BoS
