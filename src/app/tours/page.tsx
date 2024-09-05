import RecommendedTour from "@/components/RecommendedTour";
import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";

async function fetchToursPage() {
  const client = getStoryblokApi();
  const response = await client.getStory(`tours`, {
    version: process.env.NODE_ENV === 'development' ? 'draft' : 'published',
  });

  return response.data.story;
}

async function fetchAllTours() {
  const client = getStoryblokApi();
  const response = await client.getStories({
    content_type: "tour",
    version: process.env.NODE_ENV === 'development' ? 'draft' : 'published',
  });

  return response.data.stories;
}

export default async function ToursPage() {
  const story = await fetchToursPage();
  const tours = await fetchAllTours();

  return (
    <div>
      <StoryblokStory story={story} />
      <div className="grid md:grid-flow-col auto-cols-fr lg:grid-cols-3 mt-12 gap-8 container mb-16 mx-auto px-4 w-full py-24">
        {tours.map((tour) => (
          <RecommendedTour key={tour.content._uid} story={tour} />
        ))}
      </div>
    </div>
  );
}
