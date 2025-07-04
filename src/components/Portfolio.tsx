import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Calendar, FileText, MessageCircle, TrendingUp, Package } from "lucide-react";

const Portfolio = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  const portfolioItems = [
    {
      icon: Mail,
      title: "Email Lead Nurturing System",
      description: "Automated 7-sequence email campaign that increased conversion rates by 45% for a real estate agency",
      metrics: "45% increase in conversions",
      category: "Real Estate"
    },
    {
      icon: Calendar,
      title: "Smart Meeting Scheduler",
      description: "AI-powered scheduling system that handles client bookings, reminders, and follow-ups automatically",
      metrics: "80% reduction in scheduling time",
      category: "Professional Services"
    },
    {
      icon: FileText,
      title: "Content Generation Pipeline",
      description: "Automated blog content creation and social media posting system for digital marketing agencies",
      metrics: "90% faster content production",
      category: "Marketing"
    },
    {
      icon: MessageCircle,
      title: "Customer Support Chatbot",
      description: "24/7 AI customer service agent that handles common inquiries and escalates complex issues",
      metrics: "70% reduction in support tickets",
      category: "E-commerce"
    },
    {
      icon: TrendingUp,
      title: "Sales Pipeline Automation",
      description: "CRM integration that tracks leads, sends follow-ups, and generates performance reports",
      metrics: "35% increase in sales velocity",
      category: "Sales"
    },
    {
      icon: TrendingUp,
      title: "Lead Generation Personalization",
      description: "Automated system that personalizes outreach messages based on prospect data and behavior",
      metrics: "50% increase in response rates",
      category: "Marketing"
    }
  ];

  return (
    <section className="section-container bg-white" id="portfolio">
      <motion.div 
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold text-ai-grey-dark mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-ai-grey max-w-2xl mx-auto">
            See how we've helped businesses save time and increase revenue with custom AI automations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {portfolioItems.map((item, index) => (
            <motion.div key={index} variants={itemVariants} className="w-full">
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-gray-200 w-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-ai-red/10 flex items-center justify-center rounded-lg text-ai-red mb-3">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="mb-2">
                    <span className="text-xs bg-ai-grey-light text-ai-grey-dark px-2 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <CardTitle className="text-lg text-ai-grey-dark">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-ai-grey mb-4">
                    {item.description}
                  </CardDescription>
                  <div className="bg-ai-red/5 px-3 py-2 rounded-lg">
                    <p className="text-sm font-semibold text-ai-red">
                      🎯 {item.metrics}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Portfolio;