import React from "react";

interface SectionProps {
  id?: string;
  title?: string;
  children: React.ReactNode;
  backgroundImage?: string;
  className?: string;
}

export default function Section({ id, title, children, backgroundImage, className }: SectionProps) {
  const style = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})` }
    : {};

  return (
    <section
      id={id}
      className={`py-12 md:py-16 bg-cover bg-center ${className}`}
      style={style}
    >
      {title && (
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-dark">{title}</h2>
          <div className="mt-2 w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
      )}
      <div className="p-8">{children}</div>
    </section>
  );
}
