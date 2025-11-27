import {
	storyblokEditable,
	StoryblokServerComponent,
} from '@storyblok/react/rsc';

const Header = ({ blok }) => (
	<div {...storyblokEditable(blok)} className="header">
		{blok.links.map((nestedBlok) => (
			<StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
		))}
	</div>
);

export default Header;
