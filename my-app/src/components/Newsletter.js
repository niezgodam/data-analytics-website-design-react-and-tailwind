import React from 'react';

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white ">
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 px-4">
            <div className="my-4 lg:col-span-2">
                <h1 className="py-2 text-2xl font-bold md:text-4xl sm:text-3xl">Want tips & to optimize your flow?</h1>
                <p>Sign up to our newsletter and stay up to date.</p>
            </div>
            <div className="my-4 text-white">
                <div className="flex flex-col items-center justify-between w-full sm:flex-row">
                    <input className="flex w-full p-3 text-black rounded-md outline-none" type="email" placeholder="Enter Email"/>
                    <button className="bg-[#00df9a] w-[200px] rounded-md p-2 place-self-center py-3 mx-auto my-6 font-medium text-black ml-2">Notify me</button>
                </div>
                <p>We care about the protection of your data. Read out <span className="text-[#00df9a] underline">Privacy Policy.</span></p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter;