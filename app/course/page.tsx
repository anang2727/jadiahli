import CourseHero from "./course-hero";
import CourseBundles from "./course-bundles";
import CourseGrid from "./course-grid";
import ConsultCta from "./consult-cta";
import LearningPath from "./learning-path";
import { Container } from "@/components/ui/container";

export default function CoursePage() {
  return (
    <main className="bg-white">
      <Container>
        <CourseHero />
        <CourseBundles />
        <CourseGrid />
        <ConsultCta />
        <LearningPath />
      </Container>
    </main>
  );
}
