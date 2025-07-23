import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export default function HeroSection() {
  const handleEmailClick = () => {
    window.location.href = "mailto:vhonho28@gmail.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:0993325362";
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/april-shyne-palacios-a763052a7", "_blank");
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const offsetTop = contactSection.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="about" className="pt-20 pb-16 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              IT Specialist & 
              <span className="text-primary"> Problem Solver</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Versatile IT Support professional with 5+ years of experience in technical problem resolution and customer assistance. Adept at software and hardware troubleshooting, network installation, and maintaining optimal system performance and security.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                onClick={handleContactClick}
                size="lg"
                className="gradient-primary text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Get In Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleLinkedInClick}
                className="border-primary text-primary hover:bg-primary hover:text-white font-semibold"
              >
                View LinkedIn
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div className="space-y-3 text-gray-600">
              <button
                onClick={handleEmailClick}
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>vhonho28@gmail.com</span>
              </button>
              <button
                onClick={handlePhoneClick}
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>0993325362</span>
              </button>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Blk 10 lot 38 Summercrest Subd.</span>
              </div>
            </div>
          </div>

          <div className="lg:text-right">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800"
              alt="Professional IT Specialist"
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto lg:ml-auto card-hover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
