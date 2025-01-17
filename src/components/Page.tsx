import { StoryblokComponent } from '@storyblok/react/rsc';

export default function Page(params: any) {
  return (
    <main>
      {params.blok.blocks.map((blok: any) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </main>
  );
} 