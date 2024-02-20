

export function DefaulPageLayout({children}: {children: React.ReactNode}) {
  return (
    <div className=" dark:bg-primary-gray-400 p-8 ">
      {children}
    </div>
  )
}