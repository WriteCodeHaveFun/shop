import Link from "next/link";

export default function Footer() {
    return(
        <>
            <footer className="bg-white border-t-[1px] border-[#efefef]">
                <div className="text-center p-4">
                    This website made by <Link className="font-bold" href="https://github.com/WriteCodeHaveFun" target="_blank" rel="noopener noreferrer">
                        WriteCodeHaveFun
                    </Link>
                    <p className="mt-4">Some images are provided by <Link className="font-bold" href="https://unsplash.com/" target="_blank" rel="noopener noreferrer">
                            unsplash.com
                        </Link> and <Link className="font-bold" href="https://www.pexels.com/uk-ua/" target="_blank" rel="noopener noreferrer">
                            pexels.com
                        </Link>
                    </p>
                </div>
            </footer>
        </>
    )
}