"use client";

import { AnimatePresence, motion } from "framer-motion";
import { SbBlokData, storyblokEditable, StoryblokServerComponent } from "@storyblok/react/rsc";
import { StoryblokCollapsible } from "@/storyblok/components";
import { ReactElement, useState } from "react";

type AccordionProps = Partial<StoryblokCollapsible> & SbBlokData;

export default function Accordion(blok: AccordionProps): ReactElement {
	const [isOpen, setIsOpen] = useState(false);
	const Content = motion("div");

	return (
		<div {...storyblokEditable(blok)} className="flex flex-col">
			<button className="w-full flex flex-row items-center relative" onClick={(): void => setIsOpen(!isOpen)}>
				{blok.label}
			</button>

			<AnimatePresence initial={true}>
				<Content
					className="overflow-hidden"
					initial={{ height: 0, opacity: 0 }}
					animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
					transition={{ ease: "easeInOut", duration: 0.3 }}
					exit={{ height: 0, opacity: 0 }}
				>
					{blok.content?.map((nestedBlok) => (
						<StoryblokServerComponent key={nestedBlok._uid} {...nestedBlok} />
					))}
				</Content>
			</AnimatePresence>
		</div>
	);
}
