import { SbBlokData, storyblokEditable } from "@storyblok/react/rsc";
import { StoryblokTeaser } from "@/storyblok/components";

type TeaserProps = {
	blok: StoryblokTeaser & SbBlokData;
};

const Teaser = ({ blok }: TeaserProps) => {
	return (
		<div className="teaser" {...storyblokEditable(blok)}>
			<h1>{blok.headline}</h1>
		</div>
	);
};

export default Teaser;
