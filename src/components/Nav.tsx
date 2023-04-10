import React from "react"
import './Nav.scss'

const switchClass = () => {

}

interface NavItem {
  id: string
  title: string
}

interface Props {
  nav: NavItem[]
}

export const Nav: React.FC<Props> = ({ nav }) => {
  return (
    <nav className="navBar">
      {
        nav.map((navItem, idx) => (
          <a
            href={'#' + navItem.id}
            key={idx}
            className={idx === 0 ? "item active" : "item"}
          >
            {navItem.title}
          </a>
        ))
      }
    </nav>
  )
}