import { Link } from "remix"

function navbar() {
  return (
    <nav className="container-fluid">
      <ul>
        <li><Link to="/"><img style={{ width: 70 + 'px' }} src="/images/logo_bug.svg" alt="StarGazers Logo" /></Link></li>
        <li><h2><Link to="/">StarGazers</Link></h2></li>
      </ul>
      <ul>
        <li><Link className="contrast" to="/cast">Cast</Link></li>
      </ul>
    </nav>
  )
}

export default navbar