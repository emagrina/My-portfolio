import {Inter} from 'next/font/google'
import EmailImg from './../../assets/img/email.svg'
import Image from 'next/image'

export default function ContactPage() {
    return (
            <div className="flex h-screen">
                <div className="m-auto hero-content flex-col lg:flex-row-reverse">
                    <Image
                        src={EmailImg}
                        className="max-w-sm rounded-lg"
                        alt="Email Img"
                        width={500}
                        height={500}
                    />
                    <div>
                        <h1 className="text-5xl md:text-[4rem] font-bold tracking-tighter mb-4 font-heading bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text background-animate">
                            Contact me
                        </h1>
                        <p className="py-6">My email is ernest 8081@gmail.com if you press the button I will redirect you to the email 😄</p>
                        <a href="mailto:ernest8081@gmail.com" className="btn bg-sky-300 border-none">Send Message</a>
                    </div>
                </div>
            </div>

    )
}
