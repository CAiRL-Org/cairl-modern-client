import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const researchAreas = [
  {
    title: "AI Research & Thought Leadership",
    desc: "Pioneering research in Generative AI, Explainable AI, and AI Ethics with top research institutes.",
  },
  {
    title: "AI Education & Skill Development",
    desc: "Equipping professionals and students with AI expertise through bootcamps, certifications, and curriculum design.",
  },
  {
    title: "AI for Social Good",
    desc: "Driving AI initiatives for climate resilience, public healthcare, and rural outreach.",
  },
];

const Research: React.FC = () => {
  return (
    <section className="relative w-full">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h4
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20"
          >
            Research & Innovation
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Driving <span className="text-primary">Responsible AI</span>{" "}
            Innovation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="max-w-2xl mx-auto text-muted-foreground text-lg"
          >
            Our contributions span cutting-edge research, ecosystem development,
            mentorship, and AI-driven social impact.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {researchAreas.map((area, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + idx * 0.15, duration: 0.5 }}
              className="bg-card rounded-xl p-6 shadow-md border border-border hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {area.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {area.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/research-and-innovation"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3.5 rounded-full text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-md inline-block"
          >
            Explore Our Research
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Research;
