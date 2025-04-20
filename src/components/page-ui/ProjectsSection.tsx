import React from 'react';

import { HeroParallax } from '@/components/ui/hero-paralax';

export function ProjectsSection() {
    return <HeroParallax products={products} />;
}

const products = [
    {
        title: 'Finance tracker',
        link: 'https://financetracker-mu.vercel.app/',
        thumbnail: '/projects/finance-tracker.png'
    },
    {
        title: 'Pantry-Palette',
        link: 'https://pantry-tracker-eight-gilt.vercel.app/',
        thumbnail: '/projects/pantry-palette.png'
    },
    {
        title: 'Subscription Tracker',
        link: 'https://sub-sync-eight.vercel.app/',
        thumbnail: '/projects/subsync.png'
    },

    {
        title: 'Docker Manager',
        link: 'https://github.com/agarwaldisha7616/updated_docker_project',
        thumbnail: '/projects/Docker-Manager.png'
    },
    {
        title: 'Portfolio V1',
        link: 'https://agarwaldisha7616.github.io/landing-page/',
        thumbnail: '/projects/old-portfolio.png'
    },
    {
        title: 'Pharmacist Assistant',
        link: 'https://github.com/agarwaldisha7616/Pharmacist-s-Assistant',
        thumbnail: '/projects/pharmacist-assistant.png'
    },
    // {
    //     title: 'Artemis',
    //     link: '',
    //     thumbnail: '/projects/artemis.png'
    // },
    {
        title: 'Portfolio V2',
        link: 'https://safetpojskic.com',
        thumbnail: '/projects/portfoliov2.png'
    },
    {
        title: 'EZPARKADE-Parking Booking Site',
        link: '',
        thumbnail: '/projects/EZPARKADE.png'
    }
];
