import React from 'react';
import Laptop from '../assets/laptop.jpg';

const Analytics = () => {
  return (
    <div className="w-full px-4 py-16 text-white bg-white">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 text-black">
            <img className="w-[500px] mx-auto my-4" src={Laptop} alt="laptop, analytics"/>
            <div className="flex flex-col justify-center">
                <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
                <h1 className="py-2 text-2xl font-bold md:text-4xl sm:text-3xl ">Manage Data Analytics Centrally</h1>
                <p>
                Business analytics is the process by which companies use data either created by their operations or publicly available data, to solve business problems, monitor their business fundamentals, identify new opportunities for growth and better serve their customers. As the saying goes, you can’t measure what you can’t see.
                </p>
                <button className="bg-black w-[200px] rounded-md p-2 place-self-center py-3 mx-auto my-6 font-medium text-[#00df9a] md:ml-0 mt-4">Get Started</button>
            </div>

        </div>
    </div>
  )
}

export default Analytics;