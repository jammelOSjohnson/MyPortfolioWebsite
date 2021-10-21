import React from 'react';
import heroImage from '../../Images/heroImage.jpg';
import profilePic from '../../Images/profilepic.jpg';


interface Props {
    
}

export const Section2: React.FC = function Section2() {
    return (
        <>
            <div id="About" className="xs:px-0 md:mx-0 md:w-full my-0 relative z-0 dark:bg-black pt-3 transition duration-150">
                <svg 
                    className=" w-6 h-6 text-green-400 mx-auto" 
                    fill="none" 
                    stroke="rgba(52, 211, 153, var(--tw-text-opacity))" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
               <p className="text-black dark:text-white text-center font-bold text-2xl">About Me</p>
               <p className="text-black dark:text-white py-3 xs:px-5 sm:px-5">
                    An ambitious individual who desires to obtain a challenging career 
                    position. Always adaptable to new environments, changes, and challenges.
                     The ability to work under pressure delivering high levels of quality 
                     working to meet tight deadlines and schedules whilst maintaining a 
                     pro-active approach. Driven by personal levels of excellence with a 
                     genuine desire to succeed and a high commitment level to seeing tasks 
                     undertaken brought to a successful conclusion. Able to adapt and 
                     integrate with others to become an integral part of a team.
               </p>
            </div>
        </>
    )
}