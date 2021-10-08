import React from 'react';
import heroImage from '../../Images/heroImage.jpg';
import profilePic from '../../Images/profilepic.jpg';


interface Props {
    
}

export const Section1: React.FC = function Section1() {
    return (
        <>
                <div className="lg:relative lg:inset-y-0 lg:right-0 lg:w-full z-0">
                    <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-screen lg:h-screen z-0" src={heroImage} alt="" />
                </div>
                <div className="py-8 px-8 max-w-sm mx-auto bg-green-400 dark:bg-black rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 z-70 absolute top-32 left-1/3" >
                    <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0 z-10" src={profilePic} alt="man's Face" />
                    <div className="text-center space-y-2 sm:text-left z-10">
                        <div className="space-y-0.5 z-10">
                        <p className="text-lg text-white dark:text-white font-semibold z-10">
                            Jammel O.S Johnson
                        </p>
                        <p className="text-gray-500 dark:text-white font-medium z-10">
                            Software Engineer
                        </p>
                        </div>
                        <button className="px-4 py-1 text-sm text-white font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 z-10">Message</button>
                    </div>
                </div>
            
        </>
    )
}