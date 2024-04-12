import { notFound } from "next/navigation";

export default async function DogPage({ params }) {
  const { slug } = params;

  const url = `https://nice-dogs.vercel.app/api/dogs?slug`;
  const res = await fetch(url);

  if (res.status !== 200) return notFound();

  const data = await res.json();
  console.log(data);

  return <h1>{slug}</h1>;
}
