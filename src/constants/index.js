import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    css,
    contact,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Zaman00007',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/md-shahid-zaman-7a5b2429b/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'V-Connect',
        description: 'Developed a Social media platform for developers to connect and share their projects and ideas. Users can create a profile, share posts, and engage with other developers.',
        link: 'https://github.com/Zaman00007/V-Connect',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Amazon Clone',
        description: 'Created a full-stack replica of the popular e-commerce platform "Amazon," enabling users to browse products, add them to their cart, and complete the checkout process.',
        link: 'https://github.com/Zaman00007/amazon-clone',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Zcrack_PasswordCracker',
        description: 'Created a password cracker using Python, which can crack passwords using brute force attacks. It can crack passwords of any length and characters. It is only for ethical purposes and should not be used for any illegal activities. It is a command-line tool and can be used on any computer.',
        link: 'https://github.com/Zaman00007/Zcrack_PasswordCracker',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Admin Portal',
        description: 'Designed and developed an admin portal for a management system. The portal is used to create users, manage their roles, and view their activities.',
        link: 'https://github.com/Zaman00007/Admin-Portal',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Netflix Clone',
        description: 'Created the front-end of a Netflix clone using React, which allows users to browse movies and TV shows, view trailers on youtube using react-youtube library.',
        link: 'https://github.com/Zaman00007/netflix-clone',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Flappy Bird Game',
        description: 'Developed the popular game "Flappy Bird" using React. The game is fully responsive and can be played on any device.',
        link: 'https://github.com/Zaman00007/flappy-bird-game',
    }
];