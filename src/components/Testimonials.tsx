import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    content: "We're huge fans of working with the team at Showmine. Zac and his team have a unique understanding of Webflow - both from a design perspective and creating innovating development builds.",
    author: {
      name: "Daniel D'Souza",
      role: "Head of Growth at Voiceflow",
      image: "https://framerusercontent.com/images/QwZkc2hs34MqZr0KiCWYd9JCo.jpeg?width=603&height=603",
    },
  },
  {
    id: 2,
    content: "Great experience with Showmine building a Landing Page for our new SMM offer. Great to work with, fast, and they know their stuff! Will continue to lean on them for our strategic web needs. 10/10",
    author: {
      name: "John Hyland",
      role: "Founder",
      image: "https://framerusercontent.com/images/teXi3aWpNN8KAL3SZYCS7Zk26U.png?width=500&height=500",
    },
  },
  {
    id: 3,
    content: "It was a great experience working with Zac at Showmine. He helped us develop a website for our nonprofit organization, taking the time to listen to our needs and what was important to us.",
    author: {
      name: "Daniel Rolke",
      role: "Nonprofit Director",
      image: "https://framerusercontent.com/images/fB5FLq8CCJDmb0ngHSD3gq0rdZo.jpeg?width=232&height=217",
    },
  },
  {
    id: 4,
    content: "Zac and the team at Showmine are exceptionally skilled, reliable, and communicative. They stepped in to help when our web developer went on maternity leave and have handled our complex website needs with ease.",
    author: {
      name: "Charlie Messinger",
      role: "Marketing Manager",
      image: "https://framerusercontent.com/images/YBQbasDWQP54PSPZ23cNx9e5NyU.png?width=120&height=120",
    },
  },
  {
    id: 5,
    content: "The team at Showmine provides top notch websites! Getting to work with them I have been able to see how much they love their work and take pride in delivering only the BEST work to their clients.",
    author: {
      name: "Payton Clark Smith",
      role: "Business Owner",
      image: "https://framerusercontent.com/images/Hfdpqh8210fmIjw8etM3Dmg3LTE.jpg?width=900&height=900",
    },
  },
  {
    id: 6,
    content: "Showmine are world class experts at what they do. We are able to run traffic to our website that converts 80% higher than any landing page we've ever built. The design and attention to detail is 10/10.",
    author: {
      name: "Reuben Santer",
      role: "CEO",
      image: "https://framerusercontent.com/images/thqK4GNoVoY5HU3kYODvTvnzXs0.webp?width=345&height=345",
    },
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-serif">What our clients say</h2>
        </motion.div>
      </div>

      {/* First Row - Scrolling Left */}
      <div className="relative mb-6 overflow-hidden">
        <div className="flex gap-6 animate-marquee">
          {[...testimonials.slice(0, 3), ...testimonials.slice(0, 3)].map((testimonial, index) => (
            <motion.div
              key={`${testimonial.id}-${index}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex-shrink-0 w-[350px] md:w-[400px] testimonial-card"
            >
              <p className="text-foreground/80 text-sm mb-6 line-clamp-4">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.author.image}
                  alt={testimonial.author.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-sm">{testimonial.author.name}</p>
                  <p className="text-muted-foreground text-xs">{testimonial.author.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Second Row - Scrolling Right */}
      <div className="relative overflow-hidden">
        <div className="flex gap-6 animate-marquee-reverse">
          {[...testimonials.slice(3), ...testimonials.slice(3)].map((testimonial, index) => (
            <motion.div
              key={`${testimonial.id}-${index}-reverse`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex-shrink-0 w-[350px] md:w-[400px] testimonial-card"
            >
              <p className="text-foreground/80 text-sm mb-6 line-clamp-4">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.author.image}
                  alt={testimonial.author.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-sm">{testimonial.author.name}</p>
                  <p className="text-muted-foreground text-xs">{testimonial.author.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
