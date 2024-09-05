'use client';

import type { PropsWithChildren } from 'react';
import { storyblokInit } from '@storyblok/react/rsc';
import Page from './Page';
import Hero from './Hero';
import Tour from './Tour';
import Grid from './Grid';
import Feature from './Feature';
import Testimonial from './Testimonial';
import RecommendedTours from './RecommendedTours';

storyblokInit({
  components: {
    page: Page,
    hero: Hero,
    grid: Grid,
    feature: Feature,
    testimonial: Testimonial,
    recommended_tours: RecommendedTours,
    tour: Tour,
  },
  enableFallbackComponent: true,
});

export default function StoryblokProvider({ children }: PropsWithChildren) {
  return children;
}