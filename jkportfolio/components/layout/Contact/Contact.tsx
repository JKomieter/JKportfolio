import { Bebas_Neue } from "next/font/google";
import ContactForm from "./ContactForm";


const bebasNeue = Bebas_Neue({
    subsets: ["latin"],
    weight: "400",
});


const Contact = () => {
    return (
        <>
            <div className="w-full h-full lg:px-32 md:px-16 sm:px-8 px-4 flex bg-neutral-500
            flex-col gap-10 items-center bg-center bg-fixed bg-no-repeat bg-cover py-16">
            <div className="w-full flex flex-col gap-5 items-center justify-center py-10 mb-5">
                <h2
                    style={{ borderBottomWidth: "4px" }}
                    className={`${bebasNeue.className} lg:text-5xl md:text-4xl sm:text-3xl 
                    text-2xl font-semibold text-gray-100 p-3 border-b-orange-700`}
                >
                    Contact
                </h2>
                <p className="lg:text-lg md:text-sm text-xs text-neutral-100 text-center md:w-[60%] w-full">
                    Feel free to Contact me by submitting the form below and I will get back to you as soon as possible
                </p>
            </div>
            <ContactForm />
        </div>
        </>
    )
};

export default Contact;