import AboutIntro from "@/components/about/AboutIntro";
import ScopeOfWork from "@/components/about/ScopeOfWork";
import SpecialityTabs from "@/components/about/SpecialityTabs";
import ContactSection from "@/components/about/ContactSection";
import { Container } from "@/components/ui";

export const metadata = {
  title: "About Us | Setu Architecture",
  description: "Learn about Setu Architecture's history, design principles, and process."
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <section className="bg-white py-20 px-6 text-center">
        <Container className="max-w-[1200px]">
          <p className="text-xs md:text-sm font-bold uppercase tracking-[0.35em] text-[#b08543] mb-4">Who we are</p>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-neutral-900 tracking-[0.12em] uppercase leading-none">About Us</h1>
        </Container>
      </section>

      <AboutIntro />
      <ScopeOfWork />
      <SpecialityTabs />
      <ContactSection />
    </main>
  );
}
