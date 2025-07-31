import { Card } from "@/components/ui/card";

const educationData = [
  {
    title: "CCNA Certification Training",
    field: "Computer Networking",
    institution: "CNCTC, Inc.",
    period: "January 2023 - January 2023",
    gpa: "3.95/4.0",
    research: "Machine Learning Lab Research Assistant - Gained hands-on experience in cutting-edge technology research and implementation.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    imageAlt: "Computer Networking Certification",
    gradient: "from-primary/5 to-accent/5",
  },
  {
    title: "Vocational in Computer Technician",
    field: "Computer Technology",
    institution: "Cavite City Tech School",
    period: "June 2008 - November 2008",
    location: "Cavite, Cavite",
    competencies: [
      "Hardware maintenance and repair",
      "Software troubleshooting and installation",
      "Providing technical support and customer service",
      "System diagnosis and optimization",
    ],
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    imageAlt: "Computer Technology Vocational Training",
    gradient: "from-secondary/5 to-primary/5",
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Education & Certifications
          </h2>
          <p className="text-xl text-gray-600">
            Continuous learning and professional development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {educationData.map((education, index) => (
            <Card
              key={index}
              className={`bg-gradient-to-br ${education.gradient} p-8 card-hover`}
            >
              <div className="text-center mb-6">
                <img
                  src={education.image}
                  alt={education.imageAlt}
                  className="rounded-xl shadow-lg w-full mb-6"
                />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {education.title}
              </h3>
              <h4 className={`text-lg font-semibold mb-4 ${
                index === 0 ? 'text-primary' : 'text-secondary'
              }`}>
                {education.institution}
              </h4>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-semibold text-gray-900">
                    {education.period}
                  </span>
                </div>

                {education.gpa && (
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">GPA:</span>
                    <span className="font-bold text-primary">
                      {education.gpa}
                    </span>
                  </div>
                )}

                {education.field && (
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Field:</span>
                    <span className="font-semibold text-gray-900">
                      {education.field}
                    </span>
                  </div>
                )}

                {education.location && (
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Location:</span>
                    <span className="font-semibold text-gray-900">
                      {education.location}
                    </span>
                  </div>
                )}
              </div>

              <div className="bg-white p-4 rounded-lg">
                {education.research && (
                  <>
                    <h5 className="font-semibold text-gray-900 mb-2">
                      Research Experience:
                    </h5>
                    <p className="text-gray-600 text-sm">{education.research}</p>
                  </>
                )}

                {education.competencies && (
                  <>
                    <h5 className="font-semibold text-gray-900 mb-2">
                      Skills Developed:
                    </h5>
                    <ul className="text-gray-600 text-sm space-y-1">
                      {education.competencies.map((competency, compIndex) => (
                        <li key={compIndex}>• {competency}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
