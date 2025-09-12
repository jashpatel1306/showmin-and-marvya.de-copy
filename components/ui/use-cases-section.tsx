import { motion } from "framer-motion";
import { Button } from "./button";
import Image from "next/image";

type FeatureCard = {
  id: number;
  title: string;
  description: string;
  image: string;
  overlayText: string;
  className?: string;
};

export function UseCasesSection() {
  const featureCards: FeatureCard[] = [
    {
      id: 1,
      title: "No Subscription",
      description: "Pay only for what you use with no monthly commitments",
      image: "/images/use-cases/map.jpg",
      overlayText: "No monthly subscription fee",
      className: "md:col-span-1"
    },
    {
      id: 2,
      title: "Flexible Billing",
      description: "Simple pay-as-you-go pricing with no hidden fees",
      image: "/images/use-cases/tech.jpg",
      overlayText: "No recurring billing",
      className: "md:col-span-1"
    },
    {
      id: 3,
      title: "Start Free",
      description: "Get started with our generous free tier",
      image: "/images/use-cases/business.jpg",
      overlayText: "Get 500 Free Usage Every Month →",
      className: "md:col-span-2"
    }
  ];

  return (
    <section className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section 1: Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Use Cases
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Below are few examples of how our services can be beneficial in helping you attain your objectives.
            </p>
          </div>
          <Button className="mt-6 md:mt-0" size="lg">
            Try For Free →
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Section 2: Pricing Highlight */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900">
              Pay only for what you need, when you need it
            </h3>
            
            {/* Divider with icon */}
            <div className="mb-3 flex items-center gap-3 select-none" aria-hidden>
                <span className="h-px flex-1 bg-[#E0E0E0]" />
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-[#E0E0E0] bg-white">
                  <span className="inline-block w-3.5 h-3.5 bg-gray-400 rounded-sm" />
                </span>
                <span className="h-px flex-1 bg-[#E0E0E0]" />
              </div>

            {/* <div className="h-1 w-16 bg-blue-600 mb-6"></div> */}
            
            <p className="text-gray-600 mb-6">
              We believe in transparent and flexible pricing that puts you in control. With Livescraper, you won't have to worry about monthly subscription fees or recurring billing. Instead, you'll only pay for the individual services that you use, as much or as little as you need.
            </p>
            
            <p className="text-gray-600 mb-8">
              To make things even more affordable, we offer a Free Tier that allows you to use a certain amount of data scraping each month for free. This means you can get started with our platform without any upfront costs and only pay for additional usage as needed.
            </p>
            
            <Button variant="outline">Pricing Plan →</Button>
          </div>

          {/* Section 3: Feature Cards */}
          <div className="grid grid-cols-1 gap-6">
            {featureCards.map((card) => (
              <motion.div
                key={card.id}
                className={`relative h-48 rounded-2xl overflow-hidden group ${card.className}`}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <div>
                    <p className="text-white font-bold text-lg">{card.overlayText}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <div className="relative h-20 w-full">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
