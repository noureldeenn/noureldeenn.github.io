"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { siteMeta } from "@/lib/meta";

const projectTypes = [
  "Full-stack web app",
  "Shopify / Zid storefront",
  "AI agent / automation",
  "Healthcare / medical app",
  "Something else",
];

const budgetRanges = [
  "Under $5k",
  "$5k – $15k",
  "$15k – $40k",
  "$40k+",
  "Not sure yet",
];

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [projectType, setProjectType] = useState(projectTypes[0]);
  const [budget, setBudget] = useState(budgetRanges[2]);
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = `New brief from ${name || "—"}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company || "—"}`,
      `Project type: ${projectType}`,
      `Budget: ${budget}`,
      "",
      "Brief:",
      message,
    ].join("\n");
    const href = `mailto:${siteMeta.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  }

  const fieldLabel =
    "font-mono text-[10px] tracking-widest text-paper-dim mb-2 block";
  const fieldInput =
    "w-full bg-ink-soft/40 border border-rule px-4 py-3 font-mono text-sm text-paper placeholder:text-paper-dim/60 focus:outline-none focus:border-ember transition-colors duration-200";

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className={fieldLabel}>
            [NAME] *
          </label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className={fieldInput}
          />
        </div>
        <div>
          <label htmlFor="email" className={fieldLabel}>
            [EMAIL] *
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className={fieldInput}
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className={fieldLabel}>
          [COMPANY]
        </label>
        <input
          id="company"
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Acme Inc. (optional)"
          className={fieldInput}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="projectType" className={fieldLabel}>
            [PROJECT TYPE]
          </label>
          <select
            id="projectType"
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
            className={fieldInput}
          >
            {projectTypes.map((t) => (
              <option key={t} value={t} className="bg-ink text-paper">
                {t}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="budget" className={fieldLabel}>
            [BUDGET]
          </label>
          <select
            id="budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className={fieldInput}
          >
            {budgetRanges.map((b) => (
              <option key={b} value={b} className="bg-ink text-paper">
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={fieldLabel}>
          [BRIEF] *
        </label>
        <textarea
          id="message"
          required
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="What are you building? What does success look like? Any deadlines?"
          className={`${fieldInput} resize-y min-h-[160px]`}
        />
      </div>

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <Button type="submit" size="lg">
          Send brief →
        </Button>
        <p className="font-mono text-[11px] text-paper-dim">
          Opens in your mail client. Reply within one business day.
        </p>
      </div>
    </form>
  );
}