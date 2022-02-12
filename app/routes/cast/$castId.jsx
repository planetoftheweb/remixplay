import { useParams, useLoaderData } from 'remix';

export async function loader() {
  let res = await fetch("https://pixelprowess.com/i/cast.json");
  return res.json();
}

function CastMember() {
  const params = useParams();
  const data = useLoaderData();
  const castMember = data.find((item) => item.id == params.castId)
  return (
    <div className="classMember">
      <article>
        <header><h2>{castMember.name}</h2></header>
        <img src={'/images/' + castMember.slug + '.svg'} alt={castMember.bio} />
        {castMember.bio}
      </article>
    </div>
  )
}

export default CastMember