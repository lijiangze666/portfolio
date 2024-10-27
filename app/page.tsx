import Hero from '@/components/Hero'
import {FloatingNav} from "@/components/ui/FloatingNavbar";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import {FaGithub} from "react-icons/fa";
import Photography from "@/components/Photography";
const navItems = [
    {name: "Home", link: "/"},
    {name: "Projects", link: "#projects"},
    {name: "About", link: "#about"},
    {name: "Experience", link: "#experience"},
    {name: "Photography", link: "#photography"},
    {name: "", link: "https://github.com/lijiangze666",icon:<FaGithub />},
];
export default function Home() {
    return (
        <main
            className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
            <div className="max-w-7xl w-full">
                <FloatingNav navItems={navItems}/>
                <Hero/>
                <Grid/>
                <RecentProjects/>
                <Clients/>
                <Experience/>
                <Photography/>
                <Footer/>
            </div>
        </main>
    );
}
