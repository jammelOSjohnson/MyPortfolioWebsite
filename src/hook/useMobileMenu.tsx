import { useEffect, useState } from "react";

export default function useMobileMenu() {
    const [display, setDisplay] = useState('');
    const diplayOption = display === "hidden"? "" : "hidden"
    useEffect(() => {
        const mobileMenu = window.document.getElementById('#mobile-menu');
        mobileMenu?.classList.remove(diplayOption);
        mobileMenu?.classList.add(display);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [display])

    return [diplayOption ,setDisplay] as const;
}