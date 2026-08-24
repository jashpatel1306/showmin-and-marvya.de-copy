interface CtaBottomCircuitProps {
  side: "left" | "right";
}

export function CtaBottomCircuit({ side }: CtaBottomCircuitProps) {
  const gradId = `cta-bl-circuit-grad-${side}`;

  return (
    <div
      className="absolute w-[423px] h-[276px] overflow-hidden pointer-events-none z-10 opacity-90"
      style={{
        left: side === "left" ? 0 : "auto",
        right: side === "right" ? 0 : "auto",
        bottom: "36px",
        transform: side === "left" ? "scaleX(-1)" : "none",
      }}
    >
      <svg
        width="423"
        height="276"
        viewBox="0 0 423.002 275.313"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="pointer-events-none"
      >
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#27B578" stopOpacity="0.15" />
            <stop offset="40%" stopColor="#27B578" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#27B578" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#27B578" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        <path d="M255.095 201.85V32.8884L224.319 2.11202H69.5011C69.0639 0.884937 67.9023 0 66.5274 0C64.7765 0 63.3594 1.41717 63.3594 3.16803C63.3594 4.9189 64.7765 6.33606 66.5274 6.33606C67.9023 6.33606 69.0639 5.45112 69.5011 4.22404H223.444L252.983 33.7628V202.724L278.946 228.687H423V226.575H279.82L255.095 201.85Z" fill="white" fillOpacity="0.2" />
        <path d="M246.648 205.351V36.3872L220.818 10.5593H6.14176C5.70458 9.33218 4.54296 8.44725 3.16803 8.44725C1.41717 8.44725 0 9.86652 0 11.6153C0 13.3661 1.41717 14.7833 3.16803 14.7833C4.54296 14.7833 5.70458 13.8984 6.14176 12.6713H219.944L244.536 37.2615V206.225L275.448 237.137H423.002V235.025H276.322L246.648 205.351Z" fill="white" fillOpacity="0.2" />
        <path d="M238.199 208.85V39.886L217.319 19.0066H69.5011C69.0639 17.7795 67.9023 16.8945 66.5274 16.8945C64.7765 16.8945 63.3594 18.3138 63.3594 20.0626C63.3594 21.8134 64.7765 23.2306 66.5274 23.2306C67.9023 23.2306 69.0639 22.3457 69.5011 21.1186H216.445L236.087 40.7604V209.724L271.947 245.584H423V243.472H272.823L238.199 208.85Z" fill="white" fillOpacity="0.2" />
        <path d="M229.752 212.348V43.3846L213.821 27.4558H6.14176C5.70458 26.2287 4.54296 25.3438 3.16803 25.3438C1.41717 25.3438 0 26.763 0 28.5118C0 30.2626 1.41717 31.6798 3.16803 31.6798C4.54296 31.6798 5.70458 30.7949 6.14176 29.5678H212.947L227.64 44.259V213.223L268.448 254.029H423.002V251.917H269.323L229.752 212.348Z" fill="white" fillOpacity="0.2" />
        <path d="M221.303 215.849V46.8834L210.322 35.903H69.5011C69.0639 34.676 67.9023 33.791 66.5274 33.791C64.7765 33.791 63.3594 35.2103 63.3594 36.959C63.3594 38.7099 64.7765 40.1271 66.5274 40.1271C67.9023 40.1271 69.0639 39.2421 69.5011 38.0151H209.448L219.191 47.7578V216.724L264.95 262.478H423V260.366H265.824L221.303 215.849Z" fill="white" fillOpacity="0.2" />
        <path d="M212.856 219.35V50.3842L206.824 44.3523H6.14176C5.70458 43.1252 4.54296 42.2402 3.16803 42.2402C1.41717 42.2402 0 43.6595 0 45.4083C0 47.1591 1.41717 48.5763 3.16803 48.5763C4.54296 48.5763 5.70458 47.6914 6.14176 46.4643H205.947L210.744 51.2586V220.227L261.453 270.93H423.002V268.818H262.328L212.856 219.35Z" fill="white" fillOpacity="0.2" />
        <path d="M291.733 132.632H270.794C270.357 131.404 269.197 130.52 267.82 130.52C266.072 130.52 264.652 131.937 264.652 133.688C264.652 135.436 266.072 136.856 267.82 136.856C269.197 136.856 270.357 135.971 270.794 134.744H290.858L332.129 176.017H413.001V173.905H333.004L291.733 132.632Z" fill="white" fillOpacity="0.2" />
        <path d="M133.148 211.172L186.891 264.914C186.694 265.326 186.574 265.784 186.574 266.274C186.574 268.023 187.991 269.442 189.742 269.442C191.491 269.442 192.91 268.023 192.91 266.274C192.91 264.524 191.491 263.106 189.742 263.106C189.254 263.106 188.796 263.225 188.384 263.421L135.26 210.297V73.2104H186.77C187.206 74.4375 188.367 75.3224 189.744 75.3224C191.493 75.3224 192.912 73.9031 192.912 72.1544C192.912 70.4035 191.493 68.9863 189.744 68.9863C188.367 68.9863 187.206 69.8692 186.77 71.0983H133.148V211.172Z" fill="white" fillOpacity="0.2" />
        <path d="M171.978 98.5541C172.413 99.7812 173.575 100.666 174.952 100.666C176.701 100.666 178.12 99.249 178.12 97.4981C178.12 95.7472 176.701 94.3301 174.952 94.3301C173.575 94.3301 172.413 95.215 171.978 96.4421H158.484V200.675L177.478 219.668C177.279 220.082 177.161 220.538 177.161 221.026C177.161 222.777 178.58 224.194 180.329 224.194C182.078 224.194 183.497 222.777 183.497 221.026C183.497 219.275 182.078 217.858 180.329 217.858C179.841 217.858 179.385 217.978 178.973 218.175L160.599 199.8V98.5541H171.978Z" fill="white" fillOpacity="0.2" />
        <path d="M181.666 231.137C181.178 231.137 180.722 231.257 180.308 231.454L152.153 203.298V90.1069H186.767C187.202 91.3339 188.363 92.2189 189.74 92.2189C191.489 92.2189 192.909 90.8017 192.909 89.0508C192.909 87.3 191.489 85.8828 189.74 85.8828C188.363 85.8828 187.202 86.7677 186.767 87.9948H150.043V204.173L178.817 232.947C178.619 233.361 178.5 233.817 178.5 234.305C178.5 236.056 179.92 237.473 181.668 237.473C183.417 237.473 184.836 236.056 184.836 234.305C184.834 232.556 183.415 231.137 181.666 231.137Z" fill="white" fillOpacity="0.2" />
        <path d="M181.297 249.044C183.046 249.044 184.465 247.627 184.465 245.878C184.465 244.129 183.046 242.71 181.297 242.71C180.809 242.71 180.353 242.83 179.941 243.027L143.712 206.797V81.6576H171.99C172.425 82.8847 173.586 83.7697 174.963 83.7697C176.712 83.7697 178.131 82.3525 178.131 80.6016C178.131 78.8508 176.712 77.4336 174.963 77.4336C173.586 77.4336 172.425 78.3185 171.99 79.5456H141.598V207.671L178.444 244.52C178.248 244.932 178.127 245.39 178.127 245.878C178.129 247.627 179.546 249.044 181.297 249.044Z" fill="white" fillOpacity="0.2" />
        <path d="M198.279 231.137C198.279 232.888 199.699 234.305 201.447 234.305C203.196 234.305 204.615 232.888 204.615 231.137C204.615 229.76 203.731 228.6 202.503 228.163V200.502H190.904L174.3 183.897V138.719L188.38 124.638C188.794 124.835 189.251 124.955 189.738 124.955C191.487 124.955 192.906 123.538 192.906 121.787C192.906 120.036 191.487 118.619 189.738 118.619C187.988 118.619 186.57 120.036 186.57 121.787C186.57 122.275 186.691 122.733 186.887 123.145L172.188 137.845V184.772L190.03 202.614H200.391V228.163C199.162 228.6 198.279 229.762 198.279 231.137Z" fill="white" fillOpacity="0.2" />
        <path d="M187.91 52.2891C186.159 52.2891 184.742 53.7083 184.742 55.4571C184.742 57.208 186.159 58.6251 187.91 58.6251C188.396 58.6251 188.854 58.5047 189.266 58.3083L200.386 69.4281V165.928C199.159 166.363 198.274 167.525 198.274 168.902C198.274 170.651 199.693 172.07 201.442 172.07C203.191 172.07 204.61 170.651 204.61 168.902C204.61 167.525 203.725 166.363 202.498 165.928V68.5537L190.759 56.8151C190.958 56.4011 191.076 55.945 191.076 55.4571C191.078 53.7083 189.659 52.2891 187.91 52.2891Z" fill="white" fillOpacity="0.2" />
        <path d="M127.242 222.508C127.242 220.757 125.823 219.34 124.074 219.34C122.326 219.34 120.906 220.757 120.906 222.508C120.906 223.885 121.791 225.047 123.018 225.482V241.96L153.201 272.142H168.769C169.204 273.37 170.365 274.254 171.743 274.254C173.491 274.254 174.911 272.835 174.911 271.086C174.911 269.338 173.491 267.918 171.743 267.918C170.365 267.918 169.204 268.803 168.769 270.03H154.075L125.13 241.085V225.482C126.357 225.047 127.242 223.885 127.242 222.508Z" fill="white" fillOpacity="0.2" />
        <path d="M217.307 241.525C217.307 239.195 215.411 237.301 213.083 237.301C210.754 237.301 208.859 239.195 208.859 241.525C208.859 243.487 210.211 245.128 212.027 245.599V272.145H230.962C231.435 273.961 233.074 275.313 235.036 275.313C237.363 275.313 239.26 273.416 239.26 271.089C239.26 268.759 237.363 266.865 235.036 266.865C233.074 266.865 231.435 268.217 230.962 270.033H214.139V245.599C215.958 245.128 217.307 243.489 217.307 241.525Z" fill="white" fillOpacity="0.2" />
        <path d="M269.027 174.62C267.279 174.62 265.859 176.038 265.859 177.788C265.859 179.539 267.279 180.956 269.027 180.956C269.515 180.956 269.971 180.836 270.385 180.64L283.843 194.1H303.396V174.255C304.623 173.818 305.508 172.658 305.508 171.281C305.508 169.53 304.091 168.113 302.34 168.113C300.592 168.113 299.172 169.53 299.172 171.281C299.172 172.658 300.057 173.82 301.284 174.255V191.988H284.718L271.879 179.149C272.075 178.735 272.195 178.278 272.195 177.788C272.195 176.038 270.778 174.62 269.027 174.62Z" fill="white" fillOpacity="0.2" />
        <path d="M276.316 87.3516C274.568 87.3516 273.148 88.7687 273.148 90.5196C273.148 92.2683 274.568 93.6876 276.316 93.6876C276.804 93.6876 277.261 93.5672 277.675 93.3708L300.168 115.864C299.971 116.278 299.853 116.734 299.853 117.222C299.853 118.973 301.27 120.39 303.021 120.39C304.77 120.39 306.189 118.973 306.189 117.222C306.189 115.473 304.77 114.054 303.021 114.054C302.531 114.054 302.077 114.174 301.663 114.371L279.168 91.8776C279.366 91.4636 279.484 91.0075 279.484 90.5196C279.484 88.7687 278.065 87.3516 276.316 87.3516Z" fill="white" fillOpacity="0.2" />
        <circle cx="66.5" cy="3.2" r="3.2" fill="white" opacity="0.2" />
        <circle cx="3.2" cy="11.6" r="3.2" fill="white" opacity="0.2" />
        <circle cx="66.5" cy="20.1" r="3.2" fill="white" opacity="0.2" />
        <circle cx="3.2" cy="28.5" r="3.2" fill="white" opacity="0.2" />
        <circle cx="66.5" cy="37" r="3.2" fill="white" opacity="0.2" />
        <circle cx="3.2" cy="45.4" r="3.2" fill="white" opacity="0.2" />
        <circle cx="267.8" cy="133.7" r="3.2" fill="white" opacity="0.2" />
        <circle cx="189.7" cy="72.2" r="3.2" fill="white" opacity="0.2" />
        <circle cx="189.7" cy="266.3" r="3.2" fill="white" opacity="0.2" />
        <circle cx="175" cy="97.5" r="3.2" fill="white" opacity="0.2" />
        <circle cx="180.3" cy="221" r="3.2" fill="white" opacity="0.2" />
        <circle cx="189.7" cy="89.1" r="3.2" fill="white" opacity="0.2" />
        <circle cx="181.7" cy="234.3" r="3.2" fill="white" opacity="0.2" />
        <circle cx="175" cy="80.6" r="3.2" fill="white" opacity="0.2" />
        <circle cx="181.3" cy="245.9" r="3.2" fill="white" opacity="0.2" />
        <circle cx="189.7" cy="121.8" r="3.2" fill="white" opacity="0.2" />
        <circle cx="201.4" cy="231.1" r="3.2" fill="white" opacity="0.2" />
        <circle cx="187.9" cy="55.5" r="3.2" fill="white" opacity="0.2" />
        <circle cx="201.4" cy="168.9" r="3.2" fill="white" opacity="0.2" />
        <circle cx="124.1" cy="222.5" r="3.2" fill="white" opacity="0.2" />
        <circle cx="171.7" cy="271.1" r="3.2" fill="white" opacity="0.2" />
        <circle cx="213.1" cy="241.5" r="4" fill="white" opacity="0.2" />
        <circle cx="235" cy="271.1" r="4" fill="white" opacity="0.2" />
        <circle cx="269" cy="177.8" r="3.2" fill="white" opacity="0.2" />
        <circle cx="302.3" cy="171.3" r="3.2" fill="white" opacity="0.2" />
        <circle cx="276.3" cy="90.5" r="3.2" fill="white" opacity="0.2" />
        <circle cx="303" cy="117.2" r="3.2" fill="white" opacity="0.2" />
        <path d="M66.5 3.2 H223.4 L253 33.8 V202.7 L279 228.7 H423" stroke={`url(#${gradId})`} strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite reverse none running circuit-pulse" }} />
        <path d="M3.2 11.6 H220 L244.5 37.3 V206.2 L275.4 237.1 H423" stroke={`url(#${gradId})`} strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite reverse none running circuit-pulse" }} />
        <path d="M66.5 20.1 H216.4 L236.1 40.8 V209.7 L272 245.6 H423" stroke={`url(#${gradId})`} strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite reverse none running circuit-pulse" }} />
        <path d="M3.2 28.5 H213 L227.6 44.3 V213.2 L268.4 254 H423" stroke={`url(#${gradId})`} strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite reverse none running circuit-pulse" }} />
        <path d="M66.5 37 H209.4 L219.2 47.8 V216.7 L265 262.5 H423" stroke={`url(#${gradId})`} strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite reverse none running circuit-pulse" }} />
        <path d="M3.2 45.4 H206 L210.7 51.3 V220.2 L261.5 270.9 H423" stroke={`url(#${gradId})`} strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite reverse none running circuit-pulse" }} />
        <path d="M267.8 133.7 H290.9 L332.1 176 H413" stroke={`url(#${gradId})`} strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite reverse none running circuit-pulse" }} />
        <path d="M189.7 72.2 H134.2 V210.3 L187.6 264.9" stroke={`url(#${gradId})`} strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite reverse none running circuit-pulse" }} />
        <path d="M175 97.5 H160.5 V199.8 L178 219.7" stroke={`url(#${gradId})`} strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite reverse none running circuit-pulse" }} />
        <path d="M189.7 89.1 H151.1 V203.3 L179.6 232.9" stroke={`url(#${gradId})`} strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite reverse none running circuit-pulse" }} />
        <path d="M175 80.6 H142.6 V207.7 L178.4 244.5" stroke={`url(#${gradId})`} strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite reverse none running circuit-pulse" }} />
        <path d="M189.7 121.8 L172.2 137.8 V184.8 L190 202.6 H201.4 V231.1" stroke={`url(#${gradId})`} strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite reverse none running circuit-pulse" }} />
        <path d="M187.9 55.5 L201.4 69.4 V168.9" stroke={`url(#${gradId})`} strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite reverse none running circuit-pulse" }} />
        <path d="M124.1 222.5 V241.1 L153.2 272.1 H169.8" stroke={`url(#${gradId})`} strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite reverse none running circuit-pulse" }} />
        <path d="M213.1 241.5 V272.1 H231" stroke={`url(#${gradId})`} strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite reverse none running circuit-pulse" }} />
        <path d="M269 177.8 L284.7 194.1 H303.4 V171.3" stroke={`url(#${gradId})`} strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite reverse none running circuit-pulse" }} />
        <path d="M276.3 90.5 L303 117.2" stroke={`url(#${gradId})`} strokeWidth="2" fill="none" pathLength={1} strokeDasharray="0.1 0.9" style={{ strokeDashoffset: 1, willChange: "stroke-dashoffset", animation: "5s linear 0s infinite reverse none running circuit-pulse" }} />
        <circle cx="66.5" cy="3.2" r="3.2" fill="#27B578" style={{ opacity: 0.1, animation: "5s ease-in-out 0s infinite normal none running circuit-node-glow" }} />
        <circle cx="3.2" cy="11.6" r="3.2" fill="#27B578" style={{ opacity: 0.1, animation: "5s ease-in-out 0s infinite normal none running circuit-node-glow" }} />
        <circle cx="66.5" cy="20.1" r="3.2" fill="#27B578" style={{ opacity: 0.1, animation: "5s ease-in-out 0s infinite normal none running circuit-node-glow" }} />
        <circle cx="3.2" cy="28.5" r="3.2" fill="#27B578" style={{ opacity: 0.1, animation: "5s ease-in-out 0s infinite normal none running circuit-node-glow" }} />
        <circle cx="66.5" cy="37" r="3.2" fill="#27B578" style={{ opacity: 0.1, animation: "5s ease-in-out 0s infinite normal none running circuit-node-glow" }} />
        <circle cx="3.2" cy="45.4" r="3.2" fill="#27B578" style={{ opacity: 0.1, animation: "5s ease-in-out 0s infinite normal none running circuit-node-glow" }} />
        <circle cx="267.8" cy="133.7" r="3.2" fill="#27B578" style={{ opacity: 0.1, animation: "5s ease-in-out 0s infinite normal none running circuit-node-glow" }} />
        <circle cx="189.7" cy="72.2" r="3.2" fill="#27B578" style={{ opacity: 0.1, animation: "5s ease-in-out 0s infinite normal none running circuit-node-glow" }} />
        <circle cx="189.7" cy="266.3" r="3.2" fill="#27B578" style={{ opacity: 0.1, animation: "5s ease-in-out 0s infinite normal none running circuit-node-glow" }} />
        <circle cx="175" cy="97.5" r="3.2" fill="#27B578" style={{ opacity: 0.1, animation: "5s ease-in-out 0s infinite normal none running circuit-node-glow" }} />
        <circle cx="180.3" cy="221" r="3.2" fill="#27B578" style={{ opacity: 0.1, animation: "5s ease-in-out 0s infinite normal none running circuit-node-glow" }} />
        <circle cx="189.7" cy="89.1" r="3.2" fill="#27B578" style={{ opacity: 0.1, animation: "5s ease-in-out 0s infinite normal none running circuit-node-glow" }} />
        <circle cx="181.7" cy="234.3" r="3.2" fill="#27B578" style={{ opacity: 0.1, animation: "5s ease-in-out 0s infinite normal none running circuit-node-glow" }} />
        <circle cx="175" cy="80.6" r="3.2" fill="#27B578" style={{ opacity: 0.1, animation: "5s ease-in-out 0s infinite normal none running circuit-node-glow" }} />
        <circle cx="181.3" cy="245.9" r="3.2" fill="#27B578" style={{ opacity: 0.1, animation: "5s ease-in-out 0s infinite normal none running circuit-node-glow" }} />
        <circle cx="189.7" cy="121.8" r="3.2" fill="#27B578" style={{ opacity: 0.1, animation: "5s ease-in-out 0s infinite normal none running circuit-node-glow" }} />
        <circle cx="201.4" cy="231.1" r="3.2" fill="#27B578" style={{ opacity: 0.1, animation: "5s ease-in-out 0s infinite normal none running circuit-node-glow" }} />
        <circle cx="187.9" cy="55.5" r="3.2" fill="#27B578" style={{ opacity: 0.1, animation: "5s ease-in-out 0s infinite normal none running circuit-node-glow" }} />
        <circle cx="201.4" cy="168.9" r="3.2" fill="#27B578" style={{ opacity: 0.1, animation: "5s ease-in-out 0s infinite normal none running circuit-node-glow" }} />
        <circle cx="124.1" cy="222.5" r="3.2" fill="#27B578" style={{ opacity: 0.1, animation: "5s ease-in-out 0s infinite normal none running circuit-node-glow" }} />
        <circle cx="171.7" cy="271.1" r="3.2" fill="#27B578" style={{ opacity: 0.1, animation: "5s ease-in-out 0s infinite normal none running circuit-node-glow" }} />
        <circle cx="213.1" cy="241.5" r="4" fill="#27B578" style={{ opacity: 0.1, animation: "5s ease-in-out 0s infinite normal none running circuit-node-glow" }} />
        <circle cx="235" cy="271.1" r="4" fill="#27B578" style={{ opacity: 0.1, animation: "5s ease-in-out 0s infinite normal none running circuit-node-glow" }} />
        <circle cx="269" cy="177.8" r="3.2" fill="#27B578" style={{ opacity: 0.1, animation: "5s ease-in-out 0s infinite normal none running circuit-node-glow" }} />
        <circle cx="302.3" cy="171.3" r="3.2" fill="#27B578" style={{ opacity: 0.1, animation: "5s ease-in-out 0s infinite normal none running circuit-node-glow" }} />
        <circle cx="276.3" cy="90.5" r="3.2" fill="#27B578" style={{ opacity: 0.1, animation: "5s ease-in-out 0s infinite normal none running circuit-node-glow" }} />
        <circle cx="303" cy="117.2" r="3.2" fill="#27B578" style={{ opacity: 0.1, animation: "5s ease-in-out 0s infinite normal none running circuit-node-glow" }} />
      </svg>
    </div>
  );
}

export default CtaBottomCircuit;
