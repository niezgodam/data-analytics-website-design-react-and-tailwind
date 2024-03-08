import React from 'react';
import Single from '../assets/single.png';
import Double from '../assets/double.png';
import Triple from '../assets/triple.png';

const Cards = () => {
  return (
    <div className="w-full py-[140px] text-black bg-white">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
            <div className="flex flex-col w-full p-4 my-4 duration-300 rounded-lg shadow-xl hover:scale-105 hover:shadow-black hover:shadow-lg">
                <img className="w-24 mx-auto mt-[-3rem] bg-white" src={Single} alt="single user"/>
                <h2 className="py-8 text-2xl font-bold text-center">Single User</h2>
                <p className="text-4xl font-bold text-center">$149</p>
                <div className="font-medium text-center">
                    <p className="py-2 mx-8 mt-8 border-b border-b-gray-700">500 GB Storage</p>
                    <p className="py-2 mx-8 border-b border-b-gray-700">1 Granted User</p>
                    <p className="py-2 mx-8 border-b border-b-gray-700">Send up to 2 GB</p>
                </div>
                <button className="mt-8 bg-[#00df9a] w-[200px] rounded-md p-2 place-self-center py-3 mx-auto my-6 font-medium text-black">Start Trial</button>
            </div>

            <div className="flex flex-col w-full p-4 my-8 duration-300 rounded-lg shadow-xl md:my-0 hover:scale-105 hover:shadow-black hover:shadow-lg bg-slate-200">
                <img className="w-24 mx-auto mt-[-3rem] bg-transparent" src={Double} alt="single user"/>
                <h2 className="py-8 text-2xl font-bold text-center">Double User</h2>
                <p className="text-4xl font-bold text-center">$199</p>
                <div className="font-medium text-center">
                    <p className="py-2 mx-8 mt-8 border-b border-b-gray-700">1 TB Storage</p>
                    <p className="py-2 mx-8 border-b border-b-gray-700">3 Users Allowed</p>
                    <p className="py-2 mx-8 border-b border-b-gray-700">Send up to 10 GB</p>
                </div>
                <button className="mt-8 bg-black w-[200px] rounded-md p-2 place-self-center py-3 mx-auto my-6 font-medium text-[#00df9a]">Start Trial</button>
            </div>

            <div className="flex flex-col w-full p-4 my-4 duration-300 rounded-lg shadow-xl hover:scale-105 hover:shadow-black hover:shadow-lg">
                <img className="w-24 mx-auto mt-[-3rem] bg-white" src={Triple} alt="single user"/>
                <h2 className="py-8 text-2xl font-bold text-center">Triple User</h2>
                <p className="text-4xl font-bold text-center">$299</p>
                <div className="font-medium text-center">
                    <p className="py-2 mx-8 mt-8 border-b border-b-gray-700">2 TB Storage</p>
                    <p className="py-2 mx-8 border-b border-b-gray-700">10 Users Allowed</p>
                    <p className="py-2 mx-8 border-b border-b-gray-700">Send up to 20 GB</p>
                </div>
                <button className="mt-8 bg-[#00df9a] w-[200px] rounded-md p-2 place-self-center py-3 mx-auto my-6 font-medium text-black">Start Trial</button>
            </div>

            
        </div>
    </div>
  )
}

export default Cards;