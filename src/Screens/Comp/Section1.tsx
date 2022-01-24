import React from 'react';
import heroImage from '../../Images/heroImage.jpg';
import profilePic from '../../Images/profilepic.jpg';
import me from '../../Images/me.jpg'; 


interface Props {
    
}

export const Section1: React.FC = function Section1() {
    return (
        <>
                <div className="lg:relative lg:inset-y-0 lg:right-0 lg:w-full z-0">
                    <img className="h-56 w-full object-cover xs:h-screen sm:h-screen md:h-screen lg:w-screen lg:h-screen z-0" src={heroImage} alt="" />
                </div>
                <div className="py-8 px-8 xs:max-w-lg sm:max-w-sm mx-0 bg-green-400 hover:bg-green-600 dark:bg-black rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6  z-70 absolute xs:top-1/4 sm:top-1/3 left-1/2 transform -translate-x-1/2">
                    {/* <span className="flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                    </span> */}
                    <div className="rounded-full">
                        <span className="xs:animate-ping sm:animate-none sm:hidden absolute inline-flex h-24 w-2/3 rounded-full bg-green-200 opacity-75"></span>
                        <span className="xs:animate-none sm:animate-ping xs:hidden sm:flex absolute inline-flex h-24 w-24 rounded-full bg-green-200 opacity-75"></span>
                        <img className="block mx-auto h-24 rounded-full sm:mx-0 lg:flex-shrink-0 z-10" src={me} alt="man's Face" />
                    </div>
                    
                    <div className="text-center space-y-2 sm:text-left z-10">
                        <div className="space-y-0.5 z-10">
                        <p className="text-lg text-white dark:text-white font-semibold z-10">
                            Jammel O.S Johnson
                        </p>
                        <p className="text-gray-500 dark:text-white font-medium z-10">
                            Software Engineer
                        </p>
                        </div>
                        <a href="https://twitter.com/j_0_s_j" title="my twitter" target={'_blank'}>
                            <button className="px-4 py-1 text-sm text-white font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-green-600 hover:border-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 z-10">
                                Message
                            </button>
                        </a>
                    </div>
                </div>
            
        </>
    )
}