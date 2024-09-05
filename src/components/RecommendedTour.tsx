import Image from "next/image";
import Link from "next/link";

export default function RecommendedTour(props: any) {
  return (
    <article className="rounded-xl border bg-slate-50 p-5">
      <Image
        width={400}
        height={300}
        src={props.story.content.main_image.filename}
        alt=""
        className="aspect-4/3 h-auto w-full rounded-md object-cover"
      />
      <h3 className="mt-6 text-2xl font-bold">{props.story.content.name}</h3>
      <p className="mt-3 text-xl font-semibold text-slate-700">
        {Number(props.story.content.price).toLocaleString("en-US", {
          style: "currency",
          currency: "GBP",
          minimumFractionDigits: 0,
        })}
      </p>
      <p className="text-lg">
        {props.story.content.location_city}
        {", "}
        {props.story.content.location_country}
      </p>
      <Link
        href={`/${props.story.full_slug}`}
        className="mt-6 block rounded border border-slate-700 bg-slate-700 px-3 py-2 text-blue-100 hover:bg-slate-200 hover:text-slate-700"
      >
        View tour
      </Link>
    </article>
  );
}