import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import PersonalProjects from "@/components/PersonalProjects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <PersonalProjects />
      </main>
      <Footer />
    </>
  );
}
