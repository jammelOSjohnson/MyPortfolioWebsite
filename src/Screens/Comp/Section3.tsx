import React from 'react';
import heroImage from '../../Images/heroImage.jpg';
import profilePic from '../../Images/profilepic.jpg';


interface Props {
    
}

export const Section3: React.FC = function Section3() {
    return (
        <>
            <div id="Personal" className="xs:px-5 md:mx-0 w-full mx-auto my-0 relative z-0 dark:bg-black">
                
               <h1 className="text-black dark:text-white font-bold">Personal Details</h1>
               <p className="text-green-400 dark:text-white max-w-screen-sm mx-0 my-3 font-semibold">
                    Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <a href="mailto:jammeljohnson@gmail.com" className="text-black dark:text-white underline">jammeljohnson@gmail.com</a>
               </p>
               <p className="text-green-400 dark:text-white max-w-screen-sm mx-0 py-3 font-semibold">
                    Job Status &nbsp;&nbsp; <p className="p-2 bg-green-400 inline-flex rounded-lg"><p className="text-white">FREELANCE</p></p>
               </p>
            </div>
        </>
    )
}