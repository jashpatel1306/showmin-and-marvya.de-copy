import { motion } from "framer-motion";
import GalleryColumn from "./GalleryColumn";

const badges = [
  { icon: "🎨", label: "Creatives" },
  { icon: "⭐", label: "Pro Expert" },
  { icon: "🏆", label: "Certified Partner" },
  { icon: "🏢", label: "Agency" },
];
const portfolioImages = [
  {
    src: "https://framerusercontent.com/images/Rv4TMOeWmFGdEGRuJ3Vz6o7bRw.jpg?width=1000&height=699",
    alt: "Portfolio 1",
    gridArea: "1 / 1 / 4 / 3",
  },
  {
    src: "https://framerusercontent.com/images/ZNLK0FforeBXuRq6UoBnpPIU9eY.png?width=1690&height=1278",
    alt: "Portfolio 2",
    gridArea: "1 / 3 / 3 / 5",
  },
  {
    src: "https://framerusercontent.com/images/MpbrjX5owGxoVDwJglxMFE06Hm4.png?width=744&height=1618",
    alt: "Green Oak Therapies",
    gridArea: "1 / 5 / 5 / 7",
  },
  {
    src: "https://framerusercontent.com/images/uKw3C8NT4zav4B8uO8NO6Sp6dkQ.jpeg?width=2920&height=2042",
    alt: "PM Properties",
    gridArea: "4 / 1 / 7 / 3",
  },
  {
    src: "https://framerusercontent.com/images/WISPNRMsYwXBCaCX7k8zO8g4.png?width=1592&height=1326",
    alt: "ETS",
    gridArea: "3 / 3 / 6 / 5",
  },
  {
    src: "https://framerusercontent.com/images/f2DTMSWLzSDzS7z0IbDBW0p3ois.png?width=2880&height=2000",
    alt: "Consensus",
    gridArea: "5 / 5 / 8 / 7",
  },
  {
    src: "https://framerusercontent.com/images/NGFUmJ2LyY9ql1QGdJLplKzca8.png?width=2880&height=2000",
    alt: "Adpros",
    gridArea: "7 / 1 / 10 / 3",
  },
  {
    src: "https://framerusercontent.com/images/HiPWByMHZ8kCjthRFeEths1xob4.png?width=1554&height=1246",
    alt: "Client Home",
    gridArea: "6 / 3 / 9 / 5",
  },
];

const galleryData = {
  column1: [
    {
      type: "image" as const,
      src: "https://framerusercontent.com/images/Rv4TMOeWmFGdEGRuJ3Vz6o7bRw.jpg",
      aspectRatio: "1.43",
    },
    {
      type: "video" as const,
      src: "https://framerusercontent.com/assets/NI6txO74xP5bNsEkPvsdAyh0HMI.mp4",
      aspectRatio: "1.5",
    },
    {
      type: "image" as const,
      src: "https://framerusercontent.com/images/ZNLK0FforeBXuRq6UoBnpPIU9eY.png",
      aspectRatio: "1.32",
    },
  ],
  column2: [
    {
      type: "video" as const,
      src: "https://framerusercontent.com/assets/fAFnF4aU66tyklT20c6Ro26Aw.mp4",
      aspectRatio: "1.5",
    },
    {
      type: "image" as const,
      src: "https://framerusercontent.com/images/MpbrjX5owGxoVDwJglxMFE06Hm4.png",
      alt: "Green Oak Therapies client home page",
      aspectRatio: "0.46",
    },
    {
      type: "image" as const,
      src: "https://framerusercontent.com/images/RQC65QKeAvX19koq89AfBfvPIaI.png",
      aspectRatio: "0.46",
    },
  ],
  column3: [
    {
      type: "video" as const,
      src: "https://framerusercontent.com/assets/njPHl1FkYIA3QPATOSRiX36dQ.mp4",
      aspectRatio: "1.5",
    },
    {
      type: "image" as const,
      src: "https://framerusercontent.com/images/uKw3C8NT4zav4B8uO8NO6Sp6dkQ.jpeg",
      alt: "PM Properties client home page",
      aspectRatio: "1.43",
    },
    {
      type: "video" as const,
      src: "https://framerusercontent.com/assets/p79LxP5X1XjLjo4BI51YOEd7bA.mp4",
      aspectRatio: "1.5",
    },
    {
      type: "image" as const,
      src: "https://framerusercontent.com/images/WISPNRMsYwXBCaCX7k8zO8g4.png",
      alt: "ETS client home page",
      aspectRatio: "1.2",
    },
  ],
  column4: [
    {
      type: "video" as const,
      src: "https://framerusercontent.com/assets/x299ObADfs04u2HWJ5wwQJoGrg.mp4",
      aspectRatio: "1.5",
    },
    {
      type: "image" as const,
      src: "https://framerusercontent.com/images/f2DTMSWLzSDzS7z0IbDBW0p3ois.png",
      alt: "Consensus client home page",
      aspectRatio: "1.44",
    },
    {
      type: "image" as const,
      src: "https://framerusercontent.com/images/NGFUmJ2LyY9ql1QGdJLplKzca8.png",
      alt: "AdPros client home page",
      aspectRatio: "1.44",
    },
    {
      type: "image" as const,
      src: "https://framerusercontent.com/images/HiPWByMHZ8kCjthRFeEths1xob4.png",
      alt: "Client home page",
      aspectRatio: "1.25",
    },
  ],
  column5: [
    {
      type: "video" as const,
      src: "https://framerusercontent.com/assets/ltrOB20wmAQXJUXHkEbdmyRowg.mp4",
      aspectRatio: "1.5",
    },
    {
      type: "video" as const,
      src: "https://framerusercontent.com/assets/ndqfhaVd3GSux1iKCvoHRprzA8.mp4",
      aspectRatio: "1.5",
    },
    {
      type: "image" as const,
      src: "https://framerusercontent.com/images/4wJpWQj7qMLLAU3Dd1roKUYc20.png",
      aspectRatio: "0.46",
    },
  ],
  column6: [
    {
      type: "image" as const,
      src: "https://framerusercontent.com/images/kzeGFPxX363ee7xstmScKIORuY.png",
      aspectRatio: "1.4",
    },
    {
      type: "video" as const,
      src: "https://framerusercontent.com/assets/l1EXLSmd09fHZm2LvOQrf1iRR38.mp4",
      aspectRatio: "1.5",
    },
    {
      type: "image" as const,
      src: "https://framerusercontent.com/images/mPsQXQ0arun7VTSiFchAfSlUGlE.jpeg",
      aspectRatio: "1.43",
    },
    {
      type: "image" as const,
      src: "https://framerusercontent.com/images/TkxqVBKtNQGAc4zccvPQO8Jikgw.jpg",
      aspectRatio: "1.43",
    },
  ],
};

const Hero = () => {
  return (
    <section className="relative min-h-screen wavy-bg pt-24 md:pt-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-8 md:mb-12"
        >
          {badges.map((badge, index) => (
            <motion.span
              key={badge.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="badge-pill"
            >
              <span>{badge.icon}</span>
              <span>{badge.label}</span>
            </motion.span>
          ))}
        </motion.div>
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center max-w-4xl mx-auto mb-8"
        >
          <h1 className="section-heading mb-6">
          Build, Launch, and Grow Your Website
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Showmine partners with ambitious teams to design, develop, and optimize high-performance websites that load faster, look exceptional, and convert visitors into qualified leads and customers.
          </p>
        </motion.div>
        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex justify-center mb-12 md:mb-20"
        >
          <a href="#contact" className="btn-primary text-base px-8 py-4">
            Book a call
          </a>
        </motion.div>


       
        {/* <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-40 gallery-gradient" /> */}

        {/* Bottom gradient overlay */}
        {/* <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 gallery-gradient rotate-180" /> */}

 {/* Portfolio Grid */}
      </div>
      {/* Portfolio Grid */}
      <div className="relative z-10 mt-6 w-full">
        <motion.div
          className="flex gap-3 px-2 sm:px-4 md:px-6 lg:px-10 justify-start md:justify-center overflow-x-auto md:overflow-visible"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          {/* Column 1 */}
          <GalleryColumn
            items={galleryData.column1}
            speed={0.5}
            className="w-[60%] xs:w-[55%] sm:w-[220px] lg:w-[280px] hidden sm:flex"
          />

          {/* Column 2 - Slower/reverse parallax */}
          <GalleryColumn
            items={galleryData.column2}
            speed={-1}
            className="w-[40%] xs:w-[45%] sm:w-[140px] lg:w-[160px] hidden md:flex"
          />

          {/* Column 3 */}
          <GalleryColumn
            items={galleryData.column3}
            speed={0.5}
            className="w-[70%] xs:w-[60%] sm:w-[220px] lg:w-[280px]"
          />

          {/* Column 4 - Slower/reverse parallax */}
          <GalleryColumn
            items={galleryData.column4}
            speed={-1}
            className="w-[70%] xs:w-[60%] sm:w-[220px] lg:w-[280px]"
          />

          {/* Column 5 */}
          <GalleryColumn
            items={galleryData.column5}
            speed={0.5}
            className="w-[40%] xs:w-[45%] sm:w-[140px] lg:w-[160px] hidden md:flex"
          />

          {/* Column 6 - Slower/reverse parallax */}
          <GalleryColumn
            items={galleryData.column6}
            speed={-1}
            className="w-[60%] xs:w-[55%] sm:w-[220px] lg:w-[280px] hidden sm:flex"
          />
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;
