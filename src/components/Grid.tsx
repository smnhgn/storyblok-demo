import {
	SbBlokData,
	storyblokEditable,
	StoryblokServerComponent,
} from '@storyblok/react/rsc';
import { StoryblokGrid } from '@/storyblok/components';

const Grid = ({ blok }: { blok: StoryblokGrid & SbBlokData }) => (
	<div {...storyblokEditable(blok)} className="grid">
		{blok.columns?.map((nestedBlok) => (
			<StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
		))}
	</div>
);

export default Grid;
