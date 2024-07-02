"use client";
import React, { useState } from "react";
import { FaCheck, FaMinus, FaPlus } from "react-icons/fa";

const Question = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleContent = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      title: "How can I think ahead and boost my business?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui, in bibendum nunc, ultrices.",
    },
    {
      id: 2,
      title: "How Consultancy experts work?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui, in bibendum nunc, ultrices.",
    },
    {
      id: 3,
      title: "What is the best advice for growth?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui, in bibendum nunc, ultrices.",
    },
    {
      id: 4,
      title: "How to improve your business",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui, in bibendum nunc, ultrices.",
    },
  ];

  const faqList = faqs.map((faq) => (
    <div
      className={`border p-4 rounded shadow ${
        openFaq === faq.id ? "bg-red-500" : "bg-[var(--color-secondary-a)]"
      }`}
      key={faq.id}
    >
      <div className="flex justify-between items-center gap-4">
        <h2 className="uppercase font-bold">
          <span className="text-[var(--color-primary)]">{faq.id} </span>
          {faq.title}
        </h2>
        <button onClick={() => toggleContent(faq.id)} className="text-xl">
          {openFaq === faq.id ? <FaMinus /> : <FaPlus />}
        </button>
      </div>
      {openFaq === faq.id && <p className="mt-4">{faq.content}</p>}
    </div>
  ));

  return (
    <div>
      <div className="flex flex-col items-center jost bg-white text-black p-8 pb-12">
        <h1 className="text-3xl font-bold"> Question Answers</h1>
        <p className="text-center my-4 font-bold ">
          We help our clients renew their business
        </p>
        <div className="flex lg:gap-4 flex-col lg:flex-row gap-8">
          <div className="flex flex-col gap-4">{faqList}</div>
          <div className="flex justify-end items-end gap-2">
            <div className="">
              <div className="flex gap-2">
                <FaCheck size={26} className="text-[var(--color-primary)]" />
                <p>Lorem ipsum dolor elit.</p>
              </div>
              <div className="flex gap-2">
                <FaCheck size={26} className="text-[var(--color-primary)]" />
                <p>Lorem ipsum dolor elit.</p>
              </div>
              <div className="flex gap-2">
                <FaCheck size={26} className="text-[var(--color-primary)]" />
                <p>Lorem ipsum dolor elit.</p>
              </div>
              <div className="flex gap-2">
                <FaCheck size={26} className="text-[var(--color-primary)]" />
                <p>Lorem ipsum dolor elit.</p>
              </div>
            </div>

            <div className="bg-[var(--color-primary)] font-bold text-white p-6 flex flex-col text-xl lg:text-2x text-center">
              <h1 className="text-2xl lg:text-4xl">30</h1>
              <p>
                Years of <br />
                Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
