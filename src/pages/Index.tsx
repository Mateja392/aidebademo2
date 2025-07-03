
import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import Industries from '@/components/Industries';
import SpecialOffer from '@/components/SpecialOffer';
import Portfolio from '@/components/Portfolio';
import HowItWorks from '@/components/HowItWorks';
import SEO from '@/components/SEO';
import { useEffect } from 'react';

const Index = () => {
  // Fix any ID conflicts when the page loads
  useEffect(() => {
    const contactElements = document.querySelectorAll('[id="contact"]');
    if (contactElements.length > 1) {
      // If there are multiple elements with id="contact", rename one
      contactElements[1].id = 'contact-footer';
    }
  }, []);

  return (
    <PageLayout>
      <SEO 
        title="AI DEBA Automation - Smart Business Solutions" 
        description="Automate your business with AI. Custom AI agents, automation systems, and smart workflows for small and mid-sized businesses."
        keywords={['AI automation', 'business automation', 'AI agents', 'workflow automation', 'digital transformation', 'custom AI solutions']}
      />
      <Hero />
      <Industries />
      <SpecialOffer />
      <Portfolio />
      <HowItWorks />
    </PageLayout>
  );
};

export default Index;
