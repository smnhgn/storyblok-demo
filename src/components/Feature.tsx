import { SbBlokData, storyblokEditable } from "@storyblok/react/rsc";
import { StoryblokFeature } from "@/storyblok/components";

type FeatureProps = {
	blok: StoryblokFeature & SbBlokData;
};

const Feature = ({ blok }: FeatureProps) => {
	return (
		<div className="feature" {...storyblokEditable(blok)}>
			<span>{blok.name}</span>
		</div>
	);
};

export default Feature;
