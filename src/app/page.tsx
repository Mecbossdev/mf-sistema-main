'use client'
import { DefaulPageLayout } from "@/components/default-page-layout";
import SingIn from "./(auth)/sign-in/page";
import { DefaultProvider } from "@/components/default-provider";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SplashScreen from "@/components/splash-screen";


export default function Home() {
  const [isLoading, setIsloading] = useState(false)

  useEffect(() => {
    const fekeDataFetcher = () => {
      setTimeout(() => {
        setIsloading(false)
      }, 4000)
    }

    return fekeDataFetcher()
  }, [])

  return (
    <DefaultProvider>
      <DefaulPageLayout>
        <main className="flex justify-center items-center bg-[url(../assets/smas.svg)] bg-cover min-h-screen">

        </main>
      </DefaulPageLayout>
    </DefaultProvider>

  )
}
