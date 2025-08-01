import { Card } from "@/components/ui/card";

const experiences = [
  {
    title: "Content Moderator",
    company: "Appen Services Philippines - Imus",
    location: "Imus, Philippines",
    period: "April 2024 - Present",
    responsibilities: [
      "Consistency maintenance in content quality across multiple platforms",
      "Expert handling of sensitive content with attention to detail",
      "Ensuring adherence to community guidelines and platform policies",
      "Providing detailed analysis and reporting on content compliance metrics"
    ],
    image: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    imageAlt: "Content Moderation Workspace",
  },
  {
    title: "Virtual Assistant / Social Media Manager",
    company: "Brown County Vacation Rental - Nashville, TN",
    location: "Nashville, TN (Remote)",
    period: "December 2023 - April 2024",
    responsibilities: [
      "Developed and managed comprehensive content calendars",
      "Spearheaded successful social media campaigns resulting in 25% increase in engagement",
      "Managed website content and coordinated marketing initiatives",
      "Coordinated marketing initiatives across multiple digital platforms"
    ],
    achievement: "25% increase in social media engagement",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    imageAlt: "Social Media Management",
  },
  {
    title: "IT Supervisor",
    company: "Tristellar Trading Corporation - Tanza, Cavite",
    location: "Tanza, Cavite, Philippines",
    period: "February 2021 - December 2023",
    responsibilities: [
      "Managed and developed IT teams across multiple departments",
      "Oversaw IT infrastructure including security, performance, and disaster recovery",
      "Led IT projects with comprehensive budget and resource management",
      "Developed and enforced IT policies and procedures",
      "Provided advanced technical support to all organizational levels",
      "Managed vendor relationships and contract negotiations"
    ],
    highlights: ["Team Leadership", "Infrastructure Management"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    imageAlt: "IT Infrastructure Management",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600">
            Building expertise across diverse IT environments
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <Card key={index} className="bg-gray-50 p-8 card-hover">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 lg:mb-0">
                      {experience.title}
                    </h3>
                    <span className="text-primary font-semibold">
                      {experience.period}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-4">
                    {experience.company}
                  </h4>
                  {experience.location && (
                    <p className="text-gray-500 mb-4">{experience.location}</p>
                  )}
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-900 mb-2">Key Responsibilities:</h5>
                    <ul className="text-gray-600 space-y-1">
                      {experience.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="flex items-start">
                          <span className="text-primary mr-2 mt-1">•</span>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {experience.achievement && (
                    <div className="bg-accent/10 p-4 rounded-lg mb-4">
                      <span className="text-accent font-semibold">
                        Key Achievement: {experience.achievement}
                      </span>
                    </div>
                  )}

                  {experience.highlights && (
                    <div className="grid grid-cols-2 gap-4">
                      {experience.highlights.map((highlight, highlightIndex) => (
                        <div
                          key={highlightIndex}
                          className="bg-primary/10 p-3 rounded-lg text-center"
                        >
                          <span className="text-primary font-semibold text-sm">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex justify-center lg:justify-end">
                  <img
                    src={experience.image}
                    alt={experience.imageAlt}
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
