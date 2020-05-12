import React from "react"
import LogoVertical from "../images/aventus-text-vertical.svg"

const Footer = () => {
  return (
    <>
      <footer className="footer flex w-full mt-9 font-display text-xs uppercase">
        <div className="footer--left flex-auto">
          <div className="flex flex-col">
            <div className="footer--contact-info bg-primary p-4 flex-auto font-light">
              <p className="mb-0 text-black font-normal text-2xl">
                John Catania
              </p>
              <p className="mb-0 text-sm">Founder</p>
              <div className="stub-divider" />
              <p className="mb-0">713.545.0884</p>
              <p className="mb-0">
                <a href="mailto:jon@aventusmediagroup.com">
                  jon@aventusmediagroup.com
                </a>
              </p>
            </div>
          </div>
          <div className="footer--copyright flex-1 content-center">
            <p className="m-0">
              © {new Date().getFullYear()}
              {` `}Aventus Media
            </p>
          </div>
        </div>
        <div className="footer--right py-3 px-4 flex-initial">
          <LogoVertical />
        </div>
      </footer>
    </>
  )
}

export default Footer
