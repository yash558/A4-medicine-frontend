import React, { useState } from "react";
import FaqQuestion from "./FaqQuestion";
const Faq = () => {
  const [open, setOpened] = useState(false);

  const toggle = (index) => {
    if (open === index) {
      return setOpened(null);
    }

    setOpened(index);
  };

  const data = [
    {
      question: "What is A4Medicine?",
      answer:
        "A4Medicine is a comprehensive online platform dedicated to supporting healthcare professionals in their medical education and practice. It offers a wide range of resources, including charts, webinars, MCQs, and evidence-based reviews, to enhance learning and facilitate optimal patient care.",
    },
    {
      question: "Who is A4Medicine for?",
      answer:
        "A4Medicine is designed for a diverse audience of healthcare professionals, including doctors, nurses, pharmacists, physician assistants, and paramedics. It caters to anyone providing patient care outside of the hospital environment and aims to support their educational needs.",
    },
    {
      question: "What resources are available on A4Medicine?",
      answer:
        "A4Medicine provides a wealth of resources, including over 600 condensed charts covering NICE guidelines and essential topics, interactive webinars featuring leading specialists, MCQs for exam preparation, and unbiased evidence-based reviews. These resources are carefully curated to ensure they are informative, reliable, and user-friendly.",
    },
    {
      question: "How can I access the resources on A4Medicine?",
      answer:
        "To access the resources on To access the resources on A4Medicine, you can visit the website at www.a4medicine.co.uk. We offer a 7-day free trial period, allowing users to explore and experience the platform. After the free trial, users can choose from our affordable subscription options based on their individual needs. The subscription provides full access to the extensive range of resources available on A4Medicine..",
    },
    {
      question: "Is A4Medicine a trusted source of information?",
      answer:
        "Yes, A4Medicine is committed to providing reliable and evidence-based information. The resources available on the platform are thoroughly researched, fully referenced, and sourced from reputable national and international organizations such as NICE, NCBI, BMJ, and BJGP.",
    },
    {
      question: "Can I cancel my subscription or request a refund?",
      answer:
        "A4Medicine aims to provide satisfaction to its users. If you wish to cancel your subscription, you can manage your subscription settings through our subscription management platform, Chargebee. Refunds may be subject to our refund policy, which can be reviewed on our website. For any concerns or assistance regarding subscriptions or refunds, please reach out to our support team, and we will be happy to assist you.",
    },

    {
      question: "Does A4Medicine share my information with any third parties?",
      answer:
        "A4Medicine highly values your privacy and confidentiality. We do not share your personal information with any third parties, except for the necessary details related to the dispatch of books. Specifically, we share the details of dispatch with our trusted printer and publisher, Minuteman Press in Cardiff, to ensure a smooth delivery process. Rest assured that we do not engage in the sharing or selling of your information to any other third parties. Your privacy and trust are of utmost importance to us.",
    },
    {
      question: "What payment options are available on A4Medicine's website?",
      answer:
        "A4Medicine accepts various payment options to provide convenience and flexibility. Our payment gateways, Stripe and PayPal, support major credit cards, including Visa, Mastercard, American Express, and Discover. These trusted payment platforms enable smooth and secure transactions for your subscription or book purchases.",
    },
    {
      question: "Is my data safe on A4Medicine's website?",
      answer:
        "Yes, at A4Medicine, we prioritize the security and privacy of your data. We are committed to protecting your personal information and adhere to the Information Commissioner's Office (ICO) regulations in the UK. We are also compliant with the General Data Protection Regulation (GDPR), which sets strict standards for data protection and privacy. For more detailed information on how we handle and protect your data, please refer to our privacy policy, where you can find comprehensive details about our data practices and your rights as a user.",
    },
    {
        question: "Is A4Medicine a trusted source of information?",
        answer: "Yes, A4Medicine is committed to providing reliable and evidence-based information. The resources available on the platform are thoroughly researched, fully referenced, and sourced from reputable national and international organizations such as NICE, NCBI, BMJ, and BJGP.",
    },
  ];

  return (
    <div className="bg-[#0E2954]">
      <div className="py-16 mx-auto w-full px-4 max-w-7xl">
        <h3 className="mb-12 text-4xl text-center leading-0 font-extrabold tracking-light text-white sm:text-[2.5rem] sm:leading-10">
          Frequently Asked Question
        </h3>
        <hr className="border-0 border-gray-100" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.map((item, index) => {
            return (
              <FaqQuestion
                key={index}
                open={index === open}
                title={item.question}
                desc={item.answer}
                toggle={() => toggle(index)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Faq;
