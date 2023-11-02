import {
  feature1,
  resource,
  feature7,
  feature6,
  feature5,
  test,
  icon1,
  icon2,
  icon3,
  icon4,
} from "../assets/index";

const testimonials = [
  {
    id: 1,
    testimonial:
      "Thank you for letting me know. I've also had a look at the AKT MCQ bank. I completed the first module. It works very nicely. I'm looking forward to doing more.",
    name: "David Ryan",
    designation: "GPs student",   
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 2,
    testimonial:
    "Amazing piece of work, I think the material is incredible and I can see why the trainees would like it and it is going to help a lot of them",
    name: "DR.AMAN ARORA",
    designation: "ARORA MEDICAL EDUCATION",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 3,
    testimonial:
      "The website provides so much useful information and easy to follow diagrams based in NICE and CKS. I absolutely love the printed handbook, it's an amazing resource.",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const services = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Medical Charts",
    description: "",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Guide Books",
    description: "",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/305565/pexels-photo-305565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Webinars",
    description: "",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/7129713/pexels-photo-7129713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Revision Series",
    description: "",
  },
];

const feature = [
  {
    id: 1,
    img: feature1,
    title: "Unlock the Power of Reliable Medical Insights at Your Fingertips.",
    description:
      "Welcome to A4Medicine, your ultimate resource for information at your fingertips. We are proud to offer you a vast collection of over 600 condensed charts that encompass NICE guidelines and essential topics derived from the RCGP curriculum.",
  },
  {
    id: 2,
    img: resource,
    title:
      "For Clinicians Beyond the Hospital: A4Medicine - Your Valuable Resource",
    description:
      "A4Medicine is the go-to platform for clinicians providing patient care outside of the hospital environment. Whether you are a nurse, paramedic, doctor, pharmacist, or physician assistant, we are here to support you. Our extensive collection of charts and resources caters to all healthcare professionals.",
  },
  {
    id: 3,
    img: feature7,
    title: "Accelerate Your Learning Journey",
    description:
      "As primary care clinicians, we understand that your time is precious and often divided between numerous responsibilities. That's why we're here to support you on your learning journey and help you make the most of every moment. Our simplified evidence-based charts are meticulously crafted to condense complex medical concepts into clear, digestible information.",
  },
  {
    id: 4,
    img: feature5,
    title: "Unleash Expertise: Gain Direct Insights from Leading Specialists",
    description:
      "At A4Medicine, we take pride in curating an unparalleled learning experience for primary care clinicians. Our webinars, facilitated by an experienced GP, serve as a platform to invite esteemed hospital consultants who provide invaluable insights tailored specifically to the needs of primary care clinicians.",
  },
  {
    id: 5,
    img: test,
    title: "RCGP AKT MCQ Mastery: Excel in Your Exam Preparation",
    description:
      "Prepare with confidence for the RCGP AKT exam through our dedicated MCQ preparation section. A4Medicine offers a vast collection of MCQs meticulously designed to align with the exam format. These MCQs are fully referenced and extensively researched, ensuring their accuracy and reliability.",
  },
  {
    id: 6,
    img: feature6,
    title: "Uncover Unbiased Insights",
    description:
      "At A4Medicine, we prioritize your education and professional development above all else. As an independent organization, we are dedicated to providing unbiased information and resources without any external influence or pressure. We do not rely on funding or grants that may compromise our integrity or sway our opinions. ",
  },
];

const stats = [
  {
    title: "Unlock the Power of Knowledge with us",
    desc: "600+ Concise Charts and Counting, with New Content Unleashed!",
    icon: icon1,
    link: "/medical",
    feature:
      "At A4medicine, we understand the demands and challenges faced by primary care clinicians. We have meticulously curated these charts to address a wide range of medical conditions, diagnostic criteria, treatment guidelines, and management approaches. <br> Whether you are a family physician, general practitioner, nurse practitioner, or any other primary care clinician, these charts can serve as valuable resources to enhance your practice. The concise format of our charts allows you to quickly review essential information, saving you time and effort in your busy schedule. Each topic is presented in a structured and organized manner, enabling you to grasp the key points efficiently. We have focused on clarity, accuracy, and relevance to ensure that these charts are practical tools for your everyday clinical encounters.  Our commitment to supporting primary care clinicians is driven by the aim of improving patient care and outcomes. By providing you with comprehensive coverage of common topics in primary care, we strive to empower you with the knowledge and resources needed to deliver high-quality care to your patients.   We invite you to explore the vast collection of charts available on our platform. Whether you are looking for guidance on managing chronic conditions, understanding diagnostic criteria, or implementing preventive measures, we are confident that you will find valuable information to enhance your clinical decision-making. Thank you for choosing A4medicine as your trusted resource. We are dedicated to continually expanding our chart library and providing you with the most relevant and up-to-date information in the field of primary care. We value your feedback and suggestions as we strive to continuously improve our offerings.",
  },
  {
    title: "Join the Preferred Choice of 3000+ Primary Care Clinicians",
    desc: "A4Medicine, Where Expertise Meets Community!",
    icon: icon2,
    link: "",
    feature:
      "Established in 2016, A4Medicine has been unwavering in its commitment to providing reliable and trustworthy services to primary care clinicians. Over the years, our platform has garnered immense popularity, as evidenced by Google Analytics data. <br> As of July 2023, we proudly attract over 3000 active users, with an impressive monthly count of over 30,000 unique visitors. This significant level of engagement reflects the trust and recognition our platform has earned within the healthcare community. <br> We continue to strive for excellence in delivering valuable resources and fostering a supportive environment for clinicians in their pursuit of providing optimal patient care.",
  },
  {
    title: "Supercharge Your AKT Journey",
    desc: "1500+ RCGP AKT Questions ready to practice and More!",
    icon: icon3,
    link: "/aktrevision",
    feature:
      " Engaging with the charts and multiple-choice questions (MCQs) at A4medicine can greatly assist candidates in preparing for the RCGP AKT exam. The comprehensive collection of charts serves as a valuable visual aid, condensing complex medical concepts into easily digestible information. <br> By studying these charts, candidates can efficiently grasp and retain key knowledge areas tested in the exam. Additionally, the extensive bank of MCQs provides invaluable practice, allowing candidates to assess their understanding, identify knowledge gaps, and refine their test-taking skills. <br> Regularly engaging with these resources not only enhances knowledge retention but also builds familiarity with the exam format and helps candidates develop effective strategies to tackle the AKT exam successfully.",
  },
  {
    title: "Unleash the Power of Trust",
    desc: "A4Medicine, Where Every Chart and AKT Question is Backed by Verifiable References!",
    icon: icon4,
    link: "",
    feature:
      "Unleash the power of trust with A4medicine, where we prioritize the reliability and credibility of our information. We understand the importance of accurate sources, which is why we extensively reference internationally renowned organizations such as NCBI, BMJ, NEJM, among others, to gather and process information. <br> These references are conveniently hyperlinked, allowing candidates to delve deeper and analyze the sources themselves. Our meticulously selected topics focus on the most common and significant presentations in primary care, providing trusted information that supports safe decision-making and elevates standards of patient care. We prioritize high-quality secondary evidence from NICE accredited resources, including NICE guidance and Cochrane systematic reviews, ensuring that our content is based on the most reliable and up-to-date information available. Rest assured, our commitment to excellence means that our content is continually reviewed and updated to ensure its relevance and accuracy.",
  },
];

const VisualTopic = [
  "Each topic is de-cluttered & covered concisely on one page!",
  "Jargon-free",
  "Helps promote structured thinking",
  "Note-taking space for each chart",
  "Summarised guidelines",
  "Comprehensive charts, covering all aspects of a condition",
  "​Particularly useful for exam preparation and quick revision",
  "Up-to-date",
  "Colourful and aesthetically pleasing charts",
  "​Fully referenced and verified links for patient information",
  "Consistent, systematic layout",
  "Spiral-bound enabling book to remain open read easily",
];
const CancerTopic = [
  "Includes NICE USC guidance",
  "Covers common cancers seen in UK",
  " Emergencies in palliative care",
  "Easy to read and jargon free",
  "Covers principles of management",
  "Comprehensive charts, covering all aspects of a condition",
  "Up-to-date",
  "Colourful and aesthetically pleasing charts",
  "​Fully referenced and verified links for patient information",
  "Consistent, systematic layout",
  "Spiral-bound enabling book to remain open read easily",
  `​​Gain confidence in palliative care management`,
];

const specialist = [
  {
    id: 1,
    img: "https://a4medicine.co.uk/wp-content/uploads/2021/04/img-5.png",
    name: "Dr. Gui Tran",
    designation:
      "Ph.D. in ultrasound and shoulder pain; Level 1 EULAR accredited competency in ultrasound",
  },
  {
    id: 2,
    img: "https://a4medicine.co.uk/wp-content/uploads/2021/04/img-6.png",
    name: "Krystian Dawiec",
    designation:
      "MSK physiotherapist, PGDip in MSK Medicine,MSc in Advanced Clinical Practice",
  },
  {
    id: 3,
    img: "https://a4medicine.co.uk/wp-content/uploads/2021/04/img-7.png",
    name: "Dr. Vivek Srivastava",
    designation: "MD , FRCP ( Glasg )",
  },
  {
    id: 4,
    img: "https://a4medicine.co.uk/wp-content/uploads/2021/04/img-9.png",
    name: "Professor Carl Philpott",
    designation: "MB ChB, DLO, FRCS(ORL-HNS), MD, PGCME",
  },
];
export {
  testimonials,
  services,
  specialist,
  feature,
  stats,
  VisualTopic,
  CancerTopic,
};
