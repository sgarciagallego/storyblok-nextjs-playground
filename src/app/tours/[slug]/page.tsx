import { getStoryblokApi, StoryblokStory } from '@storyblok/react/rsc';

export async function generateStaticParams() {
  const client = getStoryblokApi();
  const response = await client.getStories({
    content_type: 'tour',
    version: process.env.NODE_ENV === 'development' ? 'draft' : 'published',
  });

  return response.data.stories.map((story) => ({ slug: story.slug }));
}

async function fetchTourPage(slug: string) {
  const client = getStoryblokApi();
  const response = await client.getStory(`tours/${slug}`, {
    version: process.env.NODE_ENV === 'development' ? 'draft' : 'published',
  });

  return response.data.story;
}

export default async function TourPage(props: any) {
  const story = await fetchTourPage(props.params.slug);

  return <StoryblokStory story={story} />;
}