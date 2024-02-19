'use client'
import { PrimaryInputSearchIcon } from '@/components/primary-input';
import { useMutatePost } from '@/hook/useTriagemPost';
import { useRouter } from 'next/navigation';
import { useState } from 'react';


export interface INewScreeningProps {
}

export default function NewScreening (props: INewScreeningProps) {

  const [name, setName] = useState<string>("")
  const [senha, setDescription] = useState<string>("")
  const [error, setError] = useState("")
  const router = useRouter()

  const submit = async () => {
    try {
      const data = {
        name,
        senha,
      };

      const response = await fetch("https://localhost:7201/api/Post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const responseData = await response.json();

        localStorage.setItem("token", responseData.token);

        router.push("/listing/get");
      } else {
        setError("Falha na autenticação");
        // console.error("Falha na autenticação");
      }
    } catch (error) {
      console.error("Erro durante a autenticação", error);
    }
  };

  return (
    <div className='mx-40'>
      <form>
        <h1>Novo Processo</h1>
        <div className='grid'>
          <div>
            <PrimaryInputSearchIcon
              placeholder='00000000-00.0000.0.00.0000'
              className="h-10 w-96 bg-primary-gray-200 border rounded-xl pl-5 text-gray-600 focus:outline-none focus:border-primary-gray-300 text-sm"
              updateValue={submit}
            />
          </div>

          <div className='grid grid-cols-4 gap-2'>
            <div>
              <PrimaryInputSearchIcon
                placeholder='Data'
                className="h-10 w-56 bg-primary-gray-200 border rounded-xl pl-5 text-gray-600 focus:outline-none focus:border-primary-gray-300 text-sm"
                updateValue={submit}
              />
            </div>
            <div>
              <PrimaryInputSearchIcon
                placeholder='00:00'
                className="h-10 w-56 bg-primary-gray-200 border rounded-xl pl-5 text-gray-600 focus:outline-none focus:border-primary-gray-300 text-sm"
                updateValue={submit}
              />
            </div>
            <div>
              <PrimaryInputSearchIcon
                placeholder='Selecione'
                className="h-10 w-56 bg-primary-gray-200 border rounded-xl pl-5 text-gray-600 focus:outline-none focus:border-primary-gray-300 text-sm"
                updateValue={submit}
              />
            </div>
            <div>
              <PrimaryInputSearchIcon
                placeholder='Selecione'
                className="h-10 w-56  bg-primary-gray-200 border rounded-xl pl-5 text-gray-600 focus:outline-none focus:border-primary-gray-300 text-sm"
                updateValue={submit}
              />
            </div>
            <div className='grid grid-cols-subgrid gap-4 col-span-3'>
              <div>
                <PrimaryInputSearchIcon
                  placeholder='Nome do tutor'
                  className="h-10 bg-primary-gray-200 border rounded-xl pl-5 text-gray-600 focus:outline-none focus:border-primary-gray-300 text-sm"
                  updateValue={submit}
                />
              </div>
              <div className='col-start-2'>
                <PrimaryInputSearchIcon
                  placeholder='00.000.000/0000.00'
                  className="h-10 bg-primary-gray-200 border rounded-xl pl-5 text-gray-600 focus:outline-none focus:border-primary-gray-300 text-sm"
                  updateValue={submit}
                />
              </div>            
            </div>
            <div className='grid grid-cols-subgrid gap-4 col-span-3'>
              <div>
                <PrimaryInputSearchIcon
                  placeholder='00000000-00.0000.0.00.0000'
                  className="h-10 bg-primary-gray-200 border rounded-xl pl-5 text-gray-600 focus:outline-none focus:border-primary-gray-300 text-sm"
                  updateValue={submit}
                />
              </div>
              <div className='col-start-2'>
                <PrimaryInputSearchIcon
                  placeholder='00000000-00.0000.0.00.0000'
                  className="h-10 bg-primary-gray-200 border rounded-xl pl-5 text-gray-600 focus:outline-none focus:border-primary-gray-300 text-sm"
                  updateValue={submit}
                />
              </div>            
            </div>            
          </div>


        </div>

        <button>
          confirma
        </button>
      </form>    
    </div>

  );
}
