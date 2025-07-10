import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Bot, Zap } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary to-accent/20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 backdrop-blur-sm rounded-full border border-accent/20">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">Inovação Digital</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
                Soluções{" "}
                <span className="bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
                  Inteligentes
                </span>{" "}
                para o Futuro
              </h1>
              
              <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-2xl mx-auto lg:mx-0">
                Transformamos ideias em realidade digital através de software personalizado e automações com IA
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" variant="hero" className="group">
                Começar Projeto
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-accent/30 text-primary-foreground hover:bg-accent/10">
                Ver Portfólio
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-accent/20">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-accent">100+</div>
                <div className="text-sm text-primary-foreground/60">Projetos</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-accent">50+</div>
                <div className="text-sm text-primary-foreground/60">Clientes</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-accent">5+</div>
                <div className="text-sm text-primary-foreground/60">Anos</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="Soluções Digitais" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-accent/90 backdrop-blur-sm rounded-xl p-4 shadow-accent animate-bounce">
              <Bot className="w-8 h-8 text-accent-foreground" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-primary/90 backdrop-blur-sm rounded-xl p-4 shadow-primary animate-bounce delay-500">
              <Zap className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;