export default function Testimonial(params: any) {
  return (
    <div className="rounded border bg-slate-50 p-5">
      <p className="text-xl text-gray-600">{params.blok.comment}</p>
      <p className="text-lg font-semibold mt-3">{params.blok.name}</p>
    </div>
  );
}
