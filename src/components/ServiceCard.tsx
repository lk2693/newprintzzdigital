import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

interface ServiceCardProps {
  service: {
    icon: React.ElementType;
    title: string;
    description: string;
    features: string[];
    category: string;
    duration: string;
    gradient: string;
    benefits?: string[];
  };
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="bg-white border-slate-200 h-full hover:border-slate-900 transition-all group overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader>
        <div className="flex items-start justify-between mb-4">
          <motion.div 
            className="p-3 bg-slate-900 relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              animate={{ rotate: isHovered ? 360 : 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <service.icon className="w-8 h-8 text-white" />
            </motion.div>
          </motion.div>
          <motion.div 
            className="text-right"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-sm font-light text-slate-900 uppercase tracking-wider">{service.category}</div>
            <div className="text-sm text-slate-600 font-light">{service.duration}</div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <CardTitle className="text-2xl mb-3 font-light">{service.title}</CardTitle>
        </motion.div>
        <motion.p 
          className="text-slate-600 leading-relaxed font-light"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {service.description}
        </motion.p>
        <motion.div 
          className="mt-4 inline-block px-3 py-1 border border-slate-200 text-slate-600 text-sm font-light uppercase tracking-wider"
          whileHover={{ borderColor: "#0f172a", color: "#0f172a" }}
          transition={{ duration: 0.2 }}
        >
          Individuelles Angebot
        </motion.div>
      </CardHeader>
      <CardContent>
        <motion.div 
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h4 className="text-sm uppercase tracking-wider text-slate-900 mb-3 font-light">Leistungen</h4>
          <ul className="space-y-3">
            {service.features.map((feature, featureIndex) => (
              <motion.li 
                key={featureIndex} 
                className="flex items-start gap-3 text-slate-600 font-light text-sm"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + featureIndex * 0.05 }}
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
              >
                <motion.div 
                  className="w-1.5 h-1.5 rounded-full bg-slate-900 mt-1.5 flex-shrink-0"
                  whileHover={{ scale: 1.5 }}
                  transition={{ duration: 0.2 }}
                />
                {feature}
              </motion.li>
            ))}
          </ul>
        </motion.div>
        
        {service.benefits && service.benefits.length > 0 && (
          <motion.div 
            className="pt-6 border-t border-slate-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h4 className="text-sm uppercase tracking-wider text-slate-900 mb-3 font-light">Ihre Vorteile</h4>
            <div className="space-y-2">
              {service.benefits.map((benefit, benefitIndex) => (
                <motion.div 
                  key={benefitIndex} 
                  className="flex items-center gap-2 text-slate-600 font-light text-sm"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + benefitIndex * 0.1 }}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                >
                  <motion.div 
                    className="w-4 h-4 bg-slate-900 flex items-center justify-center flex-shrink-0"
                    whileHover={{ rotate: 180, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  </motion.div>
                  {benefit}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
