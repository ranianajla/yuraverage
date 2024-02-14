import React from "react";
import Typewriter from 'typewriter-effect';
import Link from "next/link";
import Image from "next/image";
import janggar from "/public/image/janggar.jpg";

const Hero = () => {
    return (
        <>
        <div className="grid grid-cols-2 mx-5 md:mx-72 p-5 text-[#C68484]">
            <div>
                <h1 className="text-4xl mt-9 mb-2 md:text-6xl font-extrabold">
                    Yuraverage Pastry
                </h1>
                <p className="text-xs mb-6 md:text-base italic font-light">
                    Pastry ENAAAK sedunia, dibuat dengan resep turun temurun dan kasih sayang di setiap gigitannya. Cek tombol di bawah.
                </p>
                <Link href="https://youtu.be/dQw4w9WgXcQ?si=ZOeefv9KZCe0sRSK" className="bg-[#9B4444] text-[#FFFFFF] text-xs font-semibold md:text-sm rounded-3xl p-3 px-6">
                    Aku Tombolnya!
                </Link>
            </div>
            <div className="mt-6 ml-8">
                <Image
                src={janggar}
                width="200"
                height="200"
                className="rounded-2xl mx-auto"
                alt="pakrt"
                />
            </div>
        </div>
        </>
    );
}

export default Hero;