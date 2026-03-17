import { motion } from "framer-motion";

const Journey = () => {
  return (
    <div id="our-journey" className="text-center flex flex-col items-center my-12 mt-24">
      <motion.h4
        initial={{ opacity: 0.5, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="inline-block px-6 py-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20"
      >
        Our Journey
      </motion.h4>
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 w-full md:w-[700px]">
        Bridging Innovation and Impact
      </h1>
      <p className="about-text text-justify w-full text-muted-foreground">
        The Collaborative AI Research Labs Foundation (CAiRL) is a nonprofit
        organization founded with a clear mission: to harness AI’s
        transformative power for meaningful change. Established in Hyderabad,
        CAiRL unites academia, industry, and government to address pressing
        global challenges through collaborative innovation.
      </p>
      <p className="about-text text-justify w-full text-muted-foreground">
        We advance scalable, ethical AI technologies across healthcare,
        agriculture, biopharma, and education—driving solutions that create
        real societal impact.
      </p>
    </div>
  );
};

export default Journey;
