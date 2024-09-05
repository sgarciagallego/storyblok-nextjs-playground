import { getStoryblokApi, StoryblokStory } from '@storyblok/react/rsc';

async function fetchHomePage() {
  const client = getStoryblokApi();
  const response = await client.getStory(`home`, {
    version: process.env.NODE_ENV === 'development' ? 'draft' : 'published',
    resolve_relations: 'recommended_tours.tours',
  });

  return response.data.story;
}

export default async function HomePage() {
  const story = await fetchHomePage();

  return <StoryblokStory story={story} />;
}