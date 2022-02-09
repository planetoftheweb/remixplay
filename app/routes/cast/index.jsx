import { useLoaderData, Link } from "remix"

export async function loader() {
  let res = await fetch("http://pixelprowess.com/i/cast.json");
  return res.json();
}

export default function CastIndexRoute() {
  const data = useLoaderData();
  return (
    <div className="cast">
      {data.map(cast => (
        <article key={cast.id}>
          <header><h3>{cast.name}</h3></header>
          <img src={'/images/' + cast.slug + '_tn.svg'} alt={cast.name} />
          <p>{cast.bio}</p>
          <footer>
            <Link to={`/cast/${cast.id}`}>
              <button>Read More</button>
            </Link>
          </footer>
        </article>
      ))}
    </div>
  )
}