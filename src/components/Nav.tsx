import React from "react"
import './Nav.scss'

function percentageElementInViewport(el: Element) {
  const rect = el.getBoundingClientRect();
  const screenHeight = window.innerHeight || document.documentElement.clientHeight
  const elementHeight = rect.height

  if (rect.top > 0) {
    if (rect.top > screenHeight) {
      return 0
    } else {
      return Math.round(((screenHeight - rect.top) / screenHeight) * 100)
    }
  } else {
    if (elementHeight + rect.top < 0) {
      return 0
    } else if (rect.top + elementHeight > screenHeight) {
      return 100
    } else {
      return Math.round(((elementHeight + rect.top) / screenHeight) * 100)
    }
  }
}

function callbackFunc() {
  const sections = document.querySelectorAll(".main-section");
  const navAnchors = document.querySelectorAll("nav a");
  let mostProminentSection: [key: number, currentLargestValue: number] = [-1, -1]
  sections.forEach((item, key) => {
    const value = percentageElementInViewport(item)
    if (value > mostProminentSection[1] || value > 30) {
      if (mostProminentSection[0] >= 0) {
        navAnchors[mostProminentSection[0]].classList.remove("active")
      }
      mostProminentSection = [key, value]
    } else {
      navAnchors[key].classList.remove("active");
    }
  })
  navAnchors[mostProminentSection[0]].classList.add("active")
}

if (typeof window != 'undefined') {
  window.addEventListener('scroll', callbackFunc);
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
      {/* Scroll top: <b>{scrollTop}</b> */}
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