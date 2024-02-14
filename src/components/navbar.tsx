import React from "react";

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

            <p>Simbol Cari</p>

      </div>
    )
}

export default Navbar;