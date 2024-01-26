'use client'
import { 
  LayoutDashboard, 
  Home, 
  Filter, 
  ClipboardSignature, 
  ListChecks, 
  BadgeCheck,
  LogOut,
  HelpCircle,
  Settings,
  Search,
  Wallet,
  ChevronDown
} 
  from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import logo from '../assets/logpng.png'
import { PrimaryInputSearchIcon } from './primary-input'
import { Menu } from '@/interfaces/menu-data'

export function Nav() {
  const [filterNav, setfilterNav] = useState<string>('')
  const [open, setOpen] = useState<boolean>(true);
  const [submenuOpen, setSubmenuOpen] = useState<boolean>(false);
  const inactiveLink = 'flex gap-4 mb-6 border-gray-600 transition ease-in-out delay-200 border-l-2 hover:border-purple-250 duration-150 ...';
  const activeLink = inactiveLink+'border-l-2 border-purple-250 text-purple-250';
  const pathname = usePathname();

  return (
    <aside className='p-6 text-gray-200'>
      <div className="flex justify-center">
        <Image src={logo} alt='logos' />
      </div>
      
      <div className="flex mb-2 bg-gray-600 items-center rounded-lg mt-4">
        <Search size={22} className='pl-2'/>
        <PrimaryInputSearchIcon
          type='text'
          className="w-full p-2 outline-none placeholder-gray-100 font-sans rounded-lg bg-gray-600"
          value={filterNav}
          updateValue={setfilterNav} 
          placeholder='Pesquisar...'
        />
        
      </div>
      <nav className='flex flex-col justify-center'>
          <p className='text-sm mb-4 mt-4'>Menu</p>
          <div></div>        

          <Link href={'/inicio'} className={pathname.includes('/inicio') ? activeLink : inactiveLink}>
            <Home size={22} className="ml-2"/>
            Inicial
          </Link>
          <Link href={'/dashboard'} className={pathname.includes('/dashboard') ? activeLink : inactiveLink}>
            <LayoutDashboard size={22} className="ml-2"/>
            Dashboard
          </Link>
        <ul>
          {Menu.map((menu, index) => (
            <>
              <li>
                <Link href={'/triagem'} className={pathname.includes('/triagem') ? activeLink : inactiveLink}>
                  <Filter size={22} className="ml-2"/>
                  Triagem
                  {menu.subMenuItems && (
                    <ChevronDown className='flex' onClick={() => setSubmenuOpen(!submenuOpen)}/>
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
          <Link href={'/cadastro'} className={pathname.includes('/cadastro') ? activeLink : inactiveLink}>
            <ClipboardSignature size={22} className="ml-2"/>
            Cadastro
          </Link>
          <Link href={'/cumprimento'} className={pathname.includes('/cumprimento') ? activeLink : inactiveLink}>
            <ListChecks size={22} className="ml-2"/>
            Cumprimento
          </Link>
          <Link href={'/qualidade'} className={pathname.includes('/qualidade') ? activeLink : inactiveLink}>
            <BadgeCheck size={22} className="ml-2"/>
            Qualidade
          </Link>
          <Link href={'/pagamento'} className={pathname.includes('/pagamento') ? activeLink : inactiveLink}>
            <Wallet size={22} className="ml-2"/>
            Pagamento
          </Link>
          <p className='text-sm mb-4 mt-4'>Configuração e ajuda</p>
          <Link href={'/help'} className={pathname.includes('/help') ? activeLink : inactiveLink}>
            <HelpCircle size={22} className="ml-2"/>
            Ajuda
          </Link>
          <Link href={'/configuracao'} className={pathname.includes('/configuracao') ? activeLink : inactiveLink}>
            <Settings size={22} className="ml-2"/>
            Configuração
          </Link>
          <Link href={'/'} className={inactiveLink}>
            <LogOut size={22} className="ml-2"/>
            Sair
          </Link>

        </nav>

    </aside>
  )
}