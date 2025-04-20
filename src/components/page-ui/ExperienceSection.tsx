'use client';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import { TracingBeam } from '@/components/ui/tracing-beams';

export function ExperienceSection() {
    return (
        <>
            <h1 id="experience" className="mx-auto max-w-5xl px-8 pb-8 pt-20 text-2xl font-bold dark:text-white md:pt-32 md:text-7xl">
                Experience
            </h1>
            <TracingBeam className="px-6">
                <div className="relative mx-auto max-w-2xl pb-32 pt-4 text-white antialiased">
                    {experience.map((item, index) => (
                        <div key={`content-${index}`} className="mb-10 mt-4 md:mt-0">
                            <h2 className={twMerge('text-xl text-black dark:text-white')}>{item.title}</h2>
                            <span className="w-fit rounded-full py-1 text-sm italic text-neutral-800 dark:text-neutral-200">{item.badge}</span>
                            <div className="prose prose-sm dark:prose-invert mt-2 text-sm text-black dark:text-white">{item.description}</div>
                        </div>
                    ))}
                </div>
            </TracingBeam>
        </>
    );
}

const experience = [
    {
        title: 'Headstarter AI Projects',
        description: (
            <ul className="list-disc">
                <li>
                    <strong>Personal·Portfolio·Website:</strong>·Built·and·deployed·a·personal·site·to·showcase·my·work.
                    Shared·a·design·inspiration·video·and·added·AI·features·with·a·custom·domain.
                </li>
                <li><strong>Pantry Tracker App:</strong> Created a pantry management app using Next.js, Firebase, and MUI. Integrated image uploads
                    and AI-based item classification with recipe suggestions.
                </li>
                <li>
                    <strong>AI Customer Support Chatbot:</strong> Developed a multilingual AI chatbot using OpenAI API. Enabled GenAI responses,
                    feedback mechanism, and personalized user experience.
                </li>
                <li>
                    <strong>AI Flashcard SaaS:</strong> Built a flashcard app with Stripe payments and OpenAI. Launched with analytics, waitlist, and
                    promoted via social media.
                </li>
                <li>
                    <strong>AI Rate My Professor Assistant:</strong> Developed an AI-powered professor review tool with smart search, sentiment
                    analysis, and trend tracking using Pinecone.
                </li>
            </ul>
        ),
        badge: 'Software Engineering Fellow/Jun 2024 - Aug 2024'
    },
    {
        title: 'Google Girl Hackathon India 2025',
        description: (
            <ul className="list-disc">
                <li>Semi-finalist with AI-powered prescription parsing system for pharmacists.</li>
                <li>Integrated OpenAI GPT-4o and LangChain for real-time handwriting recognition and fraud detection.</li>
                <li>Received Google swag and mentorship sessions from industry leaders.</li>
            </ul>
        ),
        badge: 'Participant & Semi-Finalist / Jan 2025 – Mar 2025'
    },
    {
        title: 'Open Source Contributor',
        description: (
            <ul className="list-disc">
                <li>Contributed bug fixes and documentation improvements to popular React libraries.</li>
                <li>Built reusable components and created GitHub Issues to improve community projects.</li>
            </ul>
        ),
        badge: 'Hacktoberfest/ Sept 2024 – Oct 2024'
    }
];
