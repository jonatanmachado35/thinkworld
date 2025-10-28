import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Bot, Zap, Smartphone, Database, Cpu, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Desenvolvimento de Software",
      description: "Aplicações web e mobile personalizadas com tecnologias modernas e arquitetura escalável.",
      features: ["React & Node.js", "Apps Mobile", "Sistemas Web", "APIs RESTful"]
    },
    {
      icon: Bot,
      title: "Inteligência Artificial",
      description: "Soluções de IA que automatizam processos e geram insights valiosos para seu negócio.",
      features: ["Machine Learning", "Chatbots IA", "Análise Preditiva", "Processamento de Linguagem"]
    },
    {
      icon: Zap,
      title: "Automações Inteligentes",
      description: "Automatize tarefas repetitivas e otimize fluxos de trabalho com nossas soluções personalizadas.",
      features: ["RPA", "Workflows", "Integração APIs", "Automação de Marketing"]
    },
    {
      icon: Smartphone,
      title: "Aplicativos Mobile",
      description: "Apps nativos e híbridos para iOS e Android com experiência de usuário excepcional.",
      features: ["React Native", "Flutter", "Design UX/UI", "App Store Deploy"]
    },
    {
      icon: Database,
      title: "Soluções em Nuvem",
      description: "Migração e arquitetura de sistemas na nuvem para escalabilidade e performance.",
      features: ["AWS", "Azure", "Google Cloud", "DevOps"]
    },
    {
      icon: Cpu,
      title: "Consultoria Tech",
      description: "Assessoria especializada para transformação digital e modernização de sistemas.",
      features: ["Arquitetura", "Code Review", "Performance", "Segurança"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Nossos Serviços</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Soluções Completas em{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Tecnologia
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Da concepção à implementação, oferecemos serviços completos para transformar sua visão em realidade digital
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-accent/30">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button variant="ghost" className="w-full group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                  Saiba Mais
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;