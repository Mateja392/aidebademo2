import { motion } from "framer-motion";
import { MessageSquare, Search, Cog, Rocket } from "lucide-react";

const HowItWorks = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  const steps = [
    {
      step: "01",
      icon: MessageSquare,
      title: "Consultation",
      description: "We discuss your business processes and identify automation opportunities"
    },
    {
      step: "02", 
      icon: Search,
      title: "Analysis & Planning",
      description: "We analyze your workflows and create a custom automation strategy"
    },
    {
      step: "03",
      icon: Cog,
      title: "Build & Test",
      description: "We develop and thoroughly test your AI automation systems"
    },
    {
      step: "04",
      icon: Rocket,
      title: "Deploy & Support",
      description: "We launch your automations and provide ongoing support and optimization"
    }
  ];

  return (
    <section className="section-container bg-ai-grey-light/20">
      <motion.div 
        className="max-w-6xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-ai-grey-dark mb-4"
          variants={itemVariants}
        >
          How It Works
        </motion.h2>
        <motion.p 
          className="text-lg text-ai-grey mb-16 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Our proven 4-step process ensures smooth implementation and maximum ROI
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              variants={itemVariants}
            >
              {/* Connection line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-ai-grey-light transform translate-x-4 z-0" />
              )}
              
              <div className="relative z-10 bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-all duration-300">
                <div className="w-16 h-16 bg-ai-red flex items-center justify-center rounded-full text-white mb-4 mx-auto">
                  <step.icon className="w-8 h-8" />
                </div>
                
                <div className="text-2xl font-bold text-ai-red mb-2">
                  {step.step}
                </div>
                
                <h3 className="text-xl font-semibold text-ai-grey-dark mb-3">
                  {step.title}
                </h3>
                
                <p className="text-ai-grey">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HowItWorks;