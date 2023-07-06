import logo from '../assets/logo.png';

export const Navbar=()=> {
  return (
    <div>
      <nav>
        <article>
            <img src={logo} height="20" width="20" alt="logo" />
            <h4>Soundwave</h4>
        </article>
        <p>Discover</p>
        <p>Join</p>
      </nav>
    </div>
  )
}