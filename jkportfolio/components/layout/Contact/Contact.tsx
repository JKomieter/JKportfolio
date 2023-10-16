import { Bebas_Neue } from 'next/font/google'
import ContactForm from './ContactForm'
import { SvgBg } from '@/svg'

const bebasNeue = Bebas_Neue({
    subsets: ['latin'],
    weight: '400'
})

const Contact = () => {
    return (
        <div
            className='w-full lg:px-32 md:px-16 sm:px-8 px-4 flex bg-slate-500
            flex-col gap-3 items-center h-screen overflow-y-hidden relative'
        >
            <div className='w-full flex flex-col gap-5 items-center justify-center py-10'>
                <h2
                    style={{ borderBottomWidth: '4px' }}
                    className={`${bebasNeue.className} lg:text-5xl md:text-4xl sm:text-3xl 
                    text-2xl font-semibold text-gray-100 p-3 border-b-neutral-700`}
                >
                    Contact
                </h2>
                <p className='lg:text-lg md:text-sm text-xs text-neutral-100 text-center md:w-[60%] w-full'>
                    Feel free to Contact me by submitting the form below and I will get
                    back to you as soon as possible
                </p>
            </div>
            <ContactForm />
            {/* <SvgBg className='w-full h-full -z-50 absolute' /> */}
        </div>
    )
}

export default Contact
