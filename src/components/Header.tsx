import { SbBlokData, storyblokEditable, StoryblokServerComponent } from "@storyblok/react/rsc";
import { StoryblokHeader } from "@/storyblok/components";

type HeaderProps = StoryblokHeader & SbBlokData;

const Header = (blok: HeaderProps) => (
	<div {...storyblokEditable(blok)} className="header">
		{blok.links?.map((nestedBlok) => (
			<StoryblokServerComponent key={nestedBlok._uid} {...nestedBlok} />
		))}
	</div>
);

export default Header;
