import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ExperienceSection from "@/components/experience-section";
import SkillsSection from "@/components/skills-section";
import EducationSection from "@/components/education-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container-max text-center">
          <p className="text-gray-400">
            &copy; 2024 April Shyne Palacios. IT Specialist - Bringing 5+ years of technical expertise to every challenge.
          </p>
        </div>
      </footer>
    </div>
  );
}
