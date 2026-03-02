import { TrendingUp, Plus, Copy } from "lucide-react";

const barHeights = [40, 55, 35, 60, 45, 70, 55, 75, 50, 80, 60, 85, 65, 90, 70, 55, 75, 95, 60, 80, 100, 65, 85, 75, 70, 90, 80, 60, 85, 75];

const pages = [
  { path: "/", visits: "1,865", width: "85%" },
  { path: "/pricing", visits: "748", width: "55%" },
  { path: "/about-us", visits: "401", width: "35%" },
  { path: "/blog", visits: "223", width: "22%" },
];

const stats = [
  { label: "Organic Visits", value: "1,866", change: "2%" },
  { label: "Pages viewed per visit", value: "2.5", change: "8%" },
];

export default function DashboardPreview() {
  return (
    <div className="relative w-full max-w-[600px] ml-auto">
      {/* Main dashboard card */}
      <div className="border border-border rounded-xl bg-card shadow-sm overflow-hidden">
        {/* Browser chrome */}
        <div className="bg-card px-4 py-2.5 flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[hsl(0,70%,60%)]" />
            <div className="w-3 h-3 rounded-full bg-[hsl(40,80%,60%)]" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="bg-secondary rounded-md px-4 py-1 flex-1 max-w-[200px]">
            <span className="text-xs text-foreground text-center block">yourbrand.com</span>
          </div>
          <div className="ml-auto flex items-center gap-2 text-muted-foreground">
            <Plus className="w-4 h-4" />
            <Copy className="w-4 h-4" />
          </div>
        </div>

        {/* Dashboard content */}
        <div className="bg-secondary p-4 space-y-3">
          <div>
            <h3 className="text-xl font-extrabold tracking-tight text-foreground">Dashboard</h3>
            <p className="text-xs text-foreground mt-0.5">yourbrand.com</p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 gap-2">
            {stats.map((s) => (
              <div key={s.label} className="bg-card rounded-lg p-3 border border-border">
                <span className="text-[11px] tracking-tight text-muted-foreground">{s.label}</span>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-[28px] font-extrabold tracking-tight leading-none text-foreground">{s.value}</span>
                </div>
                <div className="flex items-center gap-1 mt-1.5">
                  <TrendingUp className="w-3 h-3 text-green-500" />
                  <span className="text-[10px] font-medium text-green-500">{s.change}</span>
                </div>
              </div>
            ))}
          </div>

          {/* AI Visibility with bar chart */}
          <div className="bg-card rounded-lg p-3 border border-border">
            <div className="flex items-center justify-between">
              <span className="text-[11px] tracking-tight text-muted-foreground">AI Visibility</span>
              <div className="flex items-center gap-2">
                <span className="text-[28px] font-extrabold tracking-tight leading-none text-foreground">12%</span>
                <div className="flex items-center gap-0.5">
                  <TrendingUp className="w-3 h-3 text-green-500" />
                  <span className="text-[10px] font-medium text-green-500">4%</span>
                </div>
              </div>
            </div>
            <div className="flex items-end gap-[3px] h-20 mt-3">
              {barHeights.map((h, i) => (
                <div key={i} className="flex-1 flex items-end h-full">
                  <div
                    className="w-full rounded-t-sm bg-green-600"
                    style={{ height: `${h}%` }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Pages card - overlapping bottom-left */}
      <div className="absolute -bottom-8 -left-12 md:-left-16 w-[220px] border border-border rounded-xl bg-card shadow-lg overflow-hidden z-10">
        <div className="bg-secondary px-3 py-2">
          <span className="text-sm font-semibold tracking-tight text-foreground">Pages</span>
        </div>
        <div className="flex flex-col gap-1.5 p-2.5">
          {pages.map((p) => (
            <div key={p.path} className="flex items-center gap-2">
              <div className="w-[90px] h-3 rounded-sm bg-green-200 overflow-hidden">
                <div className="h-full rounded-sm bg-green-500" style={{ width: p.width }} />
              </div>
              <span className="text-[10px] tracking-tight text-foreground flex-1">{p.path}</span>
              <span className="text-[10px] tracking-tight text-muted-foreground">{p.visits}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating cursor badge */}
      <div className="absolute -bottom-2 -right-2 animate-float bg-green-500 text-accent-foreground rounded-full px-4 py-1.5 text-sm font-semibold shadow-lg z-10">
        You
        <svg className="absolute -top-2 -left-2 w-5 h-6" viewBox="0 0 19 23" fill="none">
          <path d="M1 1L4.8 22L9.6 12.914L18 11.298L1 1Z" fill="currentColor" stroke="hsl(var(--background))" strokeWidth="1.5" />
        </svg>
      </div>
    </div>
  );
}
