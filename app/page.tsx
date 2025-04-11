import HeroSection from "@/components/hero-section"
import TechnologiesSection from "@/components/technologies-section"
import ProjectsSection from "@/components/projects-section"
import ExperienceSection from "@/components/experience-section"
import SkillsSection from "@/components/skills-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import WaterBackground from "@/components/water-background"
import AboutMe from "@/components/about-me"
import FAQ from "@/components/faq"
import SocialFeed from "@/components/social-feed"
import Timeline from "@/components/timeline"
import CareerCosmos from "@/components/career-cosmos"

export default function Home() {
  return (
    <main className="relative">
      <WaterBackground />
      <div className="relative z-10">
        <HeroSection />
        <AboutMe />
        <TechnologiesSection />
        <ProjectsSection />
        <ExperienceSection />
        <Timeline />
        <SkillsSection />
        <CareerCosmos />
        <SocialFeed />
        <ContactSection />
        <FAQ />
        <Footer />
      </div>
    </main>
  )
}

