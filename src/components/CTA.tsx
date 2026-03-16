import React from "react";
import { Link } from "react-router-dom";
import { BackgroundGradient } from "./ui/bg-gradient";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTA: React.FC = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center px-4 py-16">
      <div className="container max-w-7xl w-full">
        <BackgroundGradient>
          <div
            className="section cta py-12 px-6 relative overflow-hidden rounded-xl sm:rounded-2xl my-1 mx-1"
            style={{
              background: `
            linear-gradient(95.35deg, #000000 0.77%, #004A9F 50.41%, #071A37 99.86%),
            url('https://res.cloudinary.com/dnyouhvwj/image/upload/v1750185490/swatch_gtmpsh.png')
          `,
              backgroundBlendMode: "overlay",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Decorative elements - Responsive */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20">
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-10 md:left-10 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-40 lg:h-40 rounded-full bg-primary blur-2xl md:blur-3xl"></div>
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-10 md:right-10 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-40 lg:h-40 rounded-full bg-accent blur-2xl md:blur-3xl"></div>
            </div>

            <div className="container mx-auto max-w-6xl relative z-10">
              <div className="text-center">
                <div className="mb-10">
                  <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight leading-tight">
                    Ready to Make an
                    <motion.span
                      initial={{ opacity: 0.5, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.4,
                        duration: 0.9,
                        ease: "easeInOut",
                      }}
                      className="text-[#85D1F1] block sm:inline"
                    >
                      {" "}
                      Impact
                    </motion.span>{" "}
                    <span className="block sm:inline">with CAiRL?</span>
                  </h2>
                  <p className="font-sans text-lg text-white/70 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
                    Join us as a student, researcher, partner, or sponsor in our
                    nonprofit mission to advance AI for social good.
                  </p>
                </div>

                <Link
                  to="/engage-with-us"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold py-4 px-10 rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg group"
                >
                  Engage With Us
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </BackgroundGradient>
      </div>
    </section>
  );
};

export default CTA;
