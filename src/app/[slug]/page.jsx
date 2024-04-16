import { notFound } from "next/navigation";
import Image from "next/image";

// [slug]/page.js
export async function generateStaticParams() {
  const res = await fetch("https://nice-dogs.vercel.app/api/dogs");
  const pages = await res.json();

  const paths = pages.map((page) => {
    return { slug: page.slug };
  });

  return paths;
}

export default async function DogPage({ params }) {
  const { slug } = params;

  const url = `https://nice-dogs.vercel.app/api/dogs?slug=${slug}`;
  const res = await fetch(url);

  // fejl 404, ingen dog API
  if (res.status !== 200) return notFound();

  // succes
  const data = await res.json();
  console.log(data);

  return (
    <main className="md:flex max-w-7xl mx-auto">
      <Image
        src={data.image.url}
        alt={data.image.slug}
        width={data.image.width}
        height={data.image.height}
        priority={true} // disables lazy load
        className="w-full md:w-1/2 xl:w-[600px]"
        sizes="(max-width: 768px) 100vw,
         (max-width: 1200px) 50vw,
         600px"
      />
      <div>
        <h1>{data.name}</h1>
        <p>Favorite color: {data.favouriteColor}</p>
        <p>
          {data.name} is {data.age} {data.age == "1" ? "year" : "years"} old
        </p>
      </div>
    </main>
  );
}
