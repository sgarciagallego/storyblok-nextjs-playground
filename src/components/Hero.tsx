export default function Hero(params: any) {
  return (
    <div className="bg-slate-700">
      <section className="container mb-16 mx-auto px-4 w-full pt-24 pb-24">
        <h1 className="text-blue-100 text-center text-5xl md:text-7xl font-bold">
          {params.blok.headline}
        </h1>
        <p className="text-blue-100 text-center text-xl mt-8">{params.blok.content}</p>
      </section>
    </div>
  );
}