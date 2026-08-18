import { CtaBottomCircuit } from "./ui/CtaBottomCircuit";

export function StartTodayBanner() {
  return (
    <section className="bg-[#072F1D] relative z-30 overflow-hidden">
      {/* 3-Part Section Layout matching site structure */}
      <div className="relative mx-auto max-w-[1358px] w-full flex justify-center">
        {/* Left Vertical Side Column (W: 120px) */}
        <div className="hidden xl:flex w-[120px] shrink-0 border-r border-[#144A30] bg-[#072F1D]">
          <div className="flex-1 relative overflow-hidden bg-[#072F1D]" />
          <div className="w-[16px] bg-[#072F1D] shrink-0" />
        </div>

        {/* Center Column (W: 1118px) */}
        <div className="w-[calc(100%-19px)] mx-[9.5px] md:w-[calc(100%-32px)] md:mx-4 xl:w-[1118px] xl:mx-0 border-l border-r border-[#144A30] flex flex-col items-center bg-[#072F1D] shrink-0">
          {/* Banner Container Frame (W: 1118px, H: 519px) */}
          <div
            className="w-full h-[519px] relative overflow-hidden flex flex-col items-center justify-center"
            style={{
              background:
                "radial-gradient(ellipse 60% 60% at 50% 35%, #0F5A38 0%, #072F1D 50%, #041F13 100%)",
            }}
          >
            {/* Bottom-Left & Bottom-Right Circuit Patterns (Desktop only) */}
            <div className="hidden md:block">
              <CtaBottomCircuit side="left" />
              <CtaBottomCircuit side="right" />
            </div>

            {/* Upper Layer: Top-Left Circuit Pattern (Desktop only) */}
            <div
              className="hidden md:block absolute w-[209px] h-[217px] pointer-events-none z-10 opacity-90"
              style={{ left: "12px", top: "-20px", transform: "scaleX(-1)" }}
            >
              <svg
                width="209"
                height="217"
                viewBox="0 0 208.621 216.763"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="pointer-events-none"
              >
                <defs>
                  <linearGradient id="cta-tl-circuit-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#27B578" stopOpacity="0.25" />
                    <stop offset="40%" stopColor="#27B578" stopOpacity="0.9" />
                    <stop offset="60%" stopColor="#27B578" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#27B578" stopOpacity="0.25" />
                  </linearGradient>
                </defs>
                <path d="M155.566 56.6074L178.691 33.4817V0.00918152H176.341V32.5088L154.593 54.2575H79.8389L62.3012 36.7222V0.00918152H59.9513V37.6951L78.866 56.6074H155.566Z" fill="white" fillOpacity="0.2" />
                <path d="M151.674 47.205L169.291 29.5853V0.00693565H166.941V28.6125L150.698 44.8551H83.7306L71.7013 32.8259V0.00693565H69.3514V33.7987L82.7577 47.205H151.674Z" fill="white" fillOpacity="0.2" />
                <path d="M147.776 37.8032L159.89 25.6894V0.00485678H157.54V24.7166L146.804 35.4533H87.6257L81.0999 28.93V0.00485678H78.75V29.9028L86.6528 37.8032H147.776Z" fill="white" fillOpacity="0.2" />
                <path d="M89.6292 84.9314H36.859C36.3725 83.5661 35.0825 82.5815 33.5503 82.5815C31.6045 82.5815 30.0254 84.1583 30.0254 86.1064C30.0254 88.0545 31.6045 89.6313 33.5503 89.6313C35.0825 89.6313 36.3725 88.6467 36.859 87.2813H88.6563L128.605 127.23H208.62V0.00477933H206.27V124.88H129.578L89.6292 84.9314Z" fill="white" fillOpacity="0.2" />
                <path d="M93.5223 75.5295H13.359C12.8725 74.1642 11.5824 73.1795 10.0503 73.1795C8.10455 73.1795 6.52539 74.7563 6.52539 76.7044C6.52539 78.6525 8.10455 80.2293 10.0503 80.2293C11.5824 80.2293 12.8725 79.2447 13.359 77.8794H92.5494L132.498 117.828H199.22V0.00258146H196.87V115.478H133.471L93.5223 75.5295Z" fill="white" fillOpacity="0.2" />
                <path d="M30.0254 67.3186C30.0254 69.2667 31.6045 70.8436 33.5503 70.8436C35.0872 70.8436 36.382 69.8542 36.8637 68.4819H96.444L136.393 108.431H189.821V0.00477933H187.471V106.081H137.368L97.4191 66.1319H36.8567C36.3679 64.7713 35.0801 63.7937 33.5527 63.7937C31.6046 63.7937 30.0254 65.3729 30.0254 67.3186Z" fill="white" fillOpacity="0.2" />
                <path d="M82.8008 213.239C82.8008 211.291 81.224 209.715 79.2759 209.715C78.7307 209.715 78.2255 209.848 77.7649 210.067L48.4286 180.731V114.214C49.7939 113.728 50.7785 112.437 50.7785 110.905C50.7785 108.96 49.1994 107.38 47.2537 107.38C45.3079 107.38 43.7288 108.96 43.7288 110.905C43.7288 112.437 44.7134 113.73 46.0787 114.214V181.701L76.1035 211.726C75.8826 212.187 75.751 212.694 75.751 213.237C75.751 215.183 77.3302 216.762 79.2759 216.762C81.224 216.764 82.8008 215.185 82.8008 213.239Z" fill="white" fillOpacity="0.2" />
                <path d="M12.5861 56.7452C11.2208 57.2316 10.2362 58.5217 10.2362 60.0539C10.2362 62.002 11.8153 63.5788 13.7611 63.5788C15.7092 63.5788 17.2859 62.002 17.2859 60.0539C17.2859 58.5217 16.3013 57.2293 14.936 56.7452V48.7296L2.34992 36.1411V0.00414051H0V37.114L12.5861 49.7025V56.7452Z" fill="white" fillOpacity="0.2" />
                <path d="M24.9509 42.3925C24.9509 44.3406 26.53 45.9174 28.4758 45.9174C30.4215 45.9174 32.0006 44.3406 32.0006 42.3925C32.0006 40.4468 30.4215 38.8676 28.4758 38.8676C27.9329 38.8676 27.4253 39.0016 26.9647 39.2201L19.68 31.9354V0H17.3301V32.9082L25.3034 40.8815C25.0825 41.3397 24.9509 41.8497 24.9509 42.3925Z" fill="white" fillOpacity="0.2" />
                <path d="M199.06 211.378C201.652 211.378 203.76 209.27 203.76 206.678C203.76 204.086 201.652 201.978 199.06 201.978C198.191 201.978 197.387 202.232 196.687 202.643L182.451 188.41V159.052L195.669 145.834C196.37 146.248 197.173 146.501 198.043 146.501C200.632 146.501 202.743 144.394 202.743 141.802C202.743 139.21 200.632 137.102 198.043 137.102C195.451 137.102 193.343 139.21 193.343 141.802C193.343 142.671 193.594 143.475 194.008 144.175L180.101 158.079V189.383L195.025 204.307C194.612 205.005 194.36 205.811 194.36 206.678C194.36 209.27 196.468 211.378 199.06 211.378ZM199.06 204.328C200.357 204.328 201.41 205.383 201.41 206.678C201.41 207.973 200.357 209.028 199.06 209.028C197.763 209.028 196.71 207.973 196.71 206.678C196.71 205.383 197.763 204.328 199.06 204.328ZM198.043 139.452C199.34 139.452 200.393 140.507 200.393 141.802C200.393 143.096 199.34 144.151 198.043 144.151C196.746 144.151 195.693 143.096 195.693 141.802C195.693 140.507 196.746 139.452 198.043 139.452Z" fill="white" fillOpacity="0.2" />
                <path d="M97.303 157.85V110.389L84.5594 97.6476H69.8231C69.339 96.28 68.0466 95.2977 66.5144 95.2977C64.5687 95.2977 62.9896 96.8768 62.9896 98.8226C62.9896 100.771 64.5687 102.347 66.5144 102.347C68.0466 102.347 69.339 101.365 69.8231 99.9975H83.5865L94.9531 111.362V156.877L83.9578 167.872H69.8231C69.339 166.505 68.0466 165.523 66.5144 165.523C64.5687 165.523 62.9896 167.099 62.9896 169.047C62.9896 170.993 64.5687 172.572 66.5144 172.572C68.0466 172.572 69.339 171.588 69.8231 170.222H84.9307L97.303 157.85Z" fill="white" fillOpacity="0.2" />
                <path d="M69.8217 149.077C69.3376 147.712 68.0452 146.727 66.5131 146.727C64.5673 146.727 62.9882 148.304 62.9882 150.252C62.9882 152.2 64.5673 153.777 66.5131 153.777C68.0452 153.777 69.3376 152.792 69.8217 151.427H77.1417L78.5 150.066V118.178L76.7704 116.448H69.8217C69.3376 115.083 68.0452 114.098 66.5131 114.098C64.5673 114.098 62.9882 115.675 62.9882 117.623C62.9882 119.571 64.5673 120.164 66.5131 118.798H75.7976L76.15 119.151V149.075L69.8217 149.077Z" fill="white" fillOpacity="0.2" />
                <path d="M66.5144 163.178C68.0465 163.178 69.339 162.193 69.823 160.828H81.0369L87.9033 153.964V114.285L80.6679 107.05H69.8254C69.3413 105.685 68.0488 104.7 66.5167 104.7C64.571 104.7 62.9918 106.277 62.9918 108.225C62.9918 110.173 64.571 111.75 66.5167 111.75C68.0488 111.75 69.3413 110.765 69.8254 109.4H79.695L85.5534 115.258V152.988L80.064 158.475H69.8254C69.3413 157.11 68.0488 156.126 66.5167 156.126C64.571 156.126 62.9918 157.702 62.9918 159.65C62.9918 161.599 64.5687 163.178 66.5144 163.178Z" fill="white" fillOpacity="0.2" />
                <path d="M111.373 60.0565C109.425 60.0565 107.848 61.6333 107.848 63.5814C107.848 65.5295 109.425 67.1062 111.373 67.1062C111.914 67.1062 112.424 66.9723 112.884 66.7538L125.01 78.8793H172.793C173.277 80.247 174.57 81.2292 176.102 81.2292C178.047 81.2292 179.627 79.6501 179.627 77.7044C179.627 75.7563 178.047 74.1795 176.102 74.1795C174.57 74.1795 173.279 75.1618 172.793 76.5294H125.983L114.546 65.0924C114.767 64.6341 114.898 64.1242 114.898 63.5837C114.898 61.6356 113.319 60.0565 111.373 60.0565Z" fill="white" fillOpacity="0.2" />
                <circle cx="33.6" cy="86.1" r="3.5" fill="white" opacity="0.2" />
                <circle cx="10.1" cy="76.7" r="3.5" fill="white" opacity="0.2" />
                <circle cx="33.6" cy="67.3" r="3.5" fill="white" opacity="0.2" />
                <circle cx="47.3" cy="110.9" r="3.5" fill="white" opacity="0.2" />
                <circle cx="79.3" cy="213.2" r="3.5" fill="white" opacity="0.2" />
                <circle cx="13.8" cy="60.1" r="3.5" fill="white" opacity="0.2" />
                <circle cx="28.5" cy="42.4" r="3.5" fill="white" opacity="0.2" />
                <circle cx="198" cy="141.8" r="4.5" fill="white" opacity="0.2" />
                <circle cx="199.1" cy="206.7" r="4.5" fill="white" opacity="0.2" />
                <circle cx="66.5" cy="98.8" r="3.5" fill="white" opacity="0.2" />
                <circle cx="66.5" cy="169" r="3.5" fill="white" opacity="0.2" />
                <circle cx="66.5" cy="117.6" r="3.5" fill="white" opacity="0.2" />
                <circle cx="66.5" cy="150.3" r="3.5" fill="white" opacity="0.2" />
                <circle cx="66.5" cy="108.2" r="3.5" fill="white" opacity="0.2" />
                <circle cx="66.5" cy="159.7" r="3.5" fill="white" opacity="0.2" />
                <circle cx="111.4" cy="63.6" r="3.5" fill="white" opacity="0.2" />
                <circle cx="176.1" cy="77.7" r="3.5" fill="white" opacity="0.2" />
                <path d="M61.1 0 V37.2 L78.9 56.6 H155.6 L178.7 33.5 V0" stroke="url(#cta-tl-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite reverse none running circuit-pulse" }} />
                <path d="M70.4 0 V33.3 L82.8 47.2 H151.7 L169.3 29.6 V0" stroke="url(#cta-tl-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite reverse none running circuit-pulse" }} />
                <path d="M79.8 0 V29.9 L86.7 37.8 H147.8 L159.9 25.7 V0" stroke="url(#cta-tl-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite reverse none running circuit-pulse" }} />
                <path d="M33.6 86.1 H88.7 L128.6 127.2 H208.6 V0" stroke="url(#cta-tl-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite reverse none running circuit-pulse" }} />
                <path d="M10.1 76.7 H92.5 L132.5 117.8 H199.2 V0" stroke="url(#cta-tl-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite reverse none running circuit-pulse" }} />
                <path d="M33.6 67.3 H96.4 L136.4 108.4 H189.8 V0" stroke="url(#cta-tl-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite reverse none running circuit-pulse" }} />
                <path d="M47.3 110.9 V181.7 L76.1 211.7" stroke="url(#cta-tl-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite reverse none running circuit-pulse" }} />
                <path d="M0 0 V37.1 L12.6 49.7 V60.1" stroke="url(#cta-tl-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite reverse none running circuit-pulse" }} />
                <path d="M17.3 0 V32.9 L25.3 40.9" stroke="url(#cta-tl-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite reverse none running circuit-pulse" }} />
                <path d="M198 141.8 L180.1 158.1 V189.4 L195 204.3" stroke="url(#cta-tl-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite reverse none running circuit-pulse" }} />
                <path d="M66.5 98.8 H83.6 L95 111.4 V156.9 L84 167.9 H66.5" stroke="url(#cta-tl-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite reverse none running circuit-pulse" }} />
                <path d="M66.5 117.6 H75.8 L76.2 119.2 V149.1 L66.5 150.3" stroke="url(#cta-tl-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite reverse none running circuit-pulse" }} />
                <path d="M66.5 108.2 H79.7 L85.6 115.3 V153 L80.1 158.5 H66.5" stroke="url(#cta-tl-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite reverse none running circuit-pulse" }} />
                <path d="M111.4 63.6 L125 78.9 H172.8" stroke="url(#cta-tl-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite reverse none running circuit-pulse" }} />
                <circle cx="33.6" cy="86.1" r="3.5" fill="#27B578" style={{ opacity: 0.1, animation: "5s ease-in-out 0s infinite normal none running circuit-node-glow" }} />
                <circle cx="10.1" cy="76.7" r="3.5" fill="#27B578" style={{ opacity: 0.1, animation: "5s ease-in-out 0s infinite normal none running circuit-node-glow" }} />
                <circle cx="33.6" cy="67.3" r="3.5" fill="#27B578" style={{ opacity: 0.1, animation: "5s ease-in-out 0s infinite normal none running circuit-node-glow" }} />
                <circle cx="47.3" cy="110.9" r="3.5" fill="#27B578" style={{ opacity: 0.1, animation: "5s ease-in-out 0s infinite normal none running circuit-node-glow" }} />
                <circle cx="79.3" cy="213.2" r="3.5" fill="#27B578" style={{ opacity: 0.1, animation: "5s ease-in-out 0s infinite normal none running circuit-node-glow" }} />
                <circle cx="13.8" cy="60.1" r="3.5" fill="#27B578" style={{ opacity: 0.1, animation: "5s ease-in-out 0s infinite normal none running circuit-node-glow" }} />
                <circle cx="28.5" cy="42.4" r="3.5" fill="#27B578" style={{ opacity: 0.1, animation: "5s ease-in-out 0s infinite normal none running circuit-node-glow" }} />
              </svg>
            </div>

            {/* Upper Layer: Top-Right Circuit Pattern (Desktop only) */}
            <div
              className="hidden md:block absolute w-[209px] h-[217px] pointer-events-none z-10 opacity-90"
              style={{ right: "12px", top: "-20px" }}
            >
              <svg
                width="209"
                height="217"
                viewBox="0 0 208.621 216.763"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="pointer-events-none"
              >
                <defs>
                  <linearGradient id="cta-tr-circuit-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#27B578" stopOpacity="0.25" />
                    <stop offset="40%" stopColor="#27B578" stopOpacity="0.9" />
                    <stop offset="60%" stopColor="#27B578" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#27B578" stopOpacity="0.25" />
                  </linearGradient>
                </defs>
                <path d="M155.566 56.6074L178.691 33.4817V0.00918152H176.341V32.5088L154.593 54.2575H79.8389L62.3012 36.7222V0.00918152H59.9513V37.6951L78.866 56.6074H155.566Z" fill="white" fillOpacity="0.2" />
                <path d="M151.674 47.205L169.291 29.5853V0.00693565H166.941V28.6125L150.698 44.8551H83.7306L71.7013 32.8259V0.00693565H69.3514V33.7987L82.7577 47.205H151.674Z" fill="white" fillOpacity="0.2" />
                <path d="M147.776 37.8032L159.89 25.6894V0.00485678H157.54V24.7166L146.804 35.4533H87.6257L81.0999 28.93V0.00485678H78.75V29.9028L86.6528 37.8032H147.776Z" fill="white" fillOpacity="0.2" />
                <path d="M89.6292 84.9314H36.859C36.3725 83.5661 35.0825 82.5815 33.5503 82.5815C31.6045 82.5815 30.0254 84.1583 30.0254 86.1064C30.0254 88.0545 31.6045 89.6313 33.5503 89.6313C35.0825 89.6313 36.3725 88.6467 36.859 87.2813H88.6563L128.605 127.23H208.62V0.00477933H206.27V124.88H129.578L89.6292 84.9314Z" fill="white" fillOpacity="0.2" />
                <path d="M93.5223 75.5295H13.359C12.8725 74.1642 11.5824 73.1795 10.0503 73.1795C8.10455 73.1795 6.52539 74.7563 6.52539 76.7044C6.52539 78.6525 8.10455 80.2293 10.0503 80.2293C11.5824 80.2293 12.8725 79.2447 13.359 77.8794H92.5494L132.498 117.828H199.22V0.00258146H196.87V115.478H133.471L93.5223 75.5295Z" fill="white" fillOpacity="0.2" />
                <path d="M30.0254 67.3186C30.0254 69.2667 31.6045 70.8436 33.5503 70.8436C35.0872 70.8436 36.382 69.8542 36.8637 68.4819H96.444L136.393 108.431H189.821V0.00477933H187.471V106.081H137.368L97.4191 66.1319H36.8567C36.3679 64.7713 35.0801 63.7937 33.5527 63.7937C31.6046 63.7937 30.0254 65.3729 30.0254 67.3186Z" fill="white" fillOpacity="0.2" />
                <path d="M82.8008 213.239C82.8008 211.291 81.224 209.715 79.2759 209.715C78.7307 209.715 78.2255 209.848 77.7649 210.067L48.4286 180.731V114.214C49.7939 113.728 50.7785 112.437 50.7785 110.905C50.7785 108.96 49.1994 107.38 47.2537 107.38C45.3079 107.38 43.7288 108.96 43.7288 110.905C43.7288 112.437 44.7134 113.73 46.0787 114.214V181.701L76.1035 211.726C75.8826 212.187 75.751 212.694 75.751 213.237C75.751 215.183 77.3302 216.762 79.2759 216.762C81.224 216.764 82.8008 215.185 82.8008 213.239Z" fill="white" fillOpacity="0.2" />
                <path d="M12.5861 56.7452C11.2208 57.2316 10.2362 58.5217 10.2362 60.0539C10.2362 62.002 11.8153 63.5788 13.7611 63.5788C15.7092 63.5788 17.2859 62.002 17.2859 60.0539C17.2859 58.5217 16.3013 57.2293 14.936 56.7452V48.7296L2.34992 36.1411V0.00414051H0V37.114L12.5861 49.7025V56.7452Z" fill="white" fillOpacity="0.2" />
                <path d="M24.9509 42.3925C24.9509 44.3406 26.53 45.9174 28.4758 45.9174C30.4215 45.9174 32.0006 44.3406 32.0006 42.3925C32.0006 40.4468 30.4215 38.8676 28.4758 38.8676C27.9329 38.8676 27.4253 39.0016 26.9647 39.2201L19.68 31.9354V0H17.3301V32.9082L25.3034 40.8815C25.0825 41.3397 24.9509 41.8497 24.9509 42.3925Z" fill="white" fillOpacity="0.2" />
                <path d="M199.06 211.378C201.652 211.378 203.76 209.27 203.76 206.678C203.76 204.086 201.652 201.978 199.06 201.978C198.191 201.978 197.387 202.232 196.687 202.643L182.451 188.41V159.052L195.669 145.834C196.37 146.248 197.173 146.501 198.043 146.501C200.632 146.501 202.743 144.394 202.743 141.802C202.743 139.21 200.632 137.102 198.043 137.102C195.451 137.102 193.343 139.21 193.343 141.802C193.343 142.671 193.594 143.475 194.008 144.175L180.101 158.079V189.383L195.025 204.307C194.612 205.005 194.36 205.811 194.36 206.678C194.36 209.27 196.468 211.378 199.06 211.378ZM199.06 204.328C200.357 204.328 201.41 205.383 201.41 206.678C201.41 207.973 200.357 209.028 199.06 209.028C197.763 209.028 196.71 207.973 196.71 206.678C196.71 205.383 197.763 204.328 199.06 204.328ZM198.043 139.452C199.34 139.452 200.393 140.507 200.393 141.802C200.393 143.096 199.34 144.151 198.043 144.151C196.746 144.151 195.693 143.096 195.693 141.802C195.693 140.507 196.746 139.452 198.043 139.452Z" fill="white" fillOpacity="0.2" />
                <path d="M97.303 157.85V110.389L84.5594 97.6476H69.8231C69.339 96.28 68.0466 95.2977 66.5144 95.2977C64.5687 95.2977 62.9896 96.8768 62.9896 98.8226C62.9896 100.771 64.5687 102.347 66.5144 102.347C68.0466 102.347 69.339 101.365 69.8231 99.9975H83.5865L94.9531 111.362V156.877L83.9578 167.872H69.8231C69.339 166.505 68.0466 165.523 66.5144 165.523C64.5687 165.523 62.9896 167.099 62.9896 169.047C62.9896 170.993 64.5687 172.572 66.5144 172.572C68.0466 172.572 69.339 171.588 69.8231 170.222H84.9307L97.303 157.85Z" fill="white" fillOpacity="0.2" />
                <path d="M69.8217 149.077C69.3376 147.712 68.0452 146.727 66.5131 146.727C64.5673 146.727 62.9882 148.304 62.9882 150.252C62.9882 152.2 64.5673 153.777 66.5131 153.777C68.0452 153.777 69.3376 152.792 69.8217 151.427H77.1417L78.5 150.066V118.178L76.7704 116.448H69.8217C69.3376 115.083 68.0452 114.098 66.5131 114.098C64.5673 114.098 62.9882 115.675 62.9882 117.623C62.9882 119.571 64.5673 120.164 66.5131 118.798H75.7976L76.15 119.151V149.075L69.8217 149.077Z" fill="white" fillOpacity="0.2" />
                <path d="M66.5144 163.178C68.0465 163.178 69.339 162.193 69.823 160.828H81.0369L87.9033 153.964V114.285L80.6679 107.05H69.8254C69.3413 105.685 68.0488 104.7 66.5167 104.7C64.571 104.7 62.9918 106.277 62.9918 108.225C62.9918 110.173 64.571 111.75 66.5167 111.75C68.0488 111.75 69.3413 110.765 69.8254 109.4H79.695L85.5534 115.258V152.988L80.064 158.475H69.8254C69.3413 157.11 68.0488 156.126 66.5167 156.126C64.571 156.126 62.9918 157.702 62.9918 159.65C62.9918 161.599 64.5687 163.178 66.5144 163.178Z" fill="white" fillOpacity="0.2" />
                <path d="M111.373 60.0565C109.425 60.0565 107.848 61.6333 107.848 63.5814C107.848 65.5295 109.425 67.1062 111.373 67.1062C111.914 67.1062 112.424 66.9723 112.884 66.7538L125.01 78.8793H172.793C173.277 80.247 174.57 81.2292 176.102 81.2292C178.047 81.2292 179.627 79.6501 179.627 77.7044C179.627 75.7563 178.047 74.1795 176.102 74.1795C174.57 74.1795 173.279 75.1618 172.793 76.5294H125.983L114.546 65.0924C114.767 64.6341 114.898 64.1242 114.898 63.5837C114.898 61.6356 113.319 60.0565 111.373 60.0565Z" fill="white" fillOpacity="0.2" />
                <circle cx="33.6" cy="86.1" r="3.5" fill="white" opacity="0.2" />
                <circle cx="10.1" cy="76.7" r="3.5" fill="white" opacity="0.2" />
                <circle cx="33.6" cy="67.3" r="3.5" fill="white" opacity="0.2" />
                <circle cx="47.3" cy="110.9" r="3.5" fill="white" opacity="0.2" />
                <circle cx="79.3" cy="213.2" r="3.5" fill="white" opacity="0.2" />
                <circle cx="13.8" cy="60.1" r="3.5" fill="white" opacity="0.2" />
                <circle cx="28.5" cy="42.4" r="3.5" fill="white" opacity="0.2" />
                <circle cx="198" cy="141.8" r="4.5" fill="white" opacity="0.2" />
                <circle cx="199.1" cy="206.7" r="4.5" fill="white" opacity="0.2" />
                <circle cx="66.5" cy="98.8" r="3.5" fill="white" opacity="0.2" />
                <circle cx="66.5" cy="169" r="3.5" fill="white" opacity="0.2" />
                <circle cx="66.5" cy="117.6" r="3.5" fill="white" opacity="0.2" />
                <circle cx="66.5" cy="150.3" r="3.5" fill="white" opacity="0.2" />
                <circle cx="66.5" cy="108.2" r="3.5" fill="white" opacity="0.2" />
                <circle cx="66.5" cy="159.7" r="3.5" fill="white" opacity="0.2" />
                <circle cx="111.4" cy="63.6" r="3.5" fill="white" opacity="0.2" />
                <circle cx="176.1" cy="77.7" r="3.5" fill="white" opacity="0.2" />
                <path d="M61.1 0 V37.2 L78.9 56.6 H155.6 L178.7 33.5 V0" stroke="url(#cta-tr-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite reverse none running circuit-pulse" }} />
                <path d="M70.4 0 V33.3 L82.8 47.2 H151.7 L169.3 29.6 V0" stroke="url(#cta-tr-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite reverse none running circuit-pulse" }} />
                <path d="M79.8 0 V29.9 L86.7 37.8 H147.8 L159.9 25.7 V0" stroke="url(#cta-tr-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite reverse none running circuit-pulse" }} />
                <path d="M33.6 86.1 H88.7 L128.6 127.2 H208.6 V0" stroke="url(#cta-tr-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite reverse none running circuit-pulse" }} />
                <path d="M10.1 76.7 H92.5 L132.5 117.8 H199.2 V0" stroke="url(#cta-tr-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite reverse none running circuit-pulse" }} />
                <path d="M33.6 67.3 H96.4 L136.4 108.4 H189.8 V0" stroke="url(#cta-tr-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite reverse none running circuit-pulse" }} />
                <path d="M47.3 110.9 V181.7 L76.1 211.7" stroke="url(#cta-tr-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite reverse none running circuit-pulse" }} />
                <path d="M0 0 V37.1 L12.6 49.7 V60.1" stroke="url(#cta-tr-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite reverse none running circuit-pulse" }} />
                <path d="M17.3 0 V32.9 L25.3 40.9" stroke="url(#cta-tr-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite reverse none running circuit-pulse" }} />
                <path d="M198 141.8 L180.1 158.1 V189.4 L195 204.3" stroke="url(#cta-tr-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite reverse none running circuit-pulse" }} />
                <path d="M66.5 98.8 H83.6 L95 111.4 V156.9 L84 167.9 H66.5" stroke="url(#cta-tr-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite reverse none running circuit-pulse" }} />
                <path d="M66.5 117.6 H75.8 L76.2 119.2 V149.1 L66.5 150.3" stroke="url(#cta-tr-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite reverse none running circuit-pulse" }} />
                <path d="M66.5 108.2 H79.7 L85.6 115.3 V153 L80.1 158.5 H66.5" stroke="url(#cta-tr-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite reverse none running circuit-pulse" }} />
                <path d="M111.4 63.6 L125 78.9 H172.8" stroke="url(#cta-tr-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite reverse none running circuit-pulse" }} />
                <circle cx="33.6" cy="86.1" r="3.5" fill="#27B578" style={{ opacity: 0.1, animation: "5s ease-in-out 0s infinite normal none running circuit-node-glow" }} />
                <circle cx="10.1" cy="76.7" r="3.5" fill="#27B578" style={{ opacity: 0.1, animation: "5s ease-in-out 0s infinite normal none running circuit-node-glow" }} />
                <circle cx="33.6" cy="67.3" r="3.5" fill="#27B578" style={{ opacity: 0.1, animation: "5s ease-in-out 0s infinite normal none running circuit-node-glow" }} />
                <circle cx="47.3" cy="110.9" r="3.5" fill="#27B578" style={{ opacity: 0.1, animation: "5s ease-in-out 0s infinite normal none running circuit-node-glow" }} />
                <circle cx="79.3" cy="213.2" r="3.5" fill="#27B578" style={{ opacity: 0.1, animation: "5s ease-in-out 0s infinite normal none running circuit-node-glow" }} />
                <circle cx="13.8" cy="60.1" r="3.5" fill="#27B578" style={{ opacity: 0.1, animation: "5s ease-in-out 0s infinite normal none running circuit-node-glow" }} />
                <circle cx="28.5" cy="42.4" r="3.5" fill="#27B578" style={{ opacity: 0.1, animation: "5s ease-in-out 0s infinite normal none running circuit-node-glow" }} />
              </svg>
            </div>

            {/* START TODAY Badge */}
            <div
              className="absolute left-1/2 -translate-x-1/2 top-[32px] sm:top-[47.09px] flex items-center gap-2 text-[#26A36E] font-[family-name:var(--font-geist-mono)] font-semibold text-[13px] sm:text-[14px] leading-[16.8px] tracking-[0.02em] whitespace-nowrap z-20"
            >
              <svg width="24" height="8" viewBox="0 0 24 8" fill="none" className="shrink-0">
                <circle cx="3.5" cy="4" r="2" stroke="#26A36E" strokeWidth="1.2" fill="none" />
                <line x1="5.5" y1="4" x2="18.5" y2="4" stroke="#26A36E" strokeWidth="1.2" />
                <circle cx="20.5" cy="4" r="2" stroke="#26A36E" strokeWidth="1.2" fill="none" />
              </svg>
              <span className="h-[16.8px] flex items-center whitespace-nowrap shrink-0">
                START TODAY
              </span>
              <svg width="24" height="8" viewBox="0 0 24 8" fill="none" className="shrink-0">
                <circle cx="3.5" cy="4" r="2" stroke="#26A36E" strokeWidth="1.2" fill="none" />
                <line x1="5.5" y1="4" x2="18.5" y2="4" stroke="#26A36E" strokeWidth="1.2" />
                <circle cx="20.5" cy="4" r="2" stroke="#26A36E" strokeWidth="1.2" fill="none" />
              </svg>
            </div>

            {/* Title Heading */}
            <h2 className="absolute left-1/2 -translate-x-1/2 top-[62px] sm:top-[72.66px] max-w-[290px] sm:max-w-[343.64px] w-full font-serif text-white text-[28px] sm:text-[34px] md:text-[39px] leading-[38px] sm:leading-[48px] md:leading-[54.6px] tracking-[-0.01em] font-semibold text-center z-20 px-2">
              Turn conversations into conversions
            </h2>

            {/* Button & Surrounding Circuit SVG Container */}
            <div
              className="absolute left-1/2 -translate-x-1/2 top-[242.71px] -translate-y-1/2 w-[450px] h-[275px] flex items-center justify-center z-20 pointer-events-none"
              style={{ marginTop: "63.2px" }}
            >
              {/* Button Circuit SVG Pattern Across & Around Button */}
              <svg
                width="450"
                height="275"
                viewBox="0 0 450.238 275"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="pointer-events-none absolute inset-0 w-full h-full z-10 opacity-90 scale-[0.78] sm:scale-100 origin-center"
              >
                <defs>
                  <linearGradient id="btn-circuit-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#27B578" stopOpacity="0.15" />
                    <stop offset="40%" stopColor="#27B578" stopOpacity="0.9" />
                    <stop offset="60%" stopColor="#27B578" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#27B578" stopOpacity="0.15" />
                  </linearGradient>
                </defs>
                <path d="M229.525 86C231.197 86 232.551 84.6437 232.551 82.9725C232.551 81.6565 231.706 80.5484 230.534 80.1306V38.1974L241.06 27.6676V5.85931C242.212 5.4294 243.035 4.32938 243.035 3.02956C243.035 1.35837 241.681 0.00203287 240.009 0.00203287C238.338 0.00203287 236.982 1.35837 236.982 3.02956C236.982 4.36167 237.848 5.47986 239.042 5.88555V26.832L228.516 37.3618V80.1306C227.344 80.5484 226.498 81.6565 226.498 82.9725C226.498 84.6437 227.852 86 229.525 86Z" fill="white" fillOpacity="0.2" />
                <path d="M288.083 5.84717V23.4532L260.806 50.7414V80.1306C259.634 80.5484 258.788 81.6565 258.788 82.9725C258.788 84.6437 260.142 86 261.815 86C263.486 86 264.842 84.6437 264.842 82.9725C264.842 81.6565 263.996 80.5484 262.824 80.1306V51.577L290.101 24.2868V5.89362C291.314 5.50004 292.195 4.37175 292.195 3.02753C292.195 1.35633 290.841 0 289.169 0C287.496 0 286.142 1.35633 286.142 3.02753C286.142 4.31726 286.949 5.40919 288.083 5.84717Z" fill="white" fillOpacity="0.2" />
                <path d="M280.008 11.9243V20.1068L252.73 47.3949V59.947C251.558 60.3648 250.713 61.4729 250.713 62.7889C250.713 64.4601 252.067 65.8164 253.739 65.8164C255.412 65.8164 256.766 64.4601 256.766 62.7889C256.766 61.4729 255.92 60.3648 254.748 59.947V48.2305L282.025 20.9424V11.9243C283.198 11.5086 284.043 10.3985 284.043 9.08252C284.043 7.41132 282.689 6.05499 281.016 6.05499C279.344 6.05499 277.99 7.41132 277.99 9.08252C277.99 10.3985 278.835 11.5086 280.008 11.9243Z" fill="white" fillOpacity="0.2" />
                <path d="M271.94 5.91579V16.7624L244.663 44.0506V80.1306C243.49 80.5484 242.645 81.6565 242.645 82.9725C242.645 84.6437 243.999 86 245.672 86C247.344 86 248.698 84.6437 248.698 82.9725C248.698 81.6565 247.853 80.5484 246.68 80.1306V44.8862L273.957 17.598V5.82697C275.057 5.37284 275.832 4.29102 275.832 3.02753C275.832 1.35633 274.478 0 272.805 0C271.135 0 269.779 1.35633 269.779 3.02753C269.779 4.39799 270.693 5.53836 271.94 5.91579Z" fill="white" fillOpacity="0.2" />
                <path d="M258.528 11.8982V18.7585L236.588 40.7061V59.9471C235.415 60.3649 234.57 61.4729 234.57 62.7889C234.57 64.4601 235.924 65.8164 237.596 65.8164C239.269 65.8164 240.623 64.4601 240.623 62.7889C240.623 61.4729 239.778 60.3649 238.605 59.9471V41.5417L260.546 19.5941V11.9567C261.768 11.5692 262.66 10.4368 262.66 9.08455C262.66 7.41335 261.306 6.05702 259.634 6.05702C257.963 6.05702 256.607 7.41335 256.607 9.08455C256.607 10.3662 257.404 11.4541 258.528 11.8982Z" fill="white" fillOpacity="0.2" />
                <path d="M214.671 86C212.998 86 211.644 84.6437 211.644 82.9725C211.644 81.6565 212.489 80.5484 213.662 80.1306V38.1974L203.135 27.6676V5.85931C201.983 5.4294 201.16 4.32938 201.16 3.02956C201.16 1.35837 202.514 0.00203287 204.187 0.00203287C205.857 0.00203287 207.213 1.35837 207.213 3.02956C207.213 4.36167 206.348 5.47986 205.153 5.88555V26.832L215.679 37.3618V80.1306C216.852 80.5484 217.697 81.6565 217.697 82.9725C217.697 84.6437 216.343 86 214.671 86Z" fill="white" fillOpacity="0.2" />
                <path d="M156.112 5.84717V23.4532L183.389 50.7414V80.1306C184.561 80.5484 185.407 81.6565 185.407 82.9725C185.407 84.6437 184.053 86 182.38 86C180.71 86 179.354 84.6437 179.354 82.9725C179.354 81.6565 180.199 80.5484 181.371 80.1306V51.577L154.094 24.2868V5.89362C152.882 5.50004 152 4.37175 152 3.02753C152 1.35633 153.354 0 155.027 0C156.699 0 158.053 1.35633 158.053 3.02753C158.053 4.31726 157.246 5.40919 156.112 5.84717Z" fill="white" fillOpacity="0.2" />
                <path d="M164.188 11.9243V20.1068L191.465 47.3949V59.947C192.637 60.3648 193.483 61.4729 193.483 62.7889C193.483 64.4601 192.129 65.8164 190.456 65.8164C188.783 65.8164 187.429 64.4601 187.429 62.7889C187.429 61.4729 188.275 60.3648 189.447 59.947V48.2305L162.17 20.9424V11.9243C160.998 11.5086 160.152 10.3985 160.152 9.08252C160.152 7.41132 161.506 6.05499 163.179 6.05499C164.852 6.05499 166.205 7.41132 166.205 9.08252C166.205 10.3985 165.36 11.5086 164.188 11.9243Z" fill="white" fillOpacity="0.2" />
                <path d="M172.256 5.91579V16.7624L199.533 44.0506V80.1306C200.705 80.5484 201.55 81.6565 201.55 82.9725C201.55 84.6437 200.196 86 198.524 86C196.851 86 195.497 84.6437 195.497 82.9725C195.497 81.6565 196.343 80.5484 197.515 80.1306V44.8862L170.238 17.598V5.82697C169.138 5.37284 168.363 4.29102 168.363 3.02753C168.363 1.35633 169.717 0 171.39 0C173.061 0 174.416 1.35633 174.416 3.02753C174.416 4.39799 173.502 5.53836 172.256 5.91579Z" fill="white" fillOpacity="0.2" />
                <path d="M185.667 11.8982V18.7585L207.608 40.7061V59.9471C208.78 60.3649 209.625 61.4729 209.625 62.7889C209.625 64.4601 208.272 65.8164 206.599 65.8164C204.926 65.8164 203.572 64.4601 203.572 62.7889C203.572 61.4729 204.418 60.3649 205.59 59.9471V41.5417L183.65 19.5941V11.9567C182.427 11.5692 181.535 10.4368 181.535 9.08455C181.535 7.41335 182.889 6.05702 184.562 6.05702C186.232 6.05702 187.588 7.41335 187.588 9.08455C187.588 10.3662 186.791 11.4541 185.667 11.8982Z" fill="white" fillOpacity="0.2" />
                <path d="M75.8327 136.117H36.2281C35.8251 134.98 34.7491 134.16 33.4736 134.16C31.8537 134.16 30.5391 135.473 30.5391 137.095C30.5391 138.715 31.8537 140.029 33.4736 140.029C34.7491 140.029 35.8251 139.21 36.2281 138.073H75.0227L99.4772 162.527H145.238V160.571H100.287L75.8327 136.117Z" fill="white" fillOpacity="0.2" />
                <path d="M72.591 143.941H36.2281C35.8251 142.804 34.7491 141.984 33.4736 141.984C31.8537 141.984 30.5391 143.297 30.5391 144.919C30.5391 146.541 31.8537 147.853 33.4736 147.853C34.7491 147.853 35.8251 147.034 36.2281 145.897H71.781L96.2355 170.352H145.238V168.395H97.0454L72.591 143.941Z" fill="white" fillOpacity="0.2" />
                <path d="M69.3493 151.767H36.2281C35.8251 150.63 34.7491 149.811 33.4736 149.811C31.8537 149.811 30.5391 151.123 30.5391 152.745C30.5391 154.367 31.8537 155.68 33.4736 155.68C34.7491 155.68 35.8251 154.86 36.2281 153.723H68.5394L92.9939 178.178H145.238V176.221H93.8038L69.3493 151.767Z" fill="white" fillOpacity="0.2" />
                <path d="M75.4159 101.758H36.2281C35.8251 100.622 34.7491 99.8018 33.4736 99.8018C31.8537 99.8018 30.5391 101.117 30.5391 102.736C30.5391 104.358 31.8537 105.671 33.4736 105.671C34.7491 105.671 35.8251 104.853 36.2281 103.715H76.2259L102.459 77.4817H145.238V75.5254H101.651L75.4159 101.758Z" fill="white" fillOpacity="0.2" />
                <path d="M78.6581 109.583H11.7369V74.6891C12.8736 74.2841 13.6933 73.2101 13.6933 71.9345C13.6933 70.3127 12.3786 69 10.7588 69C9.13889 69 7.82422 70.3127 7.82422 71.9345C7.82422 73.2101 8.64393 74.2861 9.78058 74.6891V111.539H79.468L105.701 85.3063H145.239V83.3499H104.891L78.6581 109.583Z" fill="white" fillOpacity="0.2" />
                <path d="M81.899 117.411H5.68907C5.2841 116.274 4.21008 115.454 2.93454 115.454C1.31467 115.454 0 116.767 0 118.389C0 120.011 1.31467 121.323 2.93454 121.323C4.21008 121.323 5.2841 120.504 5.68907 119.367H82.7089L108.944 93.1341H145.24V91.1777H108.134L81.899 117.411Z" fill="white" fillOpacity="0.2" />
                <path d="M85.139 125.235H36.2281C35.8251 124.098 34.7491 123.278 33.4736 123.278C31.8537 123.278 30.5391 124.591 30.5391 126.213C30.5391 127.835 31.8537 129.147 33.4736 129.147C34.7491 129.147 35.8251 128.328 36.2281 127.191H85.949L112.182 100.958H145.238V99.002H111.372L85.139 125.235Z" fill="white" fillOpacity="0.2" />
                <path d="M124.696 113.676C123.076 113.676 121.762 114.988 121.762 116.61C121.762 118.232 123.076 119.545 124.696 119.545C125.972 119.545 127.046 118.725 127.451 117.588H145.238V115.632H127.451C127.046 114.495 125.972 113.676 124.696 113.676Z" fill="white" fillOpacity="0.2" />
                <path d="M112.958 121.5C111.338 121.5 110.023 122.813 110.023 124.435C110.023 126.056 111.338 127.369 112.958 127.369C114.234 127.369 115.308 126.549 115.713 125.413H145.238V123.456H115.713C115.308 122.32 114.234 121.5 112.958 121.5Z" fill="white" fillOpacity="0.2" />
                <path d="M112.958 129.326C111.338 129.326 110.023 130.639 110.023 132.261C110.023 133.883 111.338 135.195 112.958 135.195C114.234 135.195 115.308 134.376 115.713 133.239H145.238V131.283H115.713C115.308 130.146 114.234 129.326 112.958 129.326Z" fill="white" fillOpacity="0.2" />
                <path d="M124.696 142.475C123.076 142.475 121.762 143.787 121.762 145.409C121.762 147.031 123.076 148.344 124.696 148.344C125.972 148.344 127.046 147.524 127.451 146.387H145.238V144.431H127.451C127.046 143.294 125.972 142.475 124.696 142.475Z" fill="white" fillOpacity="0.2" />
                <path d="M105.13 150.299C103.51 150.299 102.195 151.612 102.195 153.233C102.195 154.853 103.51 156.168 105.13 156.168C106.405 156.168 107.479 155.348 107.884 154.212H145.235V152.255H107.884C107.479 151.117 106.405 150.299 105.13 150.299Z" fill="white" fillOpacity="0.2" />
                <path d="M374.406 134.117H414.01C414.413 132.98 415.489 132.16 416.765 132.16C418.385 132.16 419.699 133.473 419.699 135.095C419.699 136.715 418.385 138.029 416.765 138.029C415.489 138.029 414.413 137.21 414.01 136.073H375.216L350.761 160.527H305V158.571H349.951L374.406 134.117Z" fill="white" fillOpacity="0.2" />
                <path d="M377.647 141.941H414.01C414.413 140.804 415.489 139.984 416.765 139.984C418.385 139.984 419.699 141.297 419.699 142.919C419.699 144.541 418.385 145.853 416.765 145.853C415.489 145.853 414.413 145.034 414.01 143.897H378.457L354.003 168.352H305V166.395H353.193L377.647 141.941Z" fill="white" fillOpacity="0.2" />
                <path d="M380.889 149.767H414.01C414.413 148.63 415.489 147.811 416.765 147.811C418.385 147.811 419.699 149.123 419.699 150.745C419.699 152.367 418.385 153.68 416.765 153.68C415.489 153.68 414.413 152.86 414.01 151.723H381.699L357.244 176.178H305V174.221H356.434L380.889 149.767Z" fill="white" fillOpacity="0.2" />
                <path d="M374.822 99.7582H414.01C414.413 98.6215 415.489 97.8018 416.765 97.8018C418.385 97.8018 419.699 99.1165 419.699 100.736C419.699 102.358 418.385 103.671 416.765 103.671C415.489 103.671 414.413 102.853 414.01 101.715H374.012L347.78 75.4817H305V73.5254H348.588L374.822 99.7582Z" fill="white" fillOpacity="0.2" />
                <path d="M371.58 107.583H438.501V72.6891C437.365 72.2841 436.545 71.2101 436.545 69.9345C436.545 68.3127 437.86 67 439.48 67C441.099 67 442.414 68.3127 442.414 69.9345C442.414 71.2101 441.594 72.2861 440.458 72.6891V109.539H370.77L344.537 83.3063H304.999V81.3499H345.347L371.58 107.583Z" fill="white" fillOpacity="0.2" />
                <path d="M368.339 115.411H444.549C444.954 114.274 446.028 113.454 447.304 113.454C448.924 113.454 450.238 114.767 450.238 116.389C450.238 118.011 448.924 119.323 447.304 119.323C446.028 119.323 444.954 118.504 444.549 117.367H367.529L341.295 91.1341H304.998V89.1777H342.105L368.339 115.411Z" fill="white" fillOpacity="0.2" />
                <path d="M365.099 123.235H414.01C414.413 122.098 415.489 121.278 416.765 121.278C418.385 121.278 419.699 122.591 419.699 124.213C419.699 125.835 418.385 127.147 416.765 127.147C415.489 127.147 414.413 126.328 414.01 125.191H364.289L338.057 98.9583H305V97.002H338.866L365.099 123.235Z" fill="white" fillOpacity="0.2" />
                <path d="M325.542 111.676C327.162 111.676 328.477 112.988 328.477 114.61C328.477 116.232 327.162 117.545 325.542 117.545C324.266 117.545 323.192 116.725 322.787 115.588H305V113.632H322.787C323.192 112.495 324.266 111.676 325.542 111.676Z" fill="white" fillOpacity="0.2" />
                <path d="M337.28 119.5C338.9 119.5 340.215 120.813 340.215 122.435C340.215 124.056 338.9 125.369 337.28 125.369C336.005 125.369 334.931 124.549 334.526 123.413H305V121.456H334.526C334.931 120.32 336.005 119.5 337.28 119.5Z" fill="white" fillOpacity="0.2" />
                <path d="M337.28 127.326C338.9 127.326 340.215 128.639 340.215 130.261C340.215 131.883 338.9 133.195 337.28 133.195C336.005 133.195 349.31 132.376 334.526 131.239H305V129.283H334.526C334.931 128.146 336.005 127.326 337.28 127.326Z" fill="white" fillOpacity="0.2" />
                <path d="M325.542 140.475C327.162 140.475 328.477 141.787 328.477 143.409C328.477 145.031 327.162 146.344 325.542 146.344C324.266 146.344 323.192 145.524 322.787 144.387H305V142.431H322.787C323.192 141.294 324.266 140.475 325.542 140.475Z" fill="white" fillOpacity="0.2" />
                <path d="M345.108 148.299C346.728 148.299 348.043 149.612 348.043 151.233C348.043 152.853 346.728 154.168 345.108 154.168C343.833 154.168 342.759 153.348 342.354 152.212H305.003V150.255H342.354C342.759 149.117 343.833 148.299 345.108 148.299Z" fill="white" fillOpacity="0.2" />
                <path d="M321.007 214.649C322.262 214.649 323.318 213.843 323.716 212.725H367.302L381.642 227.063C381.463 227.44 381.353 227.856 381.353 228.3C381.353 229.895 382.644 231.186 384.239 231.186C385.832 231.186 387.125 229.895 387.125 228.3C387.125 226.707 385.832 225.414 384.239 225.414C383.793 225.414 383.379 225.524 383.002 225.703L368.098 210.801H323.716C323.318 209.681 322.262 208.877 321.007 208.877C319.412 208.877 318.121 210.168 318.121 211.763C318.121 213.356 319.414 214.649 321.007 214.649Z" fill="white" fillOpacity="0.2" />
                <path d="M129.118 212.772C127.863 212.772 126.807 211.966 126.409 210.848H82.8232L68.4833 225.186C68.6622 225.563 68.7719 225.979 68.7719 226.423C68.7719 228.018 67.4809 229.309 65.8858 229.309C64.2927 229.309 62.9998 228.018 62.9998 226.423C62.9998 224.83 64.2927 223.537 65.8858 223.537C66.3322 223.537 66.7459 223.647 67.123 223.826L82.0267 208.924H126.409C126.807 207.804 127.863 207 129.118 207C130.713 207 132.004 208.291 132.004 209.886C132.004 211.479 130.711 212.772 129.118 212.772Z" fill="white" fillOpacity="0.2" />
                <path d="M308.201 228.823C309.794 228.823 311.087 227.532 311.087 225.937C311.087 224.342 309.794 223.051 308.201 223.051C306.946 223.051 305.888 223.857 305.492 224.975H268.865V199H266.941V226.899H305.492C305.888 228.017 306.944 228.823 308.201 228.823Z" fill="white" fillOpacity="0.2" />
                <path d="M327.442 236.519C329.035 236.519 330.328 235.228 330.328 233.633C330.328 232.038 329.035 230.747 327.442 230.747C326.188 230.747 325.13 231.553 324.733 232.671H261.17V199H259.246V234.595H327.442Z" fill="white" fillOpacity="0.2" />
                <path d="M323.591 244.215C325.184 244.215 326.477 242.924 326.477 241.329C326.477 239.734 325.184 238.443 323.591 238.443C322.337 238.443 321.278 239.249 320.882 240.367H253.471V199H251.547V242.291H323.591Z" fill="white" fillOpacity="0.2" />
                <path d="M346.684 251.911C348.278 251.911 349.571 250.62 349.571 249.025C349.571 247.43 348.278 246.139 346.684 246.139C345.43 246.139 344.372 246.945 343.975 248.063H245.78V199H243.855V249.987H346.684Z" fill="white" fillOpacity="0.2" />
                <path d="M338.985 259.608C340.578 259.608 341.871 258.317 341.871 256.722C341.871 255.126 340.578 253.835 338.985 253.835C337.731 253.835 336.673 254.642 336.276 255.759H238.08V199H236.156V257.684H338.985Z" fill="white" fillOpacity="0.2" />
                <path d="M346.682 267.304C348.275 267.304 349.568 266.013 349.568 264.418C349.568 262.823 348.275 261.532 346.682 261.532C345.428 261.532 344.37 262.338 343.973 263.456H230.385V199H228.461V265.38H346.682Z" fill="white" fillOpacity="0.2" />
                <path d="M354.379 275C355.972 275 357.265 273.709 357.265 272.114C357.265 270.519 355.972 269.228 354.379 269.228C353.125 269.228 352.067 270.034 351.67 271.152H222.69V199H220.766V273.076H354.379Z" fill="white" fillOpacity="0.2" />
                <path d="M52.0267 234.66C50.4317 235.953 49.1406 235.953 49.1406 237.546C49.1406 239.141 50.4317 240.433 52.0267 240.433C53.3062 240.433 54.3779 239.596 54.7569 238.443H184.249V199H182.325V236.519H54.7146Z" fill="white" fillOpacity="0.2" />
                <path d="M51.0658 249.947C49.4707 249.947 48.1797 251.238 48.1797 252.833C48.1797 254.426 49.4707 255.719 51.0658 255.719C52.3049 255.719 53.3535 254.932 53.7633 253.835H199.643V199H197.719V251.911H53.7883Z" fill="white" fillOpacity="0.2" />
                <path d="M51.0658 265.297C49.4707 265.297 48.1797 266.588 48.1797 268.183C48.1797 269.776 49.4707 271.069 51.0658 271.069C52.2895 271.069 53.3304 270.303 53.7498 269.228H215.035V199H213.111V267.304H53.7998Z" fill="white" fillOpacity="0.2" />
                <path d="M12.5853 257.664C10.9903 257.664 9.69922 258.955 9.69922 260.55C9.69922 262.143 10.9903 263.436 12.5853 263.436C13.8321 263.436 14.8865 262.64 15.2886 261.532H207.338V199H205.414V259.608H15.2982Z" fill="white" fillOpacity="0.2" />
                <path d="M12.5853 242.231C10.9903 242.231 9.69922 243.523 9.69922 245.118C9.69922 246.711 10.9903 248.004 12.5853 248.004C13.8186 248.004 14.8634 247.228 15.2751 246.139H191.945V199H190.021V244.215H15.3136Z" fill="white" fillOpacity="0.2" />
                <path d="M240 3 V26.8 L228.5 37.4 V83" stroke="url(#btn-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite normal none running circuit-pulse" }} />
                <path d="M289.2 3 V24.3 L261.8 51.6 V83" stroke="url(#btn-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite normal none running circuit-pulse" }} />
                <path d="M281 9.1 V20.9 L253.7 48.2 V62.8" stroke="url(#btn-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite normal none running circuit-pulse" }} />
                <path d="M272.8 3 V17.6 L245.7 44.9 V83" stroke="url(#btn-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite normal none running circuit-pulse" }} />
                <path d="M259.6 9.1 V19.6 L237.6 41.5 V62.8" stroke="url(#btn-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite normal none running circuit-pulse" }} />
                <path d="M204.2 3 V26.8 L215.7 37.4 V83" stroke="url(#btn-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite normal none running circuit-pulse" }} />
                <path d="M155 3 V24.3 L182.4 51.6 V83" stroke="url(#btn-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite normal none running circuit-pulse" }} />
                <path d="M163.2 9.1 V20.9 L190.5 48.2 V62.8" stroke="url(#btn-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite normal none running circuit-pulse" }} />
                <path d="M171.4 3 V17.6 L198.5 44.9 V83" stroke="url(#btn-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite normal none running circuit-pulse" }} />
                <path d="M184.6 9.1 V19.6 L206.6 41.5 V62.8" stroke="url(#btn-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite normal none running circuit-pulse" }} />
                <path d="M33.5 137.1 H75 L99.5 161.5 H145.2" stroke="url(#btn-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite normal none running circuit-pulse" }} />
                <path d="M33.5 144.9 H71.8 L96.2 169.4 H145.2" stroke="url(#btn-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite normal none running circuit-pulse" }} />
                <path d="M33.5 152.7 H68.5 L93 177.2 H145.2" stroke="url(#btn-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite normal none running circuit-pulse" }} />
                <path d="M33.5 102.7 H76.2 L102.5 76.5 H145.2" stroke="url(#btn-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite normal none running circuit-pulse" }} />
                <path d="M10.8 71.9 V111.5 H79.5 L105.7 84.3 H145.2" stroke="url(#btn-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite normal none running circuit-pulse" }} />
                <path d="M2.9 118.4 H82.7 L108.9 92.2 H145.2" stroke="url(#btn-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite normal none running circuit-pulse" }} />
                <path d="M33.5 126.2 H85.9 L112.2 100 H145.2" stroke="url(#btn-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite normal none running circuit-pulse" }} />
                <path d="M124.7 116.6 H145.2" stroke="url(#btn-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite normal none running circuit-pulse" }} />
                <path d="M113 124.4 H145.2" stroke="url(#btn-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite normal none running circuit-pulse" }} />
                <path d="M113 132.3 H145.2" stroke="url(#btn-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite normal none running circuit-pulse" }} />
                <path d="M124.7 145.4 H145.2" stroke="url(#btn-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite normal none running circuit-pulse" }} />
                <path d="M105.1 153.2 H145.2" stroke="url(#btn-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite normal none running circuit-pulse" }} />
                <path d="M416.8 135.1 H375.2 L350.8 159.5 H305" stroke="url(#btn-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite normal none running circuit-pulse" }} />
                <path d="M416.8 142.9 H378.5 L354 167.4 H305" stroke="url(#btn-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite normal none running circuit-pulse" }} />
                <path d="M416.8 150.7 H381.7 L357.2 175.2 H305" stroke="url(#btn-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite normal none running circuit-pulse" }} />
                <path d="M416.8 100.7 H374 L347.8 74.5 H305" stroke="url(#btn-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite normal none running circuit-pulse" }} />
                <path d="M439.5 69.9 V109.5 H370.8 L344.5 82.3 H305" stroke="url(#btn-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite normal none running circuit-pulse" }} />
                <path d="M447.3 116.4 H367.5 L341.3 90.2 H305" stroke="url(#btn-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite normal none running circuit-pulse" }} />
                <path d="M416.8 124.2 H364.3 L338.1 98 H305" stroke="url(#btn-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite normal none running circuit-pulse" }} />
                <path d="M325.5 114.6 H305" stroke="url(#btn-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite normal none running circuit-pulse" }} />
                <path d="M337.3 122.4 H305" stroke="url(#btn-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite normal none running circuit-pulse" }} />
                <path d="M337.3 130.3 H305" stroke="url(#btn-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite normal none running circuit-pulse" }} />
                <path d="M325.5 143.4 H305" stroke="url(#btn-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite normal none running circuit-pulse" }} />
                <path d="M345.1 151.2 H305" stroke="url(#btn-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite normal none running circuit-pulse" }} />
                <path d="M321 211.8 H367.3 L383 228.3" stroke="url(#btn-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite normal none running circuit-pulse" }} />
                <path d="M129.1 209.9 H82.8 L65.9 226.4" stroke="url(#btn-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite normal none running circuit-pulse" }} />
                <path d="M267.9 199 V225.9" stroke="url(#btn-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite normal none running circuit-pulse" }} />
                <path d="M260.2 199 V233.6" stroke="url(#btn-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite normal none running circuit-pulse" }} />
                <path d="M252.5 199 V241.3" stroke="url(#btn-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite normal none running circuit-pulse" }} />
                <path d="M244.8 199 V249" stroke="url(#btn-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite normal none running circuit-pulse" }} />
                <path d="M237.1 199 V256.7" stroke="url(#btn-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite normal none running circuit-pulse" }} />
                <path d="M229.4 199 V264.4" stroke="url(#btn-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite normal none running circuit-pulse" }} />
                <path d="M221.7 199 V272.1" stroke="url(#btn-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite normal none running circuit-pulse" }} />
                <path d="M183.3 199 V237.5" stroke="url(#btn-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite normal none running circuit-pulse" }} />
                <path d="M198.7 199 V252.8" stroke="url(#btn-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite normal none running circuit-pulse" }} />
                <path d="M214.1 199 V268.3" stroke="url(#btn-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite normal none running circuit-pulse" }} />
                <path d="M206.4 199 V260.6" stroke="url(#btn-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite normal none running circuit-pulse" }} />
                <path d="M191 199 V245.1" stroke="url(#btn-circuit-grad)" strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite normal none running circuit-pulse" }} />
              </svg>

              {/* Book a demo Button - Centered inside shared 450x275 container */}
              <button
                className="pointer-events-auto relative w-[160px] h-[160px] rounded-[6px] border border-[#27B578]/20 flex items-center justify-center text-white font-sans text-[14px] sm:text-[15px] font-medium transition-all duration-200 hover:scale-[1.02] cursor-pointer shadow-md z-20 scale-[0.78] sm:scale-100 origin-center"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(12, 40, 24, 0.95) 0%, rgba(8, 28, 16, 0.98) 50%, rgba(12, 40, 24, 0.95) 100%)",
                }}
              >
                Book a demo
              </button>
            </div>
          </div>
        </div>

        {/* Right Vertical Side Column (W: 120px) */}
        <div className="hidden xl:flex w-[120px] shrink-0 border-l border-[#144A30] bg-[#072F1D]">
          <div className="w-[16px] bg-[#072F1D] shrink-0" />
          <div className="flex-1 relative overflow-hidden bg-[#072F1D]" />
        </div>
      </div>
    </section>
  );
}

export default StartTodayBanner;
