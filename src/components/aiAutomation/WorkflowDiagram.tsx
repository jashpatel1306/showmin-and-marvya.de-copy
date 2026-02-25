import { motion } from "framer-motion";

interface FlowCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  className?: string;
}

const FlowCard = ({ icon, title, subtitle, className = "" }: FlowCardProps) => (
  <div
    className={`flex items-center gap-3 px-4 py-3 rounded-xl border border-border bg-card backdrop-blur-sm ${className}`}
    style={{ boxShadow: "var(--shadow-card)" }}
  >
    <div
      className="w-8 h-8 rounded-xl border border-border bg-card flex items-center justify-center flex-shrink-0 overflow-hidden"
      style={{ boxShadow: "0 2px 50px 2px rgba(0,0,0,0.07)" }}
    >
      {icon}
    </div>
    <div className="flex flex-col min-w-0">
      <span className="text-sm font-extrabold text-foreground tracking-tight leading-snug">{title}</span>
      <span className="text-xs font-semibold text-muted-foreground tracking-tight">{subtitle}</span>
    </div>
  </div>
);

const YesBadge = () => (
  <div
    className="px-3 py-1.5 rounded-lg border border-border bg-card text-xs font-bold text-foreground"
    style={{ boxShadow: "var(--shadow-card)" }}
  >
    Yes
  </div>
);

const TriggerIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
    <rect x="4" y="4" width="16" height="16" rx="3" fill="#F5A623" />
    <path d="M12 8v8M8 12h8" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const GitBranchIcon = () => (
  <svg viewBox="0 0 256 256" className="w-5 h-5" fill="hsl(253, 45%, 70%)">
    <path d="M232,64a32,32,0,1,0-40,31v17a8,8,0,0,1-8,8H96a23.84,23.84,0,0,0-8,1.38V95a32,32,0,1,0-16,0v66a32,32,0,1,0,16,0V144a8,8,0,0,1,8-8h88a24,24,0,0,0,24-24V95A32.06,32.06,0,0,0,232,64ZM64,64A16,16,0,1,1,80,80,16,16,0,0,1,64,64ZM96,192a16,16,0,1,1-16-16A16,16,0,0,1,96,192ZM200,80a16,16,0,1,1,16-16A16,16,0,0,1,200,80Z" />
  </svg>
);

const HubSpotIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
    <circle cx="12" cy="12" r="3" stroke="#FF7A59" strokeWidth="2" />
    <circle cx="18" cy="6" r="2" fill="#FF7A59" />
    <circle cx="6" cy="18" r="2" fill="#FF7A59" />
    <circle cx="18" cy="18" r="2" fill="#FF7A59" />
    <line x1="14.5" y1="10" x2="16.5" y2="7.5" stroke="#FF7A59" strokeWidth="1.5" />
    <line x1="9.5" y1="14" x2="7.5" y2="16.5" stroke="#FF7A59" strokeWidth="1.5" />
    <line x1="14.5" y1="14" x2="16.5" y2="16.5" stroke="#FF7A59" strokeWidth="1.5" />
  </svg>
);

const SlackIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5">
    <path d="M6 15a2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 1 2-2h2v2z" fill="#E01E5A" />
    <path d="M7 15a2 2 0 0 1 2-2 2 2 0 0 1 2 2v5a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-5z" fill="#E01E5A" />
    <path d="M9 6a2 2 0 0 1-2-2 2 2 0 0 1 2-2 2 2 0 0 1 2 2v2H9z" fill="#36C5F0" />
    <path d="M9 7a2 2 0 0 1 2 2 2 2 0 0 1-2 2H4a2 2 0 0 1-2-2 2 2 0 0 1 2-2h5z" fill="#36C5F0" />
    <path d="M18 9a2 2 0 0 1 2-2 2 2 0 0 1 2 2 2 2 0 0 1-2 2h-2V9z" fill="#2EB67D" />
    <path d="M17 9a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4a2 2 0 0 1 2-2 2 2 0 0 1 2 2v5z" fill="#2EB67D" />
    <path d="M15 18a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2v-2h2z" fill="#ECB22E" />
    <path d="M15 17a2 2 0 0 1-2-2 2 2 0 0 1 2-2h5a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-5z" fill="#ECB22E" />
  </svg>
);

const ChatGPTIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
    <circle cx="12" cy="12" r="9" stroke="#10A37F" strokeWidth="1.5" />
    <path d="M12 7v5l3 3" stroke="#10A37F" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="12" cy="12" r="2" fill="#10A37F" />
  </svg>
);

// Animated SVG line that draws itself
const AnimatedLine = ({
  d,
  delay,
  duration = 0.6,
  dashed = false,
}: {
  d: string;
  delay: number;
  duration?: number;
  dashed?: boolean;
}) => (
  <motion.path
    d={d}
    stroke="hsl(240, 6%, 90%)"
    strokeWidth="1.5"
    strokeLinejoin="round"
    fill="none"
    strokeDasharray={dashed ? "4 4" : undefined}
    initial={{ pathLength: 0, opacity: 0 }}
    animate={{ pathLength: 1, opacity: 1 }}
    transition={{ delay, duration, ease: "easeInOut" }}
  />
);

// Timing constants (seconds)
const T = {
  card1: 0.2,       // Trigger card appears
  line1: 0.9,       // Line draws from trigger → check
  card2: 1.6,       // Check contact card appears
  line2: 2.3,       // Line draws to Yes badge
  badge: 2.9,       // Yes badge appears
  line3: 3.4,       // Lines draw to deal + alert
  card3a: 4.0,      // Create deal appears
  card3b: 4.0,      // Alert appears (same time)
  line4: 4.6,       // Line draws to draft
  card4: 5.2,       // Draft reply appears
  cursor: 5.6,      // Cursor + You badge appears
};

const WorkflowDiagram = () => {
  return (
    <div className="relative w-full max-w-[560px] h-[500px]">
      {/* SVG Connection Lines - animated draw */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 560 480"
        fill="none"
      >
        <AnimatedLine
          d="M200 70 L200 120 C200 130 200 135 200 140 L200 155"
          delay={T.line1}
          duration={0.5}
        />
        <AnimatedLine
          d="M300 190 L370 220 L370 240"
          delay={T.line2}
          duration={0.5}
          dashed
        />
        <AnimatedLine
          d="M370 260 L370 285 C370 295 300 305 200 315 L140 340"
          delay={T.line3}
          duration={0.5}
        />
        <AnimatedLine
          d="M370 260 L370 285 C370 295 400 305 400 330"
          delay={T.line3}
          duration={0.5}
        />
        <AnimatedLine
          d="M140 385 L170 400 L170 420"
          delay={T.line4}
          duration={0.4}
        />
      </svg>

      {/* Step 1: Trigger */}
      <motion.div
        className="absolute"
        style={{ left: "120px", top: "16px" }}
        initial={{ opacity: 0, y: 24, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: T.card1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <FlowCard icon={<TriggerIcon />} title="New website form submitted" subtitle="trigger" />
      </motion.div>

      {/* Step 2: Check existing contact */}
      <motion.div
        className="absolute"
        style={{ left: "60px", top: "140px" }}
        initial={{ opacity: 0, y: 24, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: T.card2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <FlowCard icon={<GitBranchIcon />} title="Check if existing contact" subtitle="Score by budget, role, company size" />
      </motion.div>

      {/* Step 3: Yes badge */}
      <motion.div
        className="absolute"
        style={{ left: "350px", top: "235px" }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: T.badge, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <YesBadge />
      </motion.div>

      {/* Step 4a: Create deal */}
      <motion.div
        className="absolute"
        style={{ left: "50px", top: "320px" }}
        initial={{ opacity: 0, y: 24, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: T.card3a, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <FlowCard icon={<HubSpotIcon />} title="Create deal" subtitle="Add source, tags" />
      </motion.div>

      {/* Step 4b: Alert sales-support */}
      <motion.div
        className="absolute"
        style={{ left: "310px", top: "320px" }}
        initial={{ opacity: 0, y: 24, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: T.card3b, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <FlowCard icon={<SlackIcon />} title="Alert #sales-support" subtitle="Summary + quick context" />
      </motion.div>

      {/* Step 5: Draft tailored reply */}
      <motion.div
        className="absolute"
        style={{ left: "100px", top: "410px" }}
        initial={{ opacity: 0, y: 24, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: T.card4, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <FlowCard icon={<ChatGPTIcon />} title="Draft tailored reply" subtitle="On-brand email ready to send" />
      </motion.div>

      {/* Cursor "You" badge */}
      <motion.div
        className="absolute"
        style={{ right: "10px", bottom: "20px" }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: T.cursor, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-center gap-2">
          <div className="w-4 h-5">
            <svg viewBox="0 0 19 23" fill="black" stroke="white" strokeWidth="1.5">
              <path d="M1 1L4.8 22L9.6 12.914L18 11.298Z" />
            </svg>
          </div>
          <div className="px-3 py-1.5 rounded-lg bg-accent text-accent-foreground text-xs font-bold">
            You
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default WorkflowDiagram;
