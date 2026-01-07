import { SbBlokData, storyblokEditable, StoryblokServerComponent } from "@storyblok/react/rsc";
import { StoryblokGrid } from "@/storyblok/components";

type GridProps = StoryblokGrid & SbBlokData;

const Grid = (blok: GridProps) => (
	<div {...storyblokEditable(blok)} className="grid">
		{blok.columns?.map((nestedBlok) => (
			<StoryblokServerComponent key={nestedBlok._uid} {...nestedBlok} />
		))}
	</div>
);

export default Grid;
