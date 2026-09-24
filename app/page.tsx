import MainHero from "./components/MainHero";
import BenefitList from "./components/BenefitList";
import CourseList from "./components/CourseList";
import ServiceShortcut from "./components/ServiceShortcut";
import ActiveBootcampList from "./components/ActiveBootcampList";
import TestimonialList from "./components/TestimonialList";
import FaqSection from "./components/FaqSection";

export default function Home() {
  return (
    <main className="bg-white text-slate-900">
      <MainHero />
      <ServiceShortcut />
      <CourseList />
      <BenefitList />
      <ActiveBootcampList />
      <TestimonialList />
      <FaqSection />
    </main>
  );
}
