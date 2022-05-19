import React from 'react';
import styles from "./navbar.module.css"

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar" id={styles.navbar}>
  <div className="container-fluid container">
    <a className="navbar-brand" id={styles.navLogo} to="/">
      Movie Organizer
    </a>

  </div>
</nav>
    </div>
  )
}
