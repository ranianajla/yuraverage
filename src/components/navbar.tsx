import React from "react";
import { FaSearch } from "@react-icons/fa";

function Navbar() {
    return(
        <div className="flex justify-between p-4 font-mono bg-[#9B4444]">

            <div className="flex font-sans font-light gap-8 text-white">
            <p className="font-extrabold">Yura's Pastry</p>
            <p>Product</p>
            <p>About</p>
            <p>Gallery</p>
            <p>Contact</p>
            </div>

            <FaSearch className='w-4 h-5 mr-3 text-[#FFFFFF]'/>

      </div>
    )
}

export default Navbar;