"use client";
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqProps {
  id: string;
}

const Faq: React.FC<FaqProps> = ({ id }) => {
  return (
    <div className='mx-[50px] mt-20'>
      <h1 className='text-3xl mb-10 text-gray-500'>
        $ ./FAQ
      </h1>
      <div className='mx-[50px] bg-gray-700 p-5'>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className='text-left'>How many team members do I need?</AccordionTrigger>
            <AccordionContent>
              You can participate individually or in teams of 3 to 5 members. If you are participating in the hackathon individually and looking for a team, we will help you in connecting to other individual participants to get you a team.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Will the hackathon be in person or online?</AccordionTrigger>
            <AccordionContent>
              The Status Code 1 hackathon will be conducted in complete offline/in person mode.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How much are the participation fees?</AccordionTrigger>
            <AccordionContent>
              Participation is absolutely free inclusive of resources.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>What are the prerequisites to participate in this hackathon?</AccordionTrigger>
            <AccordionContent>
              No prerequisites are required to participate in this hackathon. This event is open to participants of all skill levels.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>How do I register?</AccordionTrigger>
            <AccordionContent>
              Register your team at Devfolio.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>What is the venue for Status Code 1?</AccordionTrigger>
            <AccordionContent>
              APC Ray Lecture Hall Complex, IISER KOLKATA.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>Is the food and accommodation provided free of charge or are there any associated costs?</AccordionTrigger>
            <AccordionContent>
              We've got you covered when it comes to food, water, and coffee – they're on us. However, any additional snacks can be purchased separately. As for accommodation, we will provide arrangements similar to those found in other hackathons, which typically involve a set of mattresses in a common hall.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger>Can my friend join our team after we have already submitted the application for review?</AccordionTrigger>
            <AccordionContent>
              Yes, your friend can join the team by submitting an individual application. Once both your friend's individual application and your team's application are accepted, you will be able to add your friend to the team. For more information, please refer to Devfolio's guide: How To Add Team Members.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default Faq;
