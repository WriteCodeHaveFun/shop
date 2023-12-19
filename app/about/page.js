export default function About() {
    const h2Style = 'mt-16 mb-4 font-bold md:text-5xl text-2xl text-center';
    const paragraphStyle = 'my-4 md:text-2xl text-lg text-justify'
    return(
        <>
            <div className="min-h-full max-w-[1440px] mx-auto p-4">
                {/* <h1>this is about page</h1> */}
                {/* <strong>no real transactions can be conducted on this site</strong> */}
                <h1 className="my-16 font-bold md:text-7xl text-3xl text-center underline uppercase break-words">study project! no real transactions can be conducted on this site!</h1>
                <h1 className="my-16 font-bold md:text-7xl text-5xl text-center">CS50 final project</h1>

                <h2 className={h2Style}>Introduction</h2>
                <p className={paragraphStyle}>Greetings! Welcome to my CS50 E-Commerce Project—an exhilarating journey of coding, creativity, and continuous learning. This project, a culmination of my experiences in the esteemed CS50 course, serves as a testament to my growth in web development. Join me in exploring the intricacies of this site, which I've meticulously crafted using Next.js version 14 with App Router, Auth.js, Tailwind CSS, and MongoDB.</p>

                <h2 className={h2Style}>About the Project</h2>
                <p className={paragraphStyle}>This e-commerce platform is not just a virtual storefront; it's a manifestation of my dedication to mastering the art of web development. With a focus on seamless user experiences and robust functionality, every line of code represents a step forward in my understanding of modern technologies that power e-commerce websites.</p>

                <h2 className={h2Style}>Learning Journey</h2>
                <p className={paragraphStyle}>My work on this website began with diving into the world of Next.js version 14, harnessing the power of its improved App Router for efficient page navigation. Auth.js played a pivotal role in implementing secure user authentication, ensuring the safety of user data. Tailwind CSS brought a touch of style, making the interface both visually appealing and responsive. MongoDB, serving as the backend database, provided a reliable foundation for data storage and retrieval.</p>

                <h2 className={h2Style}>Important Note</h2>
                <p className={paragraphStyle}>It's crucial to clarify that this website is a personal educational project developed within the framework of the CS50 course. As such, the e-commerce features showcased here are simulated for learning purposes only. <strong className="underline decoration-solid">Please note that no real transactions can be conducted on this site.</strong></p>

                <h2 className={h2Style}>Features and Highlights</h2>
                <p className={paragraphStyle}>Feel free to explore the features of my creation! From the enhanced navigation with Next.js v14 App Router to the sleek design facilitated by Tailwind CSS, every aspect of the site has been carefully considered. Auth.js ensures a secure user experience, and MongoDB seamlessly handles the data behind the scenes.</p>

                <h2 className={h2Style}>Acknowledgments</h2>
                <p className={paragraphStyle}>I extend my heartfelt thanks to the CS50 team for providing an opportunity to delve into such a comprehensive project. The skills acquired in CS50 course will undoubtedly shape my future endeavors in the dynamic field of web development.</p>

                <h2 className={h2Style}>Conclusion</h2>
                <p className={paragraphStyle}>Thank you for taking the time to explore my CS50 E-Commerce Project. As you navigate through the site, please keep in mind that it's a result of my dedication to learning and applying cutting-edge web development technologies. Enjoy your virtual shopping experience!</p>

                <p className="italic text-right">
                    Cheers,
                    Oleh (WriteCodeHaveFun)
                </p>
            </div>
        </>
    )
}