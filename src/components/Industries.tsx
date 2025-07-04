import { motion } from "framer-motion";
import { Building2, TrendingUp, PenTool } from "lucide-react";
const Industries = () => {
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };
  const industries = [{
    icon: Building2,
    title: "Real Estate Agencies",
    description: "Automate lead management, client communication, and property listings"
  }, {
    icon: TrendingUp,
    title: "Digital Marketing Firms",
    description: "Streamline campaign management, reporting, and client onboarding"
  }, {
    icon: PenTool,
    title: "Architecture Studios",
    description: "Optimize project workflows, client presentations, and document management"
  }];
  return <section className="section-container bg-ai-grey-light/30" id="industries">
      <motion.div className="max-w-6xl mx-auto text-center" initial="hidden" whileInView="visible" viewport={{
      once: true
    }} variants={containerVariants}>
        <motion.h2 className="text-3xl md:text-4xl font-bold text-ai-grey-dark mb-4" variants={itemVariants}>
          Industries We Work With
        </motion.h2>
        <motion.p variants={itemVariants} className="text-ai-grey mb-12 max-w-2xl mx-auto text-base py-0 px-[3px]">We specialize in automating processes for businesses across various industries</motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {industries.map((industry, index) => <motion.div key={index} className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-all duration-300" variants={itemVariants}>
              <div className="w-16 h-16 bg-ai-red/10 flex items-center justify-center rounded-lg text-ai-red mb-4 mx-auto">
                <industry.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-ai-grey-dark mb-3">
                {industry.title}
              </h3>
              <p className="text-ai-grey">
                {industry.description}
              </p>
            </motion.div>)}
        </div>
      </motion.div>
    </section>;
};
export default Industries;