
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: Mail,
      label: "Email",
      value: "m.mateja003@gmail.com",
      href: "mailto:m.mateja003@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+381 62 1481064",
      href: "tel:+381621481064"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Belgrade, Serbia",
      href: null
    }
  ];

  return (
    <section className="bg-ai-grey-light/30 py-16" id="contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-ai-grey-dark mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to Automate Your Business?
          </motion.h2>
          <motion.p 
            className="text-lg text-ai-grey max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Get in touch today and let's discuss how AI automation can transform your operations
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {contactDetails.map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <Card className="text-center hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-ai-red/10 flex items-center justify-center rounded-lg text-ai-red mb-3 mx-auto">
                    <contact.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-ai-grey-dark mb-2">{contact.label}</h3>
                  {contact.href ? (
                    <a 
                      href={contact.href}
                      className="text-ai-grey hover:text-ai-red transition-colors"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <p className="text-ai-grey">{contact.value}</p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="text-center hover:shadow-md transition-shadow bg-ai-red text-white">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-white/20 flex items-center justify-center rounded-lg mb-3 mx-auto">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">Schedule Call</h3>
                <button className="text-white/90 hover:text-white transition-colors">
                  Book a Meeting
                </button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
