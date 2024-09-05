export default function Feature(params: any) {
  return (
    <div className="bg-slate-50 border p-5 rounded">
      <h3 className="text-2xl font-bold">{params.blok.headline}</h3>
      <p className="mt-6 text-lg">{params.blok.content}</p>
    </div>
  );
}