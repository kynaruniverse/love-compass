import { assessments } from "@/data/assessments";
import { generateMeta } from "@/lib";
import { AssessmentsClient } from "@/components/AssessmentsClient";

export const metadata = generateMeta({
  title: "Assessments",
  description: "Four immersive assessments to understand how you love and are loved."
});

export default function AssessmentsPage() {
  return <AssessmentsClient />;
}