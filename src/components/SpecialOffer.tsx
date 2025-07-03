import { motion } from "framer-motion";
import { Gift, Clock, CheckCircle } from "lucide-react";

const SpecialOffer = () => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section className="section-container bg-ai-red">
      <motion.div 
        className="max-w-4xl mx-auto text-center text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-white/20 flex items-center justify-center rounded-full">
            <Gift className="w-10 h-10" />
          </div>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Special Launch Offer
        </h2>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <div className="flex items-center justify-center mb-4">
            <span className="text-6xl font-bold">👉</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            First Three Automations Are 100% FREE
          </h3>
          <div className="flex items-center justify-center gap-2 text-lg">
            <Clock className="w-5 h-5" />
            <span>During the first month</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold mb-1">No Setup Fees</h4>
              <p className="text-white/80">Get started without any upfront costs</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold mb-1">Full Support</h4>
              <p className="text-white/80">Complete setup and training included</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold mb-1">Proven ROI</h4>
              <p className="text-white/80">See results within the first week</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SpecialOffer;