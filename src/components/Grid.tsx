import { SbBlokData, storyblokEditable, StoryblokServerComponent } from "@storyblok/react/rsc";
import { StoryblokGrid } from "@/storyblok/components";

type GridProps = {
	blok: StoryblokGrid & SbBlokData;
};

const Grid = ({ blok }: GridProps) => (
	<div {...storyblokEditable(blok)} className="grid">
		{blok.columns?.map((nestedBlok) => (
			<StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
		))}
	</div>
);

export default Grid;
