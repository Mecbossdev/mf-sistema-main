'use client'
import LayoutComponent from "@/components/layout-component";


export default async function HomePage() {

  await new Promise((resolve) => setTimeout(resolve, 1000))

  return (
    <LayoutComponent>
      <p className="text-xl">Home</p>   
    </LayoutComponent>
  )
}