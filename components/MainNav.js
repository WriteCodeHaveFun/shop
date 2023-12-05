import Link from "next/link";
import { useState } from "react";

export default function MainNav() {
    const linkCss = "border-b-2 border-transparent md:hover:border-black md:transition-all md:duration-300"
    const [isMobileMenuClosed, setIsMobileMenuClosed] = useState(true);
    const mobileTranslateCssValue = isMobileMenuClosed ? 'translate-x-[calc(100%+68px)]' : 'translate-x-0'
    const mobileMenuSpanCss = "block h-2 w-[100%] bg-black transition-transform duration-300"
    const mobileMenuStatusSpanCss = isMobileMenuClosed ? '' : `first:translate-y-[23px] first:rotate-45 -rotate-45 last:translate-y-[-23px]`
    return(
        <>
            <nav className="overflow-x-hidden flex justify-end md:justify-around h-[68px]">
                <ul className={`fixed md:static md:flex md:justify-between w-[50vw] md:w-3/4 backdrop-blur md:backdrop-blur-none 
                                transition-transform md:transition-none duration-300 lg:w-1/2 my-4 capitalize font-bold text-3xl 
                                ${mobileTranslateCssValue} md:translate-x-0`}>
                    <li key='main'>
                        <Link
                            className={linkCss}
                            href="/"
                        >
                            main
                        </Link>
                    </li>
                    <li key='items'>
                        <Link
                            className={linkCss}
                            href="/items"
                        >
                            items
                        </Link>
                    </li>
                    <li key='about'>
                        <Link
                            className={linkCss}
                            href="/"
                        >
                            about
                        </Link>
                    </li>
                    <li key='contact'>
                        <Link
                            className={linkCss}
                            href="/"
                        >
                            contact
                        </Link>
                    </li>
                </ul>
                <button 
                    className="md:hidden relative z-50 flex flex-wrap justify-between items-center w-[68px] h-[68px]"
                    onClick={() => setIsMobileMenuClosed(!isMobileMenuClosed)}>
                    <span className={`${mobileMenuSpanCss} ${mobileMenuStatusSpanCss}`}></span>
                    <span className={`${mobileMenuSpanCss} ${mobileMenuStatusSpanCss}`}></span>
                    <span className={`${mobileMenuSpanCss} ${mobileMenuStatusSpanCss}`}></span>
                </button>
            </nav>
        </>
    )
}