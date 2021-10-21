
import React from 'react'

//Import Sections
import { Section1 } from "../Comp/Section1";
import { Section2 } from '../Comp/Section2';
import { Section3 } from '../Comp/Section3';
import { Section4 } from '../Comp/Section4';
import { Section5 } from '../Comp/Section5';


interface Props {
    
}

export const HomeScreen: React.FC = function HomeScreen() {
    return (
        <>
           <Section1 />
           <Section2 />
           <Section3 />
           <Section4 />
           <Section5 />
        </>
    )
}