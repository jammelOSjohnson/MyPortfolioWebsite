import React from 'react';
import runningPic from '../../Images/man-running-white-icon.png';


interface Props {
    
}

export const Section4: React.FC = function Section4() {
    return (
        <>
            <div id="Personal" className="xs:px-5 md:mx-0 md:w-full mx-auto my-0 relative z-0 dark:bg-black border-none dark:border-none">
                <h1 className="text-black dark:text-white font-bold">My Interests</h1>
                <div className="grid xs:grid-cols-2 sm:grid-cols-4 gap-4 border-none dark:border-none">
                    <div className="bg-green-400 dark:bg-black border border-transparent  dark:border-green-400 hover:border-green-400 hover:bg-white hover:text-green-400 text-white rounded-md py-3 cursor-pointer">
                        <svg className="w-6 h-6 mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clipRule="evenodd" />
                        </svg>
                        <h4 className="text-center font-bold">NFT's</h4>
                    </div>
                    <div className="bg-green-400 dark:bg-black border border-transparent  dark:border-green-400 hover:border-green-400 hover:bg-white hover:text-green-400 text-white rounded-md py-3 cursor-pointer">
                        <svg className="w-6 h-6 mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
                        </svg>
                        <h4 className="text-center font-bold">MUSIC</h4>
                    </div>
                    <div className="bg-green-400 dark:bg-black border border-transparent  dark:border-green-400 hover:border-green-400 hover:bg-white hover:text-green-400 text-white rounded-md py-3 cursor-pointer">
                        <svg className="w-6 h-6 mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                        </svg>
                        <h4 className="text-center font-bold">GAMING</h4>
                    </div>
                    <div className="bg-green-400 dark:bg-black border border-transparent  dark:border-green-400 hover:border-green-400 hover:bg-white hover:text-green-400 text-white rounded-md py-3 cursor-pointer">
                        <svg className="w-6 h-6 mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                        </svg>
                        <h4 className="text-center font-bold">BLOCKCHAIN</h4>
                    </div>
                    <div className="bg-green-400 dark:bg-black border border-transparent  dark:border-green-400 hover:border-green-400 hover:bg-white hover:text-green-400 text-white rounded-md py-3 cursor-pointer">
                        <svg className="w-6 h-6 mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                        </svg>
                        <h4 className="text-center font-bold">MOVIES</h4>
                    </div>
                    <div className="bg-green-400 dark:bg-black border border-transparent  dark:border-green-400 hover:border-green-400 hover:bg-white hover:text-green-400 text-white rounded-md py-3 cursor-pointer">
                        <svg className="w-6 h-6 mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                        </svg>
                        <h4 className="text-center font-bold">TRAVEL</h4>
                    </div>
                    <div className="bg-green-400 dark:bg-black border border-transparent  dark:border-green-400 hover:border-green-400 hover:bg-white hover:text-green-400 text-white rounded-md py-3 cursor-pointer">
                        <img src={runningPic} width="25px" className="mx-auto" />
                        <h4 className="text-center font-bold">TRACK {'&'} FIELD</h4>
                    </div>
                    <div className="bg-green-400 dark:bg-black border border-transparent  dark:border-green-400 hover:border-green-400 hover:bg-white hover:text-green-400 text-white rounded-md py-3 cursor-pointer">
                        <svg className="w-6 h-6 mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <h4 className="text-center font-bold">MONEY</h4>
                    </div>
                </div>
                <div className="py-3 dark:border-none">
                    <button
                        type="submit"
                        className="group relative w-44 mx-auto flex justify-center py-3 px-4 border border-green-400 dark:border-green-400 text-sm font-medium rounded-md text-green-400 dark:text-white bg-transparent hover:bg-green-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
                    >
                        Download CV
                            <svg className="w-6 h-6 absolute top-1.5 right-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                            </svg>
                    </button>
                </div>
            </div>
        </>
    )
}