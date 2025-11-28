import { SbBlokData, storyblokEditable } from "@storyblok/react/rsc";
import { StoryblokNavItem } from "@/storyblok/components";

type HeaderProps = {
	blok: StoryblokNavItem & SbBlokData;
};

const NavItem = ({ blok }: HeaderProps) => {
	return (
		<a href={`/${blok.link?.cached_url}`} className="nav-item" {...storyblokEditable(blok)}>
			<span>{blok.label}</span>
		</a>
	);
};

export default NavItem;
