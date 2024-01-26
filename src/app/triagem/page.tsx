'use client'
import LayoutComponent from "@/components/layout-component";
import { useState } from "react";

export default function Triagem() {

  const [open, setOpen] = useState();

  return (
    <LayoutComponent>
      <p className="text-xl">Triagem</p> 
    </LayoutComponent>
  )
}