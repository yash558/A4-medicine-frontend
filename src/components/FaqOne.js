
import React, { useState } from 'react'
import FaqQuestion from './FaqQuestion';
const FaqOne = () => {

    const [open, setOpened] = useState(false);

    const toggle = (index) => {
        if (open === index) {
            return setOpened(null);
        }

        setOpened(index);
    }

    const data = [
        {
            question: "Can I interact with other healthcare professionals on A4Medicine?",
            answer: "Yes, A4Medicine fosters a collaborative environment for healthcare professionals. You can engage in discussions, share knowledge, and seek advice through interactive forums and community features. It's an opportunity to connect with peers and learn from each other's experiences.",
        },
        {
            question: "Is A4Medicine affiliated with any external organizations or influenced by external funding?",
            answer: "No, A4Medicine is an independent organization committed to providing unbiased education. It does not depend on any external funding or grants, allowing the platform to maintain its independence and provide information and opinions without external influence or pressure.",
        },
        {
            question: "How does the payment process work on A4Medicine's website?",
            answer: "A4Medicine ensures a secure and hassle-free payment process. We utilize industry-standard payment gateways such as Stripe and PayPal to handle all transactions securely. Please note that we do not store any payment information on our website. For subscription services, we use Chargebee, a trusted platform known for handling subscription management. Rest assured, your payment details are handled with utmost care and security.",
        },
        {
            question: "How can I contact A4Medicine for further inquiries or support?",
            answer: "For any inquiries or support, you can reach out to A4Medicine through the contact information provided on the website. There may be options to contact the team directly via email or other communication channels.",
        },
        

    ]

    return (


        <div className="bg-[#0E2954]">
            <div className="py-16 mx-auto w-full px-4 max-w-7xl">
                <h3 className="mb-12 text-4xl text-center leading-0 font-extrabold tracking-light text-white sm:text-[2.5rem] sm:leading-10">Frequently Asked Question</h3>
                <hr className='border-0 border-gray-100' />
                <div className="grid grid-cols-2 gap-8">
                {data.map((item, index) => {
                    return <FaqQuestion key={index} open={index === open} title={item.question} desc={item.answer} toggle={() => toggle(index)} />

                })}
                </div>


            </div>
        </div>
    )
}

export default FaqOne