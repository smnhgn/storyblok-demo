import { SbBlokData, storyblokEditable, StoryblokServerComponent } from "@storyblok/react/rsc";
import { StoryblokHeader } from "@/storyblok/components";

type HeaderProps = {
	blok: StoryblokHeader & SbBlokData;
};

const Header = ({ blok }: HeaderProps) => (
	<div {...storyblokEditable(blok)} className="header">
		{blok.links?.map((nestedBlok) => (
			<StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
		))}
	</div>
);

export default Header;
