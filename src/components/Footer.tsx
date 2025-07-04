
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {

  return (
    <footer id="contact" className="bg-black text-white pt-16 pb-8 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pb-10 border-b border-gray-700">
          <div className="lg:col-span-2">
            <div className="text-3xl font-bold text-ai-red mb-6">
              AI Deba
            </div>
            <p className="text-gray-300 mb-6">
              AI Deba specializes in automating business processes with intelligent AI solutions. We help small and mid-sized businesses increase sales and save time through custom automation systems.
            </p>
            <p className="text-gray-300 mb-6">
              Belgrade, Serbia
            </p>
            <div className="flex space-x-4">
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Industries</h3>
            <ul className="space-y-3">
              <li><span className="text-gray-300">E-commerce</span></li>
              <li><span className="text-gray-300">Healthcare</span></li>
              <li><span className="text-gray-300">Professional Services</span></li>
              <li><span className="text-gray-300">Manufacturing</span></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} AI Deba. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
