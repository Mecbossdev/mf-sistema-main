'use client'
import LayoutComponent from "@/components/layout-component";
import { PrimaryInputSearchIcon } from "@/components/primary-input";
import { useUsersResponse } from "@/hook/useTriagemData";
import axios from "axios";
import { Plus, Search } from "lucide-react";
import Link from "next/link";

export default function GetScreening() {

  const {data} = useUsersResponse()
  console.log(data)


  return (
    <>
      <section >
        <h1 className="">Triagem</h1>
        <nav className="flex justify-between items-center">
          <div className="flex max-w-sm mb-2 items-center rounded-lg mt-4 bg-primary-gray-200">
            <Search size={26} className='pl-2 text-primary-gray-500'/>
            <PrimaryInputSearchIcon
              placeholder="Pesquise"
              className="max-w-sm p-2 outline-none focus:border-none placeholder-primary-gray-500 rounded-lg bg-primary-gray-200"
              updateValue={() => open}
            />
          </div>
          <div className="flex items-center px-6 outline-none placeholder-gray-50 font-semibold rounded-lg bg-primary-blue-800 text-gray-50">
            <Plus size={22} />
            <Link href={'/screening/new'} className="p-2">novo</Link>
          </div>
        </nav>
        <aside className="flex flex-col">
          <div className="grid grid-cols-7 text-sm text-primary-gray-500 text-center mb-6">
            <p>Data de Chegada</p>
            <p>N° do processo</p>
            <p>Sistema</p>
            <p>Tipo de multa</p>
            <p>Valor da multa</p>
            <p>Prazo Fatal</p>
            <p></p>
          </div>
            {data?.map((data) => (
              <>
                <ul key={data.id} className="grid grid-cols-7 text-sm bg-primary-gray-200 text-primary-gray-600 mb-6 rounded-lg text-center">
                  <li className="p-4">{data.name}</li>

                  <button className="flex p-2 m-auto justify-center bg-primary-gray-300 text-primary-blue-600 rounded-lg text-xs">
                    Visualizar tudo
                  </button>                     
                </ul>                   
              </>
            ))}
        </aside>
      </section>
    </>
  )
}