import CourseHero from "./course-hero";
import CourseBundles from "./course-bundles";
import CourseGrid from "./course-grid";
import ConsultCta from "./consult-cta";
import LearningPath from "./learning-path";

export default function CoursePage() {
  return (
    <main className="bg-white">
      <CourseHero />
      <CourseBundles />
      <CourseGrid />
      <ConsultCta />
      <LearningPath />
    </main>
  );
}
