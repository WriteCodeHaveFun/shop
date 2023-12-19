import Link from "next/link";

export default function Contact() {
    return(
        <>
            <div className="min-h-full max-w-[1440px] mx-auto p-4">
                <h1 className="my-16 font-bold md:text-7xl text-5xl text-center">CS50 final project</h1>
                <p className="my-8 font-bold md:text-5xl text-2xl text-center">My github page: <Link className="font-bold underline" href="https://github.com/WriteCodeHaveFun" target="_blank" rel="noopener noreferrer">
                    WriteCodeHaveFun
                </Link></p>
                
            </div>
        </>
    )
}