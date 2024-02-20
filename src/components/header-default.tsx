import ThemeSwitch from "./theme-switch";
import moment from "moment";
import 'moment/locale/pt-br';

type PropsLayout = {
  children?: React.ReactNode
}

export default function HeaderDefault({children}: PropsLayout) {

  return (
    <div className="flex items-center justify-between bg-primary-gray-100 font-sans font-bold h-16 border-b dark:bg-primary-gray-800 dark:border-none">
      <div className="flex text-sm">
        <p className="p-1 text-primary-gray-500">{moment().locale('pt').format('dddd')}, </p>
        <p className="p-1 text-primary-blue-600">{moment().locale('pt').format('D')} de </p>
        <p className="p-1 text-primary-blue-600">{moment().locale('pt').format('MMMM')}</p>
      </div>
      
      <div className="flex items-center">
        <ThemeSwitch />
        <div className="bg-purple-200 rounded-lg p-4">
          <p>R</p>
        </div>
        <p className="text-sm px-4">Richard</p>
      </div>
      {children}
    </div>  
  )
}