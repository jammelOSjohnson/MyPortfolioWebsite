import React from 'react';
import useDarkMode from '../hook/useDarkMode';
import useMobileMenu from '../hook/useMobileMenu';

export const Header: React.FC = function Header() {
    const [colorTheme, setTheme] = useDarkMode();
    const [display, setDisplay] = useMobileMenu();
    return (
       <>
            <nav className="absolute bg-transparent w-full z-10">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 z-10">
                    <div className="relative flex items-center justify-between h-16 z-10">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden z-10">
                        {/* <!-- Mobile menu button--> */}
                        <button onClick={() => setDisplay(display)} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        {/* <!--
                            Icon when menu is closed.

                            Heroicon name: outline/menu

                            Menu open: "hidden", Menu closed: "block"
                        --> */}
                        <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        {/* <!--
                            Icon when menu is open.

                            Heroicon name: outline/x

                            Menu open: "block", Menu closed: "hidden"
                        --> */}
                        <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        </button>
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                        <h1 className="text-green-400 block lg:hidden h-8 w-auto font-extrabold font-mono ...">
                            J.O.S.J
                        </h1>
                        <h1 className="text-green-400 hidden lg:block h-8 w-auto font-extrabold font-mono ...">
                            J.O.S.J
                        </h1>
                        {/* <img className="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" /> */}
                        {/* <img className="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow" /> */}
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                        <div className="flex space-x-4">
                            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                            <a href="/" className="bg-green-400 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">HOME</a>

                            <a href="#About" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">ABOUT</a>

                            <a href="#resume" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">RESUME</a>

                            <a href="#portfolio" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">PORTFOLIO</a>
                        </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        {/* <!-- Profile dropdown --> */}
                        <div className="ml-3 relative">
                            <div>
                                <span onClick={() =>setTheme(colorTheme)} className="w-10 h-10 bg-green-400 block rounded-full shadow-lg cursor-pointer text-white flex items-center justify-center">
                                    {colorTheme === 'light'? (    
                                        <svg 
                                            className="w-6 h-6" 
                                            fill="none" 
                                            stroke="#FFFFFF" 
                                            viewBox="0 0 24 24" 
                                            xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    ) : (
                                        <svg 
                                            className="w-6 h-6" 
                                            fill="none" 
                                            stroke="#FFFFFF" 
                                            viewBox="0 0 24 24" 
                                            xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                        </svg>
                                    )}
                                </span>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                
                {/* <!-- Mobile menu, show/hide based on menu state. --> */}
                <div className={`${display} sm:hidden`} id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                        <a href="/" className="bg-green-400 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">HOME</a>

                        <a href="#About" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">ABOUT</a>

                        <a href="#resume" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">RESUME</a>

                        <a href="#portfolio" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">PORTFOLIO</a>
                    </div>
                </div>
                
            </nav>
       </>
    )
}