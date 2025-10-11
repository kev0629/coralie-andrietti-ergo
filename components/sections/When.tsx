import React from "react";
import AccordionItem from "@/components/ui/AccordionItem";
import { whenContent } from "@/constants/content/whenContent";

const renderContent = (contentItem: any, index: number) => {
  if (contentItem.type === "paragraph") {
    return (
      <p key={index} className={`mb-2 font-semibold ${contentItem.className || ''}`}>
        {contentItem.text}
      </p>
    );
  }

  if (contentItem.type === "list") {
    return (
      <ul key={index} className="list-disc list-inside pl-4 space-y-2">
        {contentItem.items.map((item: string, i: number) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    );
  }

  return null;
};

export default function When() {
  return (
    <div className="max-w-4xl mx-auto">
      <p className="text-center text-gray-600 mb-8">
        Il est recommandé de consulter un ergothérapeute dès le repérage ou la
        suspicion de difficultés. Voici quelques exemples de situations où
        l&apos;ergothérapie peut aider.
      </p>
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        {whenContent.map((section) => (
          <AccordionItem key={section.id} title={section.title}>
            {section.content.map(renderContent)}
          </AccordionItem>
        ))}
      </div>
    </div>
  );
}