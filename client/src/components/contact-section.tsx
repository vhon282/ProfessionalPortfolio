import { useState } from "react";
import { Mail, Phone, ExternalLink, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleContactClick = (href: string) => {
    if (href.startsWith("http")) {
      window.open(href, "_blank");
    } else {
      window.location.href = href;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || "Contact from Portfolio Website");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:vhonho28@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 gradient-primary">
      <div className="container-max section-padding text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
          Contact Me
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

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-white">
            <MapPin className="w-5 h-5" />
            <span className="font-semibold">Blk 10 lot 38 Summercrest Subd., Philippines</span>
          </div>
        </div>

        <Card className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm border-white/20">
          <div className="p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  required
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  required
                />
              </div>
              <Input
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
              />
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                required
              />
              <Button
                type="submit"
                size="lg"
                className="w-full bg-white text-primary hover:bg-white/90 font-semibold"
              >
                Send Message
              </Button>
            </form>
          </div>
        </Card>
      </div>
    </section>
  );
}
