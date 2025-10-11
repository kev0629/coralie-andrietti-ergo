import AccordionItem from "@/components/ui/AccordionItem";
import { faqItems } from "@/constants/content/faqContent";

const FaqAccordion = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-5xl mx-auto md:grid md:grid-cols-2 md:gap-8">
        {faqItems.map((item) => (
          <AccordionItem key={item.id} title={item.question}>
            <p className="whitespace-pre-line">{item.answer}</p>
          </AccordionItem>
        ))}
      </div>
    </div>
  );
};

export default FaqAccordion;