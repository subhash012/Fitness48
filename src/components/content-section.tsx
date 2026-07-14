import type { ReactNode } from "react";

type ContentSectionProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

export function ContentSection({ title, description, children }: ContentSectionProps) {
  return (
    <section className="section-padding">
      <div className="container-width space-y-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl text-white sm:text-4xl">{title}</h2>
          {description ? <p className="mt-3 text-white/65">{description}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}