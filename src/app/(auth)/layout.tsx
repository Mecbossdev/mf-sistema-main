import Image from 'next/image';
import logo from '../../assets/logoHero.svg'

export interface IAuthLayoutProps {
  children?: React.ReactNode;
}

export default function AuthLayout(props: IAuthLayoutProps) {
  return (
    <>
      <div>
        <div className="flex">
          <div
            className="flex flex-col w-2/4 bg-cover lg:block"
          >
            <Image
              src={logo}
              alt=''
              sizes="180x38"
              height={900}
              width={920}
            />
          </div>
          
          <div className="flex flex-col justify-start h-screen bg-primary-white-100 lg:w-1/2 p-20">
            <div className="">{props.children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
