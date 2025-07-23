import { Card } from "@/components/ui/card";
import { 
  Monitor, 
  Network, 
  Users, 
  FileText, 
  Settings, 
  Lightbulb 
} from "lucide-react";

const skillCategories = [
  {
    title: "Technical Support",
    icon: Monitor,
    color: "primary",
    skills: [
      "IT Support & Troubleshooting",
      "Hardware & Software Proficiency",
      "Technical Problem Resolution",
      "System Performance & Security",
    ],
  },
  {
    title: "Network & Infrastructure",
    icon: Network,
    color: "accent",
    skills: [
      "Network Management & Installation",
      "CCNA Certification Training",
      "Infrastructure Management",
      "Disaster Recovery Planning",
    ],
  },
  {
    title: "Leadership & Management",
    icon: Users,
    color: "secondary",
    skills: [
      "Team Leadership & Project Management",
      "Vendor Management",
      "Budget & Resource Management",
      "Policy Development",
    ],
  },
  {
    title: "Content & Data",
    icon: FileText,
    color: "primary",
    skills: [
      "Data & Content Management",
      "Social Media Management",
      "Content Quality Assurance",
      "Digital Marketing",
    ],
  },
  {
    title: "Administrative Excellence",
    icon: Settings,
    color: "accent",
    skills: [
      "Microsoft Office & Administrative Skills",
      "Customer Assistance",
      "Organizational Management",
      "Process Optimization",
    ],
  },
  {
    title: "Research & Innovation",
    icon: Lightbulb,
    color: "secondary",
    skills: [
      "Machine Learning Lab Research",
      "Technology Research",
      "Innovation Implementation",
      "Technical Documentation",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-primary/5">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Technical Expertise
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive skills across IT domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="bg-white p-8 shadow-lg card-hover">
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-${category.color}/10 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className={`w-8 h-8 text-${category.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-gray-50 p-3 rounded-lg text-sm font-medium text-gray-700"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
