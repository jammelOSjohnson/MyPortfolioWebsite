import React from 'react';
//import runningPic from '../../Images/man-running-white-icon.png';
import urged from '../../Images/urged logo white.svg';
import mgk from '../../Images/MKXPRESS-Final-Edited-2.png';
import ncb from '../../Images/ncb-logo-white.svg';
import rhh from '../../Images/RHH.png';
import gll from '../../Images/gll.png';


// interface Props {
    
// }

export const Section6: React.FC = function Section6() {
    return (
        <>
            <div id="Personal" className="xs:px-5 md:mx-0 md:w-full mx-auto my-0 relative z-0 dark:bg-black border-none dark:border-none">
                <h1 className="text-black dark:text-white font-bold text-center font-bold text-2xl py-3"><span className='text-green-400'>&lt;</span> Portfolio <span className='text-green-400'>/&gt;</span></h1>
                <div className="grid xs:grid-cols-2 sm:grid-cols-4 gap-4 border-none dark:border-none">
                    <a id="portfolio" href='https://urgedinternational.com/' target={'_blank'} rel="noreferrer" title='MGK'>
                        <div className="bg-green-400 dark:bg-black border border-transparent  dark:border-green-400 hover:border-green-400 hover:bg-white hover:text-green-400 text-white rounded-md py-3 cursor-pointer card-height">
                            <img className="mx-auto" src={urged} alt="urgedim" />
                            <h4 className="text-center font-bold">Urged International</h4>
                        </div>
                    </a>
                    <a href='https://mgkexpress.com/' target={'_blank'} rel="noreferrer" title='MGK'>
                        <div className="bg-green-400 dark:bg-black border border-transparent  dark:border-green-400 hover:border-green-400 hover:bg-white hover:text-green-400 text-white rounded-md py-3 cursor-pointer card-height">
                                <img className="mx-auto w-20" src={mgk} alt="mgkim" />
                                <h4 className="text-center font-bold">MGK Express</h4>
                        </div>
                    </a>
                    <a href='https://managemycard.jncb.com/' target={'_blank'} rel="noreferrer" title='managemycard'>
                        <div className="bg-green-400 dark:bg-black border border-transparent  dark:border-green-400 hover:border-green-400 hover:bg-white hover:text-green-400 text-white rounded-md py-3 cursor-pointer card-height">
                            <img className="mx-auto w-1/2 h-1/2" src={ncb} alt="mgkim" />
                            <h4 className="text-center font-bold">NCB Credit C Portal</h4>
                        </div>
                    </a>
                    <a href='https://realhelpinghands.com/' target={'_blank'} rel="noreferrer" title='RHH'>
                        <div className="bg-green-400 dark:bg-black border border-transparent  dark:border-green-400 hover:border-green-400 hover:bg-white hover:text-green-400 text-white rounded-md py-3 cursor-pointer card-height">
                            <img className="mx-auto w-1/2 h-1/2" src={rhh} alt="mgkim" />
                            <h4 className="text-center font-bold">RHH</h4>
                        </div>
                    </a>
                </div>
                <a href='https://twps.myguardiangroup.com/' target={'_blank'} rel="noreferrer" title='gll'>
                    <div className="xs:px-5 xs:mx-auto xs:w-3-1/2 md:mx-auto md:w-1/2 lg:w-1/2 lg:mx-auto my-0 relative z-0 dark:bg-black border-none dark:border-none">
                        <div className="bg-green-400 dark:bg-black border border-transparent  dark:border-green-400 hover:border-green-400 hover:bg-white hover:text-green-400 text-white rounded-md py-3 cursor-pointer mx-auto my-3">
                            <img className="mx-auto w-20" src={gll} alt="gllim" />
                            <h4 className="text-center font-bold">GLL TWPS</h4>
                        </div>
                    </div>
                </a>
                <div className="py-3 dark:border-none">
                    <a href="https://drive.google.com/file/d/1usrJa2oCMl5kaPJjIpouG58Af9zMJggr/view?usp=sharing" title="resume" target={'_blank'} rel="noreferrer">
                        <button
                            id="resume"
                            type="submit"
                            className="group relative w-44 mx-auto flex justify-center py-3 px-4 border border-green-400 dark:border-green-400 text-sm font-medium rounded-md text-green-400 dark:text-white bg-transparent hover:bg-green-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
                        >
                            Download CV
                                <svg className="w-6 h-6 absolute top-1.5 right-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                                </svg>
                        </button>
                    </a>
                </div>
            </div>
            <style>
                {
                    `
                        .card-height{
                            height: 100px;
                        }
                    `
                }
            </style>
        </>
    )
}