import { StoryblokStory } from '@storyblok/react/rsc';
import { getStoryblokApi } from '@/lib/storyblok';

type PageProps = {
	params: {
		slug?: string[];
	};
};

export default async function Page({ params: { slug } }: PageProps) {
	const fullSlug = slug ? slug.join('/') : 'home';

	const storyblokApi = getStoryblokApi();

	const result = await storyblokApi.get(`cdn/stories/${fullSlug}`, {
		version: process.env.STORYBLOK_DELIVERY_API_VERSION as
			| 'draft'
			| 'published',
	});

	return <StoryblokStory story={result.data.story} />;
}
