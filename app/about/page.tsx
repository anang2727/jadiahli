import ContactSection from "./ContactSection";
import MainHero from "./MainHero";
import OurStory from "./OurStory";
import { Container } from "@/components/ui/container";

const page = () => {
  return (
    <main>
      <Container>
        <MainHero />
        <OurStory />
        <ContactSection />
      </Container>
    </main>
  );
};

export default page;