import React from "react"
import BannerImage from "../images/aventus-logo-images.svg"

const Banner = () => (
  <div className="flex flex-col items-center">
    <BannerImage className="aventus-image-banner" />
    <p className="banner-subtext text-2xl">Media Group</p>
  </div>
)

export default Banner
