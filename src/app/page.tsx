import Image from 'next/image'
import {Inter} from 'next/font/google'
import {FiGithub, FiLinkedin} from "react-icons/fi";
import Picture from './../assets/img/ernest_img.jpeg'
import {IoDocumentTextOutline} from "react-icons/io5";
import Footer from "@/components/Footer";


const inter = Inter({subsets: ['latin']})

export default function HomePage() {
    return (
        <div>
            <div className="flex md:h-screen max-w-6xl mx-auto px-4 sm:px-6 md:-mt-20 ">
                <div className="m-auto py-12 md:py-20 ">
                    <div className="text-center pb-10 md:pb-16 ">
                        <Image
                            src={Picture}
                            alt="Picture of the author"
                            width={144}
                            height={144}
                            className="mx-auto m-8 rounded-full "
                        />
                        <h1 className="text-5xl md:text-[4rem] font-bold tracking-tighter mb-4 font-heading bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text background-animate">
                            Ernest Magriñá
                        </h1>
                        <div className="max-w-3xl mx-auto ">
                            <p className="text-xl text-gray-600 mb-8 dark:text-slate-400 ">
                                <span
                                    className="text-2xl ">Frontend Developer &amp; DevOps Developer</span>
                            </p>
                            <div
                                className="max-w-none px-6 my-2 flex flex-nowrap flex-col sm:flex-row sm:justify-center gap-6 ">
                                <div className="flex w-full sm:w-auto ">
                                    <a href="https://www.linkedin.com/in/emagrina/"
                                       target="_blank"
                                       className="btn text-white border border-primary-600/30 bg-primary-600/90 dark:bg-primary-800/80 hover:bg-primary-800 hover:border-primary-800 sm:mb-0 px-8 py-3 w-full rounded-3xl ">
                                        <FiLinkedin className="text-xl mr-2"/>
                                        Linkedin
                                    </a>
                                </div>
                                <div className="flex w-full sm:w-auto ">
                                    <a href="https://github.com/emagrina"
                                       target="_blank"
                                       className="btn text-white border border-primary-600/30 bg-primary-600/90 dark:bg-primary-800/80 hover:bg-primary-800 hover:border-primary-800 sm:mb-0 px-8 py-3 w-full rounded-3xl ">
                                        <FiGithub className="text-xl mr-2"/>
                                        Code
                                    </a>
                                </div>
                                <div className="flex w-full sm:w-auto ">
                                    <a href="/cv.pdf"
                                       target="_blank"
                                       className="btn text-white bg-gray-900 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 px-8 py-3 w-full rounded-3xl ">
                                        <IoDocumentTextOutline className="text-xl mr-2"/>
                                        CV
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
