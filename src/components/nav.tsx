'use client'
import { 
  LayoutDashboard, 
  Home, 
  Filter, 
  BadgeCheck,
  LogOut,
  HelpCircle,
  Settings,
  ChevronDown,
  UserPlus,
  CheckSquare
} 
  from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu } from '@/interfaces/menu-data'
import { Logo } from "@/components/icons/logo-login";
import Image from 'next/image'
import logo from '../assets/logo.svg'
import { toast } from 'react-toastify'

export function Nav() {
  const [filterNav, setfilterNav] = useState<string>('')
  const [open, setOpen] = useState<boolean>(true);
  const [submenuOpen, setSubmenuOpen] = useState<boolean>(false);
  const inactiveLink = 'flex gap-4 mb-6 border-gray-600 transition ease-in-out delay-200 hover:border-purple-250 duration-150 ...';
  const activeLink = inactiveLink+' text-primary-blue-700';
  const pathname = usePathname();
  
  return (
    <aside className=' p-6 text-primary-gray-500 border dark:border-none'>
      <div className="flex justify-center">
      <Image
        src={logo}
        alt=''
        sizes="180x38"
        height={25}
        width={120}
      />
      </div>
      <nav className='flex flex-col'>
        <div className='text-sm mb-4 mt-4'></div>
        <div className='mt-4 mb-8'>
          <Link href={'/home'} className={pathname.includes('/home') ? activeLink : inactiveLink}>
            <Home
              className="ml-2"
              size={22}
            />
            Inicial
          </Link>
          <Link href={'/dashboard'} className={pathname.includes('/dashboard') ? activeLink : inactiveLink}>
            <LayoutDashboard
              className="ml-2"
              size={22}
            />
            Dashboard
          </Link>
          <ul>
            {Menu.map((menu, index) => (
              <>
                <li>
                  <Link href={'/screening/get'} className={pathname.includes('/screening/get') ? activeLink : inactiveLink}>
                    <Filter
                      className="ml-2"
                      size={22}
                    />
                    Triagem
                    {menu.subMenuItems && (
                      <ChevronDown 
                        className='flex' 
                        onClick={() => setSubmenuOpen(!submenuOpen)}
                      />
                    )}   
                  </Link>
                </li>
                {menu.subMenuItems && submenuOpen && (
                  <ul className='mb-4'>
                    {menu.subMenuItems.map((submenuItem, index) => (
                      <li key={index} className='text-sm flex items-center cursor-pointer pl-4'>
                        {submenuItem.title}
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ))}
          </ul>
          <Link href={'/register'} className={pathname.includes('/register') ? activeLink : inactiveLink}>
            <UserPlus size={22} className="ml-2"/>
            Cadastro
          </Link>
          <Link href={'/greeting'} className={pathname.includes('/greeting') ? activeLink : inactiveLink}>
            <CheckSquare size={22} className="ml-2"/>
            Cumprimento
          </Link>
          <Link href={'/quality'} className={pathname.includes('/quality') ? activeLink : inactiveLink}>
            <BadgeCheck size={22} className="ml-2"/>
            Qualidade
          </Link>            
        </div>
        
        <div className='fixed bottom-0'>
          <Link href={'/help'} className={pathname.includes('/help') ? activeLink : inactiveLink}>
            <HelpCircle size={22} className="ml-2"/>
            Ajuda
          </Link>
          <Link href={'/settigns'} className={pathname.includes('/configuracao') ? activeLink : inactiveLink}>
            <Settings size={22} className="ml-2"/>
            Configuração
          </Link>
          <Link href={'/'} className={inactiveLink}>
            <LogOut size={22} className="ml-2"/>
            Sair
          </Link>            
        </div>
      </nav>
    </aside>
  )
}