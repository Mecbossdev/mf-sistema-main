

export function DefaulPageLayout({children}: {children: React.ReactNode}) {
  return (
    <div className=" dark:bg-primary-gray-900 p-8 ">
      {children}
    </div>
  )
}