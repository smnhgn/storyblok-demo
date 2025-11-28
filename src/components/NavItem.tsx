import { SbBlokData, storyblokEditable } from '@storyblok/react/rsc';
import { StoryblokNavItem } from '@/storyblok/components';

const NavItem = ({ blok }: { blok: StoryblokNavItem & SbBlokData }) => {
	return (
		<a
			href={`/${blok.link?.cached_url}`}
			className="nav-item"
			{...storyblokEditable(blok)}
		>
			<span>{blok.label}</span>
		</a>
	);
};

export default NavItem;
