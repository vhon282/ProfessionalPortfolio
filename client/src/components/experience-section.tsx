import { Card } from "@/components/ui/card";

const experiences = [
  {
    title: "Content Moderator",
    company: "Appen Services Philippines - Imus",
    period: "April 2024 - Present",
    description: "Maintaining consistency in content quality and expertly handling sensitive content across multiple platforms. Ensuring adherence to community guidelines while providing detailed analysis and reporting on content compliance metrics.",
    image: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    imageAlt: "Content Moderation Workspace",
  },
  {
    title: "Virtual Assistant / Social Media Manager",
    company: "Brown County Vacation Rental - Nashville, TN",
    period: "December 2023 - April 2024",
    description: "Developed and managed comprehensive content calendars while spearheading successful social media campaigns that resulted in a 25% increase in engagement. Managed website content and coordinated marketing initiatives across multiple digital platforms.",
    achievement: "25% increase in social media engagement",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    imageAlt: "Social Media Management",
  },
  {
    title: "IT Supervisor",
    company: "Tristellar Trading Corporation - Tanza, Cavite",
    period: "February 2021 - December 2023",
    description: "Led comprehensive IT operations including team management and development, infrastructure oversight (security, performance, disaster recovery), and project leadership with budget and resource management. Developed and enforced IT policies while providing advanced technical support and managing vendor relationships.",
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
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {experience.description}
                  </p>

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
