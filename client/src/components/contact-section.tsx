import { Mail, Phone, ExternalLink, MapPin } from "lucide-react";

const contactMethods = [
  {
    title: "Email",
    value: "vhonho28@gmail.com",
    icon: Mail,
    href: "mailto:vhonho28@gmail.com",
    description: "Send me an email",
  },
  {
    title: "Phone",
    value: "0993325362",
    icon: Phone,
    href: "tel:0993325362",
    description: "Give me a call",
  },
  {
    title: "LinkedIn",
    value: "Professional Profile",
    icon: ExternalLink,
    href: "https://www.linkedin.com/in/april-shyne-palacios-a763052a7",
    description: "Connect on LinkedIn",
  },
];

export default function ContactSection() {
  const handleContactClick = (href: string) => {
    if (href.startsWith("http")) {
      window.open(href, "_blank");
    } else {
      window.location.href = href;
    }
  };

  return (
    <section id="contact" className="py-20 gradient-primary">
      <div className="container-max section-padding text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
          Let's Connect
        </h2>
        <p className="text-xl text-primary-100 mb-12">
          Ready to bring technical expertise to your team
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <button
                key={index}
                onClick={() => handleContactClick(method.href)}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-colors group w-full"
              >
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">{method.title}</h3>
                <p className="text-primary-100 text-sm">{method.value}</p>
              </button>
            );
          })}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
          <div className="flex items-center justify-center gap-2 text-white">
            <MapPin className="w-5 h-5" />
            <span className="font-semibold">Blk 10 lot 38 Summercrest Subd.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
