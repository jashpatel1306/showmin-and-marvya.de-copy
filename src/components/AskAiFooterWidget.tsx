import { Sparkles, ExternalLink } from "lucide-react";

interface AiModel {
  id: string;
  name: string;
  provider: string;
  utmSource: string;
  utmContent: string;
  getUrl: (query: string) => string;
  renderIcon: () => React.ReactNode;
}

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
    utmSource: "chatgpt",
    utmContent: "gpt4o",
    getUrl: (q) => `https://chatgpt.com/?q=${encodeURIComponent(buildPromptWithUtm(q, "chatgpt", "gpt4o"))}`,
    renderIcon: () => (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0813 4.779-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.5045 4.5045 0 0 1-4.4952 4.4952zm-8.636-4.5262a4.4755 4.4755 0 0 1-.5316-3.0033l.142.0862 4.7837 2.7582a.7948.7948 0 0 0 .7902 0l5.8344-3.3685v2.3324a.0805.0805 0 0 1-.0332.0617L10.749 19.4a4.5045 4.5045 0 0 1-6.1251-1.497zm-1.1245-9.724a4.4755 4.4755 0 0 1 2.3448-1.9672l-.0047.1633v5.5163a.7948.7948 0 0 0 .3975.6813l5.8344 3.3685-2.02 1.1638a.0805.0805 0 0 1-.0711 0l-4.8359-2.7915a4.5045 4.5045 0 0 1-1.645-6.1345zm13.6263 3.9184l-5.8344-3.3685 2.02-1.1638a.0805.0805 0 0 1 .0711 0l4.8359 2.7915a4.5045 4.5045 0 0 1-.7 8.1022v-5.68a.7948.7948 0 0 0-.3926-.6814zm2.4954-4.2267a4.4755 4.4755 0 0 1 .5316 3.0033l-.142-.0862-4.7837-2.7582a.7948.7948 0 0 0-.7902 0L8.602 11.4589V9.1265a.0805.0805 0 0 1 .0332-.0617l4.8359-2.7915a4.5045 4.5045 0 0 1 6.1251 1.497zm-11.4646-1.57a4.4755 4.4755 0 0 1 2.8764 1.0408l-.1419.0813-4.779 2.7582a.7948.7948 0 0 0-.3927.6813v6.7369l-2.02-1.1686a.071.071 0 0 1-.038-.052V9.8211a4.5045 4.5045 0 0 1 4.4952-4.4952zm.4554 6.8653l2.5665-1.4807 2.5665 1.4807v2.9614l-2.5665 1.4807-2.5665-1.4807v-2.9614z" />
      </svg>
    ),
  },
  {
    id: "claude",
    name: "Claude",
    provider: "Anthropic",
    utmSource: "claude",
    utmContent: "claude_37_sonnet",
    getUrl: (q) => `https://claude.ai/new?q=${encodeURIComponent(buildPromptWithUtm(q, "claude", "claude_37_sonnet"))}`,
    renderIcon: () => (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#D97757">
        <path d="M12 3.75L13.1 9.4L18.75 8.3L14.6 12.5L19.25 15.9L13.6 15.4L14.7 21L11.5 16.2L7.3 20L9.4 14.6L4.25 15.2L8.5 11.5L3.75 9.1L9.3 9.4L8.7 3.75L12 7.5L12 3.75Z" />
      </svg>
    ),
  },
  {
    id: "perplexity",
    name: "Perplexity",
    provider: "Perplexity AI",
    utmSource: "perplexity",
    utmContent: "perplexity_deep_research",
    getUrl: (q) => `https://www.perplexity.ai/search?q=${encodeURIComponent(buildPromptWithUtm(q, "perplexity", "perplexity_deep_research"))}`,
    renderIcon: () => (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#007F9B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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
    utmSource: "gemini",
    utmContent: "gemini_15_pro",
    getUrl: (q) => `https://gemini.google.com/app?q=${encodeURIComponent(buildPromptWithUtm(q, "gemini", "gemini_15_pro"))}`,
    renderIcon: () => (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
        <defs>
          <linearGradient id="gemini-grad-footer" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4E95ED" />
            <stop offset="50%" stopColor="#B360E6" />
            <stop offset="100%" stopColor="#F867A0" />
          </linearGradient>
        </defs>
        <path fill="url(#gemini-grad-footer)" d="M12 2C12 7.52285 7.52285 12 2 12C7.52285 12 12 16.4771 12 22C12 16.4771 16.4771 12 22 12C16.4771 12 12 7.52285 12 2Z" />
      </svg>
    ),
  },
];

export function AskAiFooterWidget() {
  const defaultQuery = "What services does Showmine offer and how do they build Shopify Plus & Headless stores?";

  const handleModelClick = (model: AiModel) => {
    const targetUrl = model.getUrl(defaultQuery);
    window.open(targetUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex flex-col gap-2 pt-2">
      <div className="flex items-center gap-1.5 text-neutral-500 typo-label">
        <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
        <span>ASK AI ABOUT SHOWMINE</span>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {AI_MODELS.map((model) => (
          <button
            key={model.id}
            onClick={() => handleModelClick(model)}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-neutral-200 bg-neutral-50/80 hover:bg-white hover:border-neutral-300 text-neutral-800 text-[12px] font-medium transition-all shadow-2xs hover:shadow-xs group cursor-pointer"
            title={`Ask ${model.name} (${model.provider}) about Showmine`}
          >
            <div className="flex items-center justify-center shrink-0">
              {model.renderIcon()}
            </div>
            <span>{model.name}</span>
            <ExternalLink className="w-3 h-3 text-neutral-400 group-hover:text-neutral-600 transition-colors ml-0.5" />
          </button>
        ))}
      </div>
    </div>
  );
}
