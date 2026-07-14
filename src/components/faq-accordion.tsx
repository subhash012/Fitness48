import type { FaqItem } from "@/types/site";

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <details key={item.question} className="glass group rounded-3xl p-5">
          <summary className="cursor-pointer list-none text-lg font-medium text-white">
            <span className="flex items-center justify-between gap-4">
              {item.question}
              <span className="text-2xl text-white/35 group-open:rotate-45">+</span>
            </span>
          </summary>
          <p className="mt-4 text-sm leading-7 text-white/65">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}