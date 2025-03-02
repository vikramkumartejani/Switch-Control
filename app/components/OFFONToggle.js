"use client"

import { useState } from "react"
import Image from "next/image"

const OFFONToggle = ({ initialState = false }) => {
  const [isEnabled, setIsEnabled] = useState(initialState)

  const handleToggle = () => {
    setIsEnabled(!isEnabled)
  }

  return (
    <div className="toggle-button-cover">
      <div className="button r" id="button-3">
        <input type="checkbox" className="checkbox" />
        <div className="knobs"></div>
        <div className="layer"></div>
      </div>
    </div>
  )
}

export default OFFONToggle