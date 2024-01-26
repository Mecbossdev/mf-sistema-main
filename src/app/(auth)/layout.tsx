export interface ILayoutAuthProps {
  children?: React.ReactNode;
}

export default function LayoutAuth (props: ILayoutAuthProps) {
  return (
    <>
      <div className="flex justify-center items-center bg-[url(../assets/smas.svg)] bg-cover min-h-screen">
        <div>{props.children}</div>
      </div>
    </>
  );
}
