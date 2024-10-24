
// export const navItems = [
//     {name: "Home", link: "/"},
//     {name: "Projects", link: "#projects"},
//     {name: "About", link: "#about"},
//     {name: "Experience", link: "#experience"},
//     {name: "Photography", link: "#photography"},
//     {name: "Photography", link: "#photography",icon:<FaGithub />},
// ];
export const gridItems = [
    {
        id: 1,
        title: "\n" +
            "I have a strong computer science foundation, write clean code, prioritize quality, and excel in documentation skills. ",
        description: "",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "/b1.svg",
        spareImg: "",
    },
    {
        id: 2,
        title: "Global mindset with diverse, multi-perspective problem-solving skills.",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-8 lg:row-span-4",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "I am a tech enthusiast with a strong passion for development, continuously learning and exploring new technologies to enhance my skills and creativity.",
        description: "",
        className: "lg:col-span-2 lg:row-span-1 md:col-span-3 md:row-span-1  ",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",
    },

    {
        id: 5,
        title: "My tech stack",
        description: "I constantly try to improve",
        className: "md:col-span-3 md:row-span-8 lg:row-span-2 lg:col-span-3" ,
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-start sm:justify-start",
        img: "",
        spareImg: "/grid.svg",
    },
    {
        id: 6,
        title: "Do you want to start a project together? Contact me!",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1 lg:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
];
export const rolesData = [
    {
        name: "Front-end Developer",
        href: "/#projects"
    },
    {
        name: "Java Developer",
        href: "/#projects"
    },
    {
        name: "Web3 Developer",
        href: "/#projects"
    },
    {
        name: "Guitarist",
        href: "https://space.bilibili.com/454132577"
    },
    {
        name: "Photographer",
        href: "/#photography"
    },
];

export const projects = [
    {
        id: 1,
        title: "A Car Showcase Website",
        des: "Streamline your car rental experience with our effortless booking process.",
        img: "/p1.jpg",
        iconLists: ["/next.svg", "/re.svg", "/tail.svg", "/ts.svg"],
        link: "https://car-showcase-ten-ochre.vercel.app/",
    },
    {
        id: 2,
        title: "Krypt - A Dapp about Web3",
        des: "A Web3 DApp for connecting wallets, enabling secure transfers, recording transactions on-chain, and displaying transaction history transparently.",
        img: "/p2r.jpg",
        iconLists: ["/re.svg", "/tail.svg", "/ethers.svg", "/solidity.svg", "/hardhat.svg"],
        link: "https://github.com/lijiangze666/krypt_dapp",
    },
    {
        id: 3,
        title: "crowFunding - A Web3 Crowdfunding App",
        des: "A Web3 DApp for crowdfunding projects, enabling campaign creation, donations, and tracking project information securely on the blockchain.",
        img: "/p3r.jpg",
        iconLists: ["/next.svg", "/re.svg", "/tail.svg", "/ts.svg", "/ethers.svg", "/solidity.svg", "/hardhat.svg"],
        link: "https://github.com/lijiangze666/crowdfunding",
    },
    {
        id: 4,
        title: "Digital management of power grid",
        des: "Display power grid management data, the use of various management logic.",
        img: "/p4r.png",
        iconLists: ["/vue.svg", "/js.svg", "/java.svg","/Spring-Light.svg"],
        link: "",
    },
];
export const testimonials = [
    {
        quote:
            "A seasoned web developer passionate about crafting clean and dynamic websites. With 6 years of experience, I specialize in front-end and back-end development using HTML, CSS, JavaScript, and frameworks like React and Vue. I thrive on creating user-centric designs and optimizing performance for seamless browsing experiences.",
        name: "Code👨🏻‍💻",
        title: "About me - My code",
        img: "/github.svg",
        link: "https://github.com/lijiangze666"
    },
    {
        quote:
            "I have a strong passion for music and singing🎤. I play the guitar🎸 and enjoy🎧️ folk and rock music, which have improved my focus and boosted my confidence. I often share videos on my social media, and I look forward to your support and feedback.",
        name: "Music🎸",
        title: "About me - My music",
        img: "/bilibili.svg",
        link: "https://space.bilibili.com/454132577"
    },
    {
        quote:
            "I really enjoy exercising and staying active. I often swim🏊🏻‍♂️, play badminton🏸, and go skiing🏂🏻. Regular physical activity has made me healthier and improved my focus. I also love meditation🧘🏻‍♂️, which has brought me many benefits.",
        name: "Sports",
        title: "About me - My Exercise",
        img: "/sports.png",
        link: ""
    },
    {
        quote:
            "I am a passionate photographer who enjoys capturing the beauty and moments of everyday life through my lens📸. I believe that every photography tells a unique story, and I strive to preserve those special memories that bring joy and inspiration. Whether it's nature, people, or events, I love exploring different perspectives and sharing the beauty I see with others.",
        name: "Photography",
        title: "About me - My photograph",
        img: "/camera.png",
        link: ""
    },

];
export const workExperience = [
    {
        id: 1,
        title: "Lead Frontend Developer",
        desc: "As a Lead Front-End Developer, I built scalable web apps using React.js, Next.js, and Vue.js, integrated blockchain with Web3.js, mentored developers, and ensured high performance while collaborating with backend and design teams.",
        className: "md:col-span-4",
        thumbnail: "/exp3.svg",
    },
    {
        id: 2,
        title: "Full Stack Developer",
        desc: "As a Full-Stack Developer, I design and develop web applications using Vue.js, React.js, Java, Node.js, and Spring, focusing on performance, quality, and user experience throughout the development process.",
        className: "md:col-span-4",
        thumbnail: "/exp2.svg",
    },
    {
        id: 3,
        title: "Freelance App Dev Project",
        desc: "As a Software Development Intern, I assisted in developing web applications using JavaScript and Java, collaborated with senior developers on code reviews, and contributed to debugging and optimizing software performance.",
        className: "md:col-span-4",
        thumbnail: "/exp4.svg",
    }
];
export const socialMedia = [
    {
        id: 1,
        img: "/git.svg",
        link: "https://github.com/lijiangze666",
    },
    {
        id: 2,
        img: "/tiktok.svg",
        link:"https://www.douyin.com/user/MS4wLjABAAAAPK6mTrRKm020HbUkUGJgewbQWGISIYEbhnaNYJNHxxo",
    },
    {
        id: 3,
        img: "/wechat.svg",
        link:""
    },
    {
        id: 4,
        img: "/bilibili.svg",
        link:"https://space.bilibili.com/454132577"
    },
];

export const officialDataLeft = [
    {
        name: "ReactJs",
        img: "/React-Light.svg",
        link: "https://react.dev/",
    },
    {
        name: "NextJs",
        img: "/NextJS-Light.svg",
        link: "https://nextjs.org/",
    },
    {
        name: "VueJs",
        img: "/VueJS-Light.svg",
        link: "https://vuejs.org/",
    },
    {
        name: "TypeScript",
        img: "/TypeScript.svg",
        link: "https://www.typescriptlang.org/",
    },
    {
        name: "JavaScript",
        img: "/JavaScript.svg",
        link: "https://www.javascript.com/",
    },
];
export const officialDataRight = [
    {
        name: "TailWindCSS",
        img: "/TailwindCSS-Light.svg",
        link: "https://tailwindcss.com/",
    },
    {
        name: "Java",
        img: "/Java-Light.svg",
        link: "https://www.java.com/zh-CN/",
    },
    {
        name: "Spring",
        img: "/Spring-Light.svg",
        link: "https://spring.io/",
    },
    {
        name: "Solidity",
        img: "/Solidity-sm.svg",
        link: "https://soliditylang.org/",
    },
    {
        name: "Database(SQL,NOSQL)",
        img: "/database.png",
        link: "https://en.wikipedia.org/wiki/Database",
    },
];
export const images = [
    "/photo/1.jpg",
    "/photo/2.jpg",
    "/photo/3.jpg",
    "/photo/4.jpg",
    "/photo/5.jpg",
    "/photo/6.jpg",

];
