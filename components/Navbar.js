import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <>
      {/* <div className={styles.bg}>
        <Link href="/">Home</Link>
        <Link href="/posts">Posts</Link>
      </div> */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
        <Link className="navbar-brand" href="/profile">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link href="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/posts" className="nav-link">
                Posts
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link href="/signup" className="nav-link">
                <button className="w-100 btn btn-primary" type="submit">
                  Sign up
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/login" className="nav-link">
                <button className="w-100 btn btn-primary" type="submit">
                  Sign in
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
