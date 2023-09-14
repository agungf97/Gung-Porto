"use client"

import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
    {
        tittle: "Skills",
        id: "skills",
        content: (
            <ul className="grid grid-cols-2 gap-2 list-disc pl-2">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React Js</li>
                <li>Next.js</li>
                <li>Node.js</li>
                <li>CorelDraw</li>
                <li>Adobe Photoshop</li>
                <li>Microsoft Office</li>
            </ul>
        )
    },
    {
        tittle: "Education",
        id: "education",
        content: (
            <ul className="grid grid-cols-2 gap-2 list-disc pl-2">
                <li>SD Islam Riyadlul Mubtadiin Kedok</li>
                <li>MTs Negeri Malang 3</li>
                <li>MA Negeri Gondanglegi</li>
            </ul>
        )
    },
    {
        tittle: "certifications",
        id: "certifications",
        content: (
            <ul className="grid grid-cols-2 gap-2 list-disc pl-2">
                <li>Front End Developer Academy Code</li>
            </ul>
        )
    },
    {
        tittle: "Experience",
        id: "experience",
        content: (
            <ul className="grid grid-cols-2 gap-2 list-disc pl-2">
                <li>Front End Developer Academy Code</li>
                <li>Front End Developer Academy Code</li>
                <li>Front End Developer Academy Code</li>
            </ul>
        )
    },
]

const AboutSection = () => {

    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();
    
    const handleTabChange = (id) => {
        startTransition(() => {
        setTab(id);
        });
    };
    
    return (
        <section>
            <div className="md:grid md:grid-cols-2 gap-8 items-center px-4 py-8 xl:gap-16 sm:py-16 xl:px-16">
                <Image
                    src="/images/about-image.png"
                    alt="About Image"
                    width={500}
                    height={500}
                    className="rounded-xl"
                />
                <div className="mt-4 md:mt-0 flex flex-col h-full text-center">
                    <h1 className="text-4xl font-black mb-4">About Me</h1>
                    <p className="text-justify indent-8 py-2 text-sm lg:text-base">
                        Hello, my name is Mohammad Agung Faisal. I am usually called Agung. I am a self-taught Graphic Designer who started my career in the design industry in 2016 at Kit Worker (a printing company based in Malang, Indonesia) as a Graphic Designer.
                    </p>
                    <p className="text-justify indent-8 py-2 text-sm lg:text-base">
                        In 2020 I tried a new position as a Sortation (Warehouse) Checker at PT. Tiki Jalan Nugraha Ekakurir (JNE) Turen Branch, Malang, Indonesia. While I was at JNE Turen Branch, I was responsible for the entry and exit of goods or packages, and was responsible for the warehouse team. And also remains a freelance graphic designer.
                    </p>
                    <p className="text-justify indent-8 py-2 text-sm lg:text-base">
                        In 2021 I started learning and exploring the world of programming, about how to change designs into web displays using the programming languages HTML, CSS, JavaScript and using the Node.js framework and React.js as a library.
                    </p>
                    <p className="text-justify indent-8 py-2 text-sm lg:text-base">
                        I am a fast learner and I am always looking to expand my knowledge and skills. I have skills in graphic design, logo & branding as well as software skills such as Adobe Photoshop, CorelDraw and Microsoft Office. Recently I have acquired a new skill, namely user interface design for websites and mobile, using the programming languages HTML, CSS, JavaScript and using the Node.js Framework and React.js as a library.
                    </p>
                    <div className="flex flex-row justify-beetween space-x-6 mt-8">
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}
                        >
                            {" "}
                            Education{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("certifications")}
                            active={tab === "certifications"}
                        >
                            {" "}
                            Certifications{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("experience")}
                            active={tab === "experience"}
                        >
                            {" "}
                            Experience {" "}
                        </TabButton>
                    </div>
                    <div className="mt-8 text-left">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection