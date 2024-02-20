"use client"
import { z } from "zod";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { PrimaryInputSearchIcon } from "@/components/primary-input";
import { User, LockKeyhole, Lock} from "lucide-react";
import { SyntheticEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "../../../assets/logo.svg"
import { useMutatePost } from "@/hook/useTriagemPost";
import { signIn } from "next-auth/react";
import Link from "next/link";


export default function SingIn() {
  const [error, setError] = useState()
  const [name, setName] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const { mutate, isSuccess } = useMutatePost()
  const router = useRouter()
  const API_URL = "http://localhost:8000/admin/auth/user/"

  async function handleSubmit(event: SyntheticEvent) {
    event.preventDefault()
    const result = await signIn('credentials', {
      name,
      password,
      redirect: false
    })

    if(result?.error) {
      console.log(error)
      return
    }

    router.replace('/home')
  }

  return (
    <div className="flex m-0">
      <div className="flex flex-col justify-start h-screen bg-primary-white-100 lg:w-1/2 p-20">
        <form className="w-96 m-auto mt-32 cover" onSubmit={handleSubmit}>
          <div className="flex flex-col mb-4 w-full">
              <div className="flex flex-col justify-start">
                <Image 
                  src={logo}
                  alt=''
                  sizes="180x38"
                  height={38}
                  width={180}
                />
                <h1 className="text-primary-gray-800 text-xl">Entre na sua Conta</h1>
                <p className="text-primary-gray-500 text-xs">Sistemas de gestão de processos</p>
              </div>
              <div >
                <PrimaryInputSearchIcon
                  value={name}
                  type="text"
                  className="h-10 w-full bg-primary-gray-200 border rounded-xl pl-5 text-gray-600 focus:outline-none focus:border-primary-gray-300 text-sm"
                  placeholder="Usuário"
                  updateValue={setName}
                />
              </div>
            </div>
            <div className="flex flex-col mb-6">
              <div>
                <PrimaryInputSearchIcon
                  value={password}
                  type="password"
                  className="h-10 w-full bg-primary-gray-200 border rounded-xl pl-5 text-gray-600 focus:outline-none focus:border-primary-gray-300 text-sm"
                  placeholder="Senha"
                  updateValue={setPassword}
                />
              </div>
            </div>
            <div className="flex flex-col mb-6 w-200">
              <button
                className="h-10 border-gray-300 border rounded-xl pl-10 bg-primary-blue-800 hover:bg-primary-blue-600 text-white font-bold py-2 px-4"
                type="submit"
              >
                <Link href={"/screening/get"}>
                  <span className="flex items-center justify-center">
                    Entrar
                  </span>                
                </Link>

              </button>
            </div>
        </form>
      </div>

    </div>
  )
}