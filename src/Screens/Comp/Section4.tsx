import React from 'react';


interface Props {
    
}

export const Section4: React.FC = function Section4() {
    return (
        <>
            <div id="Personal" className="lg:w-full mx-0 my-0 relative z-0 dark:bg-black px-5">
                <h1 className="text-black dark:text-white font-semibold">My Interests</h1>
                <div className="grid grid-cols-4 gap-4">
                    <div className="bg-green-400 dark:bg-black text-white rounded-md">1</div>
                    <div className="bg-green-400 dark:bg-black text-white rounded-md">2</div>
                    <div className="bg-green-400 dark:bg-black text-white rounded-md">3</div>
                    <div className="bg-green-400 dark:bg-black text-white rounded-md">4</div>
                    <div className="bg-green-400 dark:bg-black text-white rounded-md">5</div>
                    <div className="bg-green-400 dark:bg-black text-white rounded-md">6</div>
                    <div className="bg-green-400 dark:bg-black text-white rounded-md">7</div>
                    <div className="bg-green-400 dark:bg-black text-white rounded-md">8</div>
                </div>
                <div className="py-3">
                    <button
                        type="submit"
                        className="group relativ w-44 mx-auto flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-400 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Download CV
                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                            {/* <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" /> */}
                        </span>
                    </button>
                </div>
            </div>
        </>
    )
}