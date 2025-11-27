import { storyblokEditable } from '@storyblok/react/rsc';

const NavItem = ({ blok }) => {
	return (
		<a href={`/${blok.link.story?.full_slug}`} className="nav-item" {...storyblokEditable(blok)}>
			<span>{blok.label}</span>
		</a>
	);
};

export default NavItem;
