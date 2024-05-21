import { useState, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "../data";
import logo from "../assets/images/logo.svg";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksRef = useRef(null);

  const toogleLinks = () => {
    setShowLinks(!showLinks);
  }

  const linkStyles = {
    height: showLinks ? 
            `${linksRef.current.getBoundingClientRect().height}px` 
            : 
            0,
  }

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="logo" />
            <button
              type="button"
              className="nav-toggle"
              onClick={toogleLinks}
            >
            <FaBars />
            </button>
        </div>
        <div 
          className="links-container"
          style={linkStyles}
        >
          <ul 
            className="links"
            ref={linksRef}
          >
            {
              links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <a href={url} target="_blank">{text}</a>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <ul className="social-icons">
          {
            social.map((socialIcon) => {
              const { id, url, icon } = socialIcon;
              return (
                <li key={id}>
                  <a href={url} target="_blank">
                   {icon} 
                  </a>
                </li>
              )
            })
          }
        </ul>
      </div>
    </nav>
  )
}
export default Navbar