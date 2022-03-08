import React, {useState} from 'react';


// interface Props {
    
// }

export const Section5: React.FC = function Section5() {
    const [skill1, setSkill1] = useState(90);
    function handleChange (event: any){
        //setSkill1(event.target.value);
    }
    return (
        <>
            <div id="Skills" className="xs:px-5 md:mx-0 w-full mx-auto my-0 relative z-0 py-6 dark:bg-black">
                <svg className="w-6 h-6 text-green-400 mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                </svg>
               <p className="text-black dark:text-white text-center font-bold text-2xl">Skills</p>
               <div className="grid xs:grid-cols-2 gap-4 border-none dark:border-none">
                    <div className="dark:bg-black border border-transparent text-black dark:text-white rounded-md py-3 cursor-pointer">
                        
                        <h4 className="text-left font-bold">Technical Skills</h4>
                        <p className="text-left font-bold">JavaScript</p>
                        <div className="sliderValue relative w-full">
                            <span className="absolute rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl h-11 w-11 bg-white text-green-400 font-medium -top-10 transform -translate-x-1/2 leading-snug z-10 rotate-45 border-green-400 border-4 left-48">{skill1}</span>
                        </div><br/>
                        <div className="field flex w-full">
                            <input className="appearance-none h-1 w-full mt-3 bg-green-400 rounded-md outline-none border-none" type="range" min={0} max={100} value={skill1} step={1} onChange={handleChange} />
                            <div className="value right text-green-400">{skill1}<span>%</span></div>
                        </div>
                        
                    </div>
                    <div className="dark:bg-black border border-transparent text-black dark:text-white rounded-md py-3 cursor-pointer">
                        
                        <h4 className="text-left font-bold">NFT's</h4>
                    </div>
                </div>
            </div>
        </>
    )
}