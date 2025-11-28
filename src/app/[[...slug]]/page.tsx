import { StoryblokStory } from "@storyblok/react/rsc";
import { getStoryblokApi } from "@/lib/storyblok";

export default async function Page({ params }: PageProps<"/[[...slug]]">) {
	const { slug } = await params;
	const availableLanguages = ["en"];
	const language = availableLanguages.some((lang) => lang === slug?.at(0)) ? slug?.at(0) : undefined;

	if (language) {
		slug?.shift();
	}

	const fullSlug = slug ? slug.join("/") : "home";

	const storyblokApi = getStoryblokApi();

	const result = await storyblokApi.get(`cdn/stories/${fullSlug}`, {
		version: process.env.STORYBLOK_DELIVERY_API_VERSION as "draft" | "published",
		language,
	});

	return <StoryblokStory story={result.data.story} />;
}
