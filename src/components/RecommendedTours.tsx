import RecommendedTour from './RecommendedTour';

export default function RecommendedTours(params: any) {
  return (
    <section className="py-16 container mx-auto w-full px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center">{params.blok.headline}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {params.blok.tours.map((tour: any) => (
          <RecommendedTour 
            key={tour.content._uid}
            story={tour} 
          />
        ))}
      </div>
    </section>
  );
}