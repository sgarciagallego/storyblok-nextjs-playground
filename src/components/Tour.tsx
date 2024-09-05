import Image from 'next/image';
import { renderRichText } from '@storyblok/react';

export default function Tour(props: any) {
  return (
    <main className="container mx-auto px-4 w-full pt-32 p-16">
      <h1 className="text-3xl md:text-5xl font-bold">{props.blok.name}</h1>
      <Image
        width={400}
        height={300}
        src={props.blok.main_image.filename}
        alt={props.blok.main_image.alt}
        className="mt-12"
      />
      <p className="mt-12 text-lg md:text-2xl leading-relaxed">{props.blok.introduction}</p>
      <div
        className="prose md:prose-lg mt-16 max-w-none"
        dangerouslySetInnerHTML={{
          __html: renderRichText(props.blok.body),
        }}
      />
    </main>
  );
}