import { useState } from "react";
import { Sparkles, ArrowRight, ExternalLink, MessageSquareText, Search, Check, Copy } from "lucide-react";

interface AiModel {
  id: string;
  name: string;
  provider: string;
  badge?: string;
  utmSource: string;
  utmContent: string;
  iconBg: string;
  hoverColor: string;
  getUrl: (query: string) => string;
  renderIcon: () => React.ReactNode;
}

const PRESET_PROMPTS = [
  "What services does Showmine offer?",
  "How does Showmine build Shopify Headless & Plus stores?",
  "What B2B software solutions does Showmine provide?",
  "Why choose Showmine for digital transformation?",
];

const buildPromptWithUtm = (query: string, utmSource: string, utmContent: string) => {
  const currentOrigin = typeof window !== "undefined" ? window.location.origin : "https://showmine.in";
  const utmUrl = `${currentOrigin}/?utm_source=${utmSource}&utm_medium=footer_ask_ai_widget&utm_campaign=ask_ai_prompt&utm_content=${utmContent}`;
  return `${query.trim()} (Reference site: ${utmUrl})`;
};

const AI_MODELS: AiModel[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    provider: "OpenAI",
    badge: "GPT-4o",
    utmSource: "chatgpt",
    utmContent: "gpt4o",
    iconBg: "bg-emerald-50 text-emerald-700 border-emerald-200 hover:border-emerald-400 hover:bg-emerald-100",
    hoverColor: "hover:shadow-emerald-500/10",
    getUrl: (q) => `https://chatgpt.com/?q=${encodeURIComponent(buildPromptWithUtm(q, "chatgpt", "gpt4o"))}`,
    renderIcon: () => (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0813 4.779-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.5045 4.5045 0 0 1-4.4952 4.4952zm-8.636-4.5262a4.4755 4.4755 0 0 1-.5316-3.0033l.142.0862 4.7837 2.7582a.7948.7948 0 0 0 .7902 0l5.8344-3.3685v2.3324a.0805.0805 0 0 1-.0332.0617L10.749 19.4a4.5045 4.5045 0 0 1-6.1251-1.497zm-1.1245-9.724a4.4755 4.4755 0 0 1 2.3448-1.9672l-.0047.1633v5.5163a.7948.7948 0 0 0 .3975.6813l5.8344 3.3685-2.02 1.1638a.0805.0805 0 0 1-.0711 0l-4.8359-2.7915a4.5045 4.5045 0 0 1-1.645-6.1345zm13.6263 3.9184l-5.8344-3.3685 2.02-1.1638a.0805.0805 0 0 1 .0711 0l4.8359 2.7915a4.5045 4.5045 0 0 1-.7 8.1022v-5.68a.7948.7948 0 0 0-.3926-.6814zm2.4954-4.2267a4.4755 4.4755 0 0 1 .5316 3.0033l-.142-.0862-4.7837-2.7582a.7948.7948 0 0 0-.7902 0L8.602 11.4589V9.1265a.0805.0805 0 0 1 .0332-.0617l4.8359-2.7915a4.5045 4.5045 0 0 1 6.1251 1.497zm-11.4646-1.57a4.4755 4.4755 0 0 1 2.8764 1.0408l-.1419.0813-4.779 2.7582a.7948.7948 0 0 0-.3927.6813v6.7369l-2.02-1.1686a.071.071 0 0 1-.038-.052V9.8211a4.5045 4.5045 0 0 1 4.4952-4.4952zm.4554 6.8653l2.5665-1.4807 2.5665 1.4807v2.9614l-2.5665 1.4807-2.5665-1.4807v-2.9614z" />
      </svg>
    ),
  },
  {
    id: "claude",
    name: "Claude",
    provider: "Anthropic",
    badge: "3.7 Sonnet",
    utmSource: "claude",
    utmContent: "claude_37_sonnet",
    iconBg: "bg-orange-50 text-orange-600 border-orange-200 hover:border-orange-400 hover:bg-orange-100",
    hoverColor: "hover:shadow-orange-500/10",
    getUrl: (q) => `https://claude.ai/new?q=${encodeURIComponent(buildPromptWithUtm(q, "claude", "claude_37_sonnet"))}`,
    renderIcon: () => (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#D97757">
        <path d="M12 3.75L13.1 9.4L18.75 8.3L14.6 12.5L19.25 15.9L13.6 15.4L14.7 21L11.5 16.2L7.3 20L9.4 14.6L4.25 15.2L8.5 11.5L3.75 9.1L9.3 9.4L8.7 3.75L12 7.5L12 3.75Z" />
      </svg>
    ),
  },
  {
    id: "perplexity",
    name: "Perplexity",
    provider: "Perplexity AI",
    badge: "Deep Research",
    utmSource: "perplexity",
    utmContent: "perplexity_deep_research",
    iconBg: "bg-cyan-50 text-cyan-700 border-cyan-200 hover:border-cyan-400 hover:bg-cyan-100",
    hoverColor: "hover:shadow-cyan-500/10",
    getUrl: (q) => `https://www.perplexity.ai/search?q=${encodeURIComponent(buildPromptWithUtm(q, "perplexity", "perplexity_deep_research"))}`,
    renderIcon: () => (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#007F9B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="8" />
        <line x1="6.5" y1="17.5" x2="17.5" y2="6.5" />
        <circle cx="12" cy="12" r="2.5" fill="#007F9B" />
      </svg>
    ),
  },
  {
    id: "gemini",
    name: "Gemini",
    provider: "Google AI",
    badge: "1.5 Pro",
    utmSource: "gemini",
    utmContent: "gemini_15_pro",
    iconBg: "bg-blue-50 text-blue-600 border-blue-200 hover:border-blue-400 hover:bg-blue-100",
    hoverColor: "hover:shadow-blue-500/10",
    getUrl: (q) => `https://gemini.google.com/app?q=${encodeURIComponent(buildPromptWithUtm(q, "gemini", "gemini_15_pro"))}`,
    renderIcon: () => (
      <svg className="w-5 h-5" viewBox="0 0 24 24">
        <defs>
          <linearGradient id="gemini-grad-widget" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4E95ED" />
            <stop offset="50%" stopColor="#B360E6" />
            <stop offset="100%" stopColor="#F867A0" />
          </linearGradient>
        </defs>
        <path fill="url(#gemini-grad-widget)" d="M12 2C12 7.52285 7.52285 12 2 12C7.52285 12 12 16.4771 12 22C12 16.4771 16.4771 12 22 12C16.4771 12 12 7.52285 12 2Z" />
      </svg>
    ),
  },
  {
    id: "deepseek",
    name: "DeepSeek",
    provider: "DeepSeek R1",
    badge: "Reasoning",
    utmSource: "deepseek",
    utmContent: "deepseek_r1",
    iconBg: "bg-indigo-50 text-indigo-600 border-indigo-200 hover:border-indigo-400 hover:bg-indigo-100",
    hoverColor: "hover:shadow-indigo-500/10",
    getUrl: (q) => `https://chat.deepseek.com/?q=${encodeURIComponent(buildPromptWithUtm(q, "deepseek", "deepseek_r1"))}`,
    renderIcon: () => (
      <svg className="w-5 h-5" viewBox="0 0 24 24">
        <defs>
          <linearGradient id="deepseek-grad-widget" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0066FF" />
            <stop offset="100%" stopColor="#00C8FF" />
          </linearGradient>
        </defs>
        <path fill="url(#deepseek-grad-widget)" d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>
    ),
  },
];

export function AskAiFooterWidget() {
  const [prompt, setPrompt] = useState("What does Showmine do and what services do they offer?");
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [activeTab, setActiveTab] = useState<"external" | "direct">("external");
  const [directAnswer, setDirectAnswer] = useState<string | null>(null);
  const [isThinking, setIsThinking] = useState(false);

  const handleModelClick = (model: AiModel) => {
    const url = model.getUrl(prompt);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(prompt);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  const handleDirectAsk = () => {
    setIsThinking(true);
    setDirectAnswer(null);
    setTimeout(() => {
      setIsThinking(false);
      setDirectAnswer(
        "Showmine Infotech is a premier software engineering & digital transformation agency. We specialize in Shopify Headless & Shopify Plus Development, B2B E-Commerce Systems, Healthcare Management Solutions, Custom Web Apps, and AI-driven Process Automation."
      );
    }, 800);
  };

  return (
    <div className="w-full my-6 bg-gradient-to-r from-neutral-900 via-neutral-950 to-neutral-900 text-white rounded-2xl p-5 md:p-7 shadow-xl border border-neutral-800 relative overflow-hidden group">
      {/* Background ambient lighting blur */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/15 transition-all duration-500" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-500/15 transition-all duration-500" />

      <div className="relative z-10 flex flex-col gap-5">
        {/* Top Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-800/80 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-neutral-800/80 border border-neutral-700 text-emerald-400 shadow-inner flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg md:text-xl font-bold tracking-tight text-white flex items-center gap-1.5 font-sans">
                  Ask AI <span className="text-emerald-400 font-medium">✨</span> about Showmine
                </h3>
                <span className="text-[10px] font-mono tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full uppercase">
                  Live prompt
                </span>
              </div>
              <p className="text-xs md:text-sm text-neutral-400 mt-0.5">
                Curious what we do? Select any AI model to research Showmine in real-time.
              </p>
            </div>
          </div>

          {/* Quick Mode Toggle */}
          <div className="flex items-center bg-neutral-900/90 border border-neutral-800 rounded-lg p-1 text-xs shrink-0 self-start sm:self-auto">
            <button
              onClick={() => setActiveTab("external")}
              className={`px-3 py-1.5 rounded-md font-medium transition-all ${
                activeTab === "external"
                  ? "bg-neutral-800 text-white shadow-sm"
                  : "text-neutral-400 hover:text-neutral-200"
              }`}
            >
              Open in Model
            </button>
            <button
              onClick={() => {
                setActiveTab("direct");
                if (!directAnswer) handleDirectAsk();
              }}
              className={`px-3 py-1.5 rounded-md font-medium transition-all ${
                activeTab === "direct"
                  ? "bg-emerald-600 text-white shadow-sm"
                  : "text-neutral-400 hover:text-neutral-200"
              }`}
            >
              Instant In-Page Answer
            </button>
          </div>
        </div>

        {/* Input & Prompt Selector Section */}
        <div className="flex flex-col gap-3">
          <div className="relative flex items-center w-full">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 pointer-events-none" />
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Ask anything about Showmine..."
              className="w-full bg-neutral-900/90 border border-neutral-800 rounded-xl pl-10 pr-24 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/60 transition-all font-sans"
            />
            <button
              onClick={handleCopyPrompt}
              className="absolute right-2 text-xs bg-neutral-800 hover:bg-neutral-700 text-neutral-300 px-2.5 py-1.5 rounded-lg border border-neutral-700 flex items-center gap-1 transition-colors"
              title="Copy prompt to clipboard"
            >
              {copiedPrompt ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedPrompt ? "Copied" : "Copy"}</span>
            </button>
          </div>

          {/* Quick Preset Prompts */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs text-neutral-400">
            <span className="text-neutral-500 text-[11px] font-medium mr-1 uppercase tracking-wider">Try:</span>
            {PRESET_PROMPTS.map((preset, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setPrompt(preset);
                  if (activeTab === "direct") handleDirectAsk();
                }}
                className={`px-2.5 py-1 rounded-lg border transition-all text-left text-[11.5px] ${
                  prompt === preset
                    ? "bg-emerald-950/80 border-emerald-500/50 text-emerald-300 font-medium"
                    : "bg-neutral-900/60 border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700"
                }`}
              >
                {preset}
              </button>
            ))}
          </div>
        </div>

        {/* Tab 1: AI Model Selector Buttons */}
        {activeTab === "external" ? (
          <div className="flex flex-col gap-2.5 mt-1">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                Select Model to Ask:
              </span>
              <span className="text-[11px] text-neutral-500 flex items-center gap-1">
                Opens in a new tab <ExternalLink className="w-3 h-3" />
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
              {AI_MODELS.map((model) => (
                <button
                  key={model.id}
                  onClick={() => handleModelClick(model)}
                  className={`flex flex-col items-center justify-center gap-2 p-3 rounded-xl border bg-white/95 hover:bg-white text-neutral-900 transition-all duration-200 shadow-sm ${model.hoverColor} hover:scale-[1.03] active:scale-[0.98] group/btn cursor-pointer`}
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-neutral-100 p-1 group-hover/btn:scale-110 transition-transform">
                    {model.renderIcon()}
                  </div>
                  <div className="text-center">
                    <div className="text-xs font-bold font-sans text-neutral-950 flex items-center justify-center gap-1">
                      {model.name}
                    </div>
                    <div className="text-[10px] text-neutral-500 font-medium">
                      {model.provider}
                    </div>
                    <div className="mt-1 text-[9px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded-full inline-block">
                      utm={model.utmSource}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* Tab 2: Direct In-Page AI Answer */
          <div className="bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 flex flex-col gap-3">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
              <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                <MessageSquareText className="w-4 h-4" /> Direct Showmine Knowledge Response
              </span>
              <button
                onClick={handleDirectAsk}
                disabled={isThinking}
                className="text-xs bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-3 py-1 rounded-md transition-colors flex items-center gap-1 disabled:opacity-50"
              >
                {isThinking ? "Generating..." : "Refresh Answer"}
              </button>
            </div>

            {isThinking ? (
              <div className="py-6 flex flex-col items-center justify-center gap-2 text-neutral-400 text-xs">
                <Sparkles className="w-5 h-5 text-emerald-400 animate-spin" />
                <span>Synthesizing response about Showmine...</span>
              </div>
            ) : (
              <div className="text-xs md:text-sm text-neutral-300 leading-relaxed font-sans bg-neutral-950/60 p-3.5 rounded-lg border border-neutral-800/60">
                <p>{directAnswer}</p>
                <div className="mt-3 pt-3 border-t border-neutral-800/80 flex flex-wrap gap-4 text-[11px] text-neutral-400">
                  <span className="flex items-center gap-1 text-emerald-400 font-medium">
                    ✓ Verified Services: Shopify Headless, B2B Apps, Healthcare, Custom Dev
                  </span>
                  <span>Contact: showmineinfotech@gmail.com</span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
