import { SbBlokData, storyblokEditable, StoryblokServerComponent } from "@storyblok/react/rsc";
import { StoryblokPage } from "@/storyblok/components";

type PageProps = StoryblokPage & SbBlokData;

const Page = (blok: PageProps) => (
	<main {...storyblokEditable(blok)}>
		{blok.body?.map((nestedBlok) => (
			<StoryblokServerComponent key={nestedBlok._uid} {...nestedBlok} />
		))}
	</main>
);

export default Page;
