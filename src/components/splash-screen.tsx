import React, { useState, useEffect } from "react"
import Image from "next/image"
import anime from "animejs"

export default function SplashScreen({ visible }: {visible: boolean}){

  return (
    <div
      style={{ display: visible ? 'flex' : 'none' }}
      className="flex h-screen items-center justify-center"
    >
      <h1>hellow</h1>
    </div>
  )
}

