"use client";

import { motion } from "framer-motion";
import {
  Store,
  Link2,
  Share2,
  BarChart3,
  Wallet,
  PackageCheck,
} from "lucide-react";



const steps = [
  { title: "Brand Joins", desc: "Add products & set commission", icon: Store },
  { title: "Seller Verifies", desc: "Generate unique affiliate link", icon: Link2 },
  { title: "Share & Promote", desc: "Distribute across channels", icon: Share2 },
  { title: "Distribution Happens", desc: "Customers buy via link", icon: PackageCheck },
  { title: "Track Performance", desc: "Real-time analytics", icon: BarChart3 },
  { title: "Earn Commission", desc: "Auto payout after return period", icon: Wallet },
];



const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.09,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const lineVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 0.6,
    transition: {
      pathLength: { duration: 0.6, delay: 0.25 + i * 0.08 },
      opacity: { duration: 0.2 },
    },
  }),
};



function StepCard({
  step,
  index,
}: {
  step: (typeof steps)[0];
  index: number;
}) {
  const Icon = step.icon;

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      custom={index}
      whileHover={{ y: -4 }}
      className="relative bg-white dark:bg-neutral-900 rounded-2xl p-6 lg:p-8 
      min-h-[130px] flex items-center 
      shadow-[0_4px_14px_rgba(0,0,0,0.06)] 
      dark:shadow-[0_4px_14px_rgba(0,0,0,0.2)] 
      border border-neutral-100 dark:border-neutral-800"
    >
      <div className="flex items-start gap-4">
        <div className="bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-xl p-3 shrink-0">
          <Icon className="w-6 h-6" strokeWidth={1.8} />
        </div>
        <div>
          <h3 className="text-lg font-semibold">{step.title}</h3>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
            {step.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function HorizontalLine({ index }: { index: number }) {
  return (
    <div className="flex items-center justify-center w-full py-6">
      <svg viewBox="0 0 100 10" className="w-full h-2.5 text-neutral-300 dark:text-neutral-600">
        <motion.path
          d="M 0 5 L 100 5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          variants={lineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={index}
        />
      </svg>
    </div>
  );
}



export default function AffiliateFlow() {
  return (
    <section id="flow" className="py-28 bg-background overflow-hidden">
      {/* Header */}
      <motion.div
        className="max-w-3xl mx-auto px-6 text-center mb-20"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold mb-4">How Distribo Works</h2>
        <p className="text-lg text-neutral-500 dark:text-neutral-400">
          From brand onboarding to affiliate payout — one clean flow.
        </p>
      </motion.div>

      {/* Desktop Grid */}
      <div className="hidden lg:block max-w-6xl mx-auto px-6">
        <div
          className="grid"
          style={{
            gridTemplateColumns: "1fr 40px 1fr 40px 1fr",
            rowGap: 48,
          }}
        >
          {[0, 1].map((row) =>
            [0, 1, 2].map((col) => {
              const i = row * 3 + col;
              return (
                <div key={i} className="contents">
                  <div className="py-4">
                    <StepCard step={steps[i]} index={i} />
                  </div>
                  {col < 2 && <HorizontalLine index={i} />}
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Mobile / Tablet */}
      <div className="lg:hidden max-w-md mx-auto px-6 flex flex-col space-y-6">
        {steps.map((step, i) => (
          <StepCard key={i} step={step} index={i} />
        ))}
      </div>
    </section>
  );
}
