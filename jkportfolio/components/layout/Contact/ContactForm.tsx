"use client";
import { FormEvent, useCallback } from "react";
import emailjs from "@emailjs/browser";


const ContactForm = () => {

    const onSubmit = useCallback(async (e: FormEvent) => {
        try {
            e.preventDefault();

            console.log(e.target as HTMLFormElement);


            const result = await emailjs.sendForm(
                process.env.NEXT_PUBLIC_SERVICE_KEY as string, 
                process.env.NEXT_PUBLIC_TEMPLATE_KEY as string, 
                e.target as HTMLFormElement, 
                process.env.NEXT_PUBLIC_PUB_KEY as string,
            )
            console.log(result)
        } catch (error) {
            console.log(error);
        }
    }, []);


    return (
        <div className="flex items-center justify-center px-5 py-3 rounded-md bg-[#222] w-full md:w-[70%] shadow-2xl">
            <form 
            className="w-full flex flex-col gap-5 items-center justify-center"
            onSubmit={(e) => onSubmit(e)}>
                <div className="flex flex-col gap-5 w-full">
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="name" className="text-neutral-200 md:text-sm text-xs">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full px-4 py-2 rounded-md bg-[#333333] text-neutral-200 focus:outline-none focus:ring-2 focus:ring-orange-700"
                        />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="email" className="text-neutral-200 md:text-sm text-xs">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-4 py-2 rounded-md bg-[#333333] text-neutral-200 focus:outline-none focus:ring-2 focus:ring-orange-700"
                        />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="message" className="text-neutral-200 md:text-sm text-xs">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            className="w-full px-4 py-2 rounded-md bg-[#333333] text-neutral-200  focus:outline-none focus:ring-2 focus:ring-orange-700 h-40"
                        />
                    </div>
                    <div className="flex justify-end gap-2 w-full">
                        <button
                            type="submit"
                            className="px-7 py-3 rounded-md bg-orange-700 text-neutral-100 font-semibold transition-all duration-500 ease-in-out"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}


export default ContactForm;