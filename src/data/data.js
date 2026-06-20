export const about = {
    name: "Jan Leo Egamen",
    role: "Full Stack Software Engineer",
    about: "A passionate Software Engineer with a strong foundation in full-stack development. I specialize in building scalable web applications using modern technologies like Next.js, React, TypeScript, and Laravel. With experience leading development teams and implementing complex systems, I'm dedicated to creating efficient, user-centric solutions that solve real-world problems.",
    email: "janleoegamen@gmail.com",
};

export const seo = {
    title: `${about.name} | ${about.role}`,
    description: "BS Information Technology student specializing in Software Engineering at PUP Taguig. Consistent President's Lister with internship experience at Synpulse Philippines. Skilled in full-stack development with Next.js, React, TypeScript, Laravel, and PostgreSQL.",
    keywords: "Jan Leo Egamen, Software Engineer, Full-Stack Developer, PUP Taguig, President's Lister, Synpulse, Next.js Developer, React Developer, TypeScript, Laravel, PHP, Web Developer Portfolio, Software Engineering Intern",
}

export const forms = {
    formspreeUrl: "https://formspree.io/f/<url>",
}

export const skills = [
    // Frontend
    { name: "HTML", alt: "html logo", icon: "/html.svg" },
    { name: "CSS", alt: "css logo", icon: "/css.svg" },
    { name: "JavaScript", alt: "javascript logo", icon: "/javascript.svg" },
    { name: "TypeScript", alt: "typescript logo", icon: "/typescript.svg" },
    { name: "React", alt: "react logo", icon: "/react.svg" },
    { name: "Next.js", alt: "nextjs logo", icon: "/nextjs.svg" },
    { name: "Tailwind CSS", alt: "tailwind logo", icon: "/tailwind.svg" },
    { name: "Bootstrap", alt: "bootstrap logo", icon: "/bootstrap.svg" },
    
    // Frameworks
    { name: "Laravel", alt: "laravel logo", icon: "/laravel.svg" },
    { name: "Spring Boot", alt: "spring boot logo", icon: "/springboot.svg" },
    
    // Databases
    { name: "MySQL", alt: "mysql logo", icon: "/mysql.svg" },
    { name: "PostgreSQL", alt: "postgresql logo", icon: "/postgresql.svg" },
    
    // ORM & Tools
    { name: "Prisma", alt: "prisma logo", icon: "/prisma.svg" },
    { name: "Docker", alt: "docker logo", icon: "/docker.svg" },
    { name: "Git", alt: "git logo", icon: "/git.svg" },
    { name: "Jira", alt: "jira logo", icon: "/jira.svg" },
    
];

export const socials = {
    github: "https://github.com/JanLeoEgamen",
    instagram: "https://www.instagram.com/jnjrjnn.algo/",
    facebook: "https://www.facebook.com/jlegamen.7",
    linkedin: "https://www.linkedin.com/in/jan-leo-egamen/",
};

export const projects = {
    pinProjects: [
        {
            title: "Membership Information Management System",
            description: "Centralized system that automated 60% of manual club operations for Radio Engineering Circle Inc. Features include authentication, semi-automated membership processes, and administrative dashboards.",
            tags: ["Laravel", "PHP", "JavaScript", "MySQL", "Tailwind CSS"],
            link: "https://centralized-website.rec.org.ph/rec-home-page", // Add GitHub or live demo link if available
        },
        {
            title: "Canopy Farm PH Rental Management System",
            description: "A comprehensive booking and management solution built for Canopy Farm PH to streamline rental operations. This system replaces manual tracking with a centralized, automated dashboard powered by the TALL stack.",
            tags: ["Laravel", "PHP", "Livewire", "MySQL", "PayMongo"],
            link: "https://canopyfarmph.com/guest/homepage", // Add GitHub or live demo link if available
        },
        {
            title: "Company Asset Tracking Tool",
            description: "Enterprise asset tracking system developed during internship at Synpulse Philippines. Features include audit trail system for tracking user activities, enhanced UI/UX, and responsive design. (Confidential, link cannot be provided)",
            tags: ["React", "TypeScript", "Next.js", "Spring Boot", "Prisma", "PostgreSQL"],
        },
    ],
    otherProjects: [
        {
            title: "Personal Portfolio Website",
            description: "Minimal and clean portfolio website built with Next.js, showcasing projects, skills, and professional experience with dark mode support and responsive design.",
            tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
            link: "", // Add GitHub or live demo link if available
        },
        {
            title: "University Computer Society Management",
            description: "Financial management system for PUP Taguig Computer Society, handling budgeting, expense tracking, and financial transparency for events and initiatives.",
            tags: ["Financial Management", "Budgeting", "Event Management"],
            link: "", // Add GitHub or live demo link if available
        },
        // Add more projects as needed
    ],
};

export const experience = [
    {
        title: "Software Engineering Intern - Synpulse Philippines Inc.",
        company: "Synpulse Philippines Inc.",
        description: "Developed and designed features for a company asset tracking tool using React, TypeScript, Next.js, Spring Boot, Prisma, and PostgreSQL. Implemented an audit trail system to track and log all user and system activities. Improved UI/UX through enhanced layouts, navigation, and responsiveness. Participated in Agile ceremonies including sprint planning, daily stand-ups, sprint reviews, and retrospectives. Presented project updates and final showcase to stakeholders.",
        date: "February 2026 – May 2026",
    },
    {
        title: "Lead Full-Stack Developer - Radio Engineering Circle Inc.",
        company: "Radio Engineering Circle Inc. ",
        description: "Led a 4-member team in building a centralized system that automated 60% of manual club operations. Designed a full-stack solution with Laravel MVC (PHP, JavaScript, MySQL, Tailwind CSS), implementing authentication, semi-automated membership processes, and dashboards.",
        date: "May 2025 – February 2026",
    },
    {
        title: "Backend Developer - Canopy Farm PH",
        company: "Canopy Farm PH ",
        description: "Using Livewire, PHP, Laravel, and MySQL, debugged and resolved critical system bugs to improve application stability and user experience. Aligned system processes with current business workflow logic. Developed rebooking features, room blocking functionality, day tour reservations, and integrated PayMongo webhook for payment processing.",
        date: "September 2025 – January 2026",
    },
    {
        title: "Vice President for Finance - PUPT - Computer Society",
        company: "PUP Taguig - Computer Society",
        description: "Managed financial operations, budgeting, ensured transparency and disbursements for events and initiatives. Oversaw financial planning and resource allocation for the organization.",
        date: "A.Y. 2023–2024",
    },
];


export const blogs = [
    {
        title: "Understanding React Hooks",
        date: "12/03/2025",
        link: "#",
    },
    {
        title: "CSS Grid vs Flexbox: When to Use Which",
        date: "25/12/2024",
        link: "#",
    },
    {
        title: "Next.js SEO Best Practices",
        date: "10/07/2024",
        link: "#",
    },
];
