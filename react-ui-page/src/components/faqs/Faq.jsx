import React, { useState } from 'react';
import './faq.css'; // Assume your styles are here
import plusIcon from '../../assets/img/plus-faq.svg';
import minusIcon from '../../assets/img/minus-accordian.svg';

function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);
    const faqData = [
        {
            question: "Will investors be able to have multiple Common Account Numbers?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
        },
        {
            question: "How do I reset my password?",
            answer: "You can reset your password by clicking on 'Forgot Password' on the login page and following the instructions.",
        },
        {
            question: "Is my data secure with your platform?",
            answer: "Yes, we use industry-standard security practices to protect your data.",
        },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="faq-box">
            <div className="container">
                <div className="faq-heading">
                    <h2>FAQ</h2>
                </div>
                <div className="faq-accordian">
                    {faqData.map((faq, index) => (
                        <div key={index}>
                            <div
                                className="faq-question"
                                onClick={() => toggleFAQ(index)}>

                                <div className={openIndex === index ? 'faq-content blue-text' : 'faq-content'}>
                                    <p>{faq.question}</p>
                                </div>

                                <div className="faq-plus-icon">
                                    {openIndex === index ? <img src={minusIcon} alt="Plus Icon" srcset="" /> : <img src={plusIcon} alt="minus Icon" srcset="" />}
                                </div>
                            </div>
                            {openIndex === index && (
                                <div className="faq-answer">
                                    <p>{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FAQ;
