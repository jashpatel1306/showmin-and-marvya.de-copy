import { useState } from "react";
import { toast } from "sonner";

const COUNTRIES = [
  "United States", "United Kingdom", "Canada", "Germany", "France",
  "Netherlands", "Sweden", "Denmark", "Finland", "Ireland", "Spain",
  "Portugal", "Belgium", "Switzerland", "Norway", "Austria", "Italy",
  "Estonia", "Poland", "Czech Republic", "Hungary", "United Arab Emirates",
  "Saudi Arabia", "Israel", "India", "Singapore", "Hong Kong", "Japan",
  "Australia", "New Zealand", "Other",
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    country: "",
    timeline: "",
    projectType: "",
    details: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll be in touch soon.");
  };

  const inputClasses =
    "w-full px-4 py-4 rounded-lg border border-border bg-input-bg text-base font-normal text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary font-urbanist placeholder:text-muted-foreground";

  const selectClasses =
    "w-full px-4 py-4 pr-10 rounded-lg border border-border bg-input-bg text-base font-normal text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary font-urbanist appearance-none bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M7%2010L12%2015L17%2010%22%20stroke%3D%22%23909090%22%20stroke-width%3D%221.6%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_14px_center] bg-[size:16px_16px]";

  const labelClasses = "text-base font-bold text-foreground font-urbanist";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 font-urbanist">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <label className="flex flex-col gap-1.5">
          <span className={labelClasses}>Name*</span>
          <input
            name="name"
            placeholder="Jane Smith"
            required
            value={formData.name}
            onChange={handleChange}
            className={inputClasses}
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className={labelClasses}>Email*</span>
          <input
            name="email"
            type="email"
            placeholder="jane@smiths.com"
            required
            value={formData.email}
            onChange={handleChange}
            className={inputClasses}
          />
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <label className="flex flex-col gap-1.5">
          <span className={labelClasses}>Company*</span>
          <input
            name="company"
            placeholder="Smiths"
            required
            value={formData.company}
            onChange={handleChange}
            className={inputClasses}
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className={labelClasses}>Country*</span>
          <select
            name="country"
            required
            value={formData.country}
            onChange={handleChange}
            className={selectClasses}
          >
            <option value="" disabled>
              Select...
            </option>
            {COUNTRIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <label className="flex flex-col gap-1.5">
          <span className={labelClasses}>Timeline*</span>
          <select
            name="timeline"
            required
            value={formData.timeline}
            onChange={handleChange}
            className={selectClasses}
          >
            <option value="" disabled>
              Select...
            </option>
            <option value="asap">ASAP</option>
            <option value="1-3">1–3 months</option>
            <option value="3+">3+ months</option>
          </select>
        </label>
        <label className="flex flex-col gap-1.5">
          <span className={labelClasses}>Project type*</span>
          <select
            name="projectType"
            required
            value={formData.projectType}
            onChange={handleChange}
            className={selectClasses}
          >
            <option value="" disabled>
              Select...
            </option>
            <option value="new-site">New website or landing page</option>
            <option value="existing-support">Support for existing website</option>
            <option value="other">Other</option>
          </select>
        </label>
      </div>

      <label className="flex flex-col gap-1.5">
        <span className={labelClasses}>Enquiry details</span>
        <textarea
          name="details"
          placeholder="What are you looking for help with?"
          value={formData.details}
          onChange={handleChange}
          className={`${inputClasses} min-h-[120px] resize-vertical`}
        />
      </label>

      <div className="flex items-center justify-between gap-4 flex-wrap sm:flex-nowrap">
        <p className="text-[13px] font-normal text-muted-foreground max-w-[360px]">
          By clicking "Submit", you agree to our Terms & Conditions and Privacy
          Policy.
        </p>
        <button
          type="submit"
          className="flex-shrink-0 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-base shadow-[inset_0_6.75px_13.5px_0_rgba(0,0,0,0.08),inset_0_0.5625px_1.125px_0_rgba(255,255,255,0.34),0_1.125px_2.25px_0_rgba(8,8,8,0.19),0_4px_4.5px_0_rgba(8,8,8,0.05)] hover:opacity-90 transition-opacity cursor-pointer"
        >
          Continue
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
