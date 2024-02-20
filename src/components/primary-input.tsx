import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string,
  value?: string | number,
  width?: string | number,
  height?: string | number,
  updateValue(value: any): void,
  placeholder: string
}

export function PrimaryInputSearchIcon({
  type, 
  value, 
  updateValue, 
  placeholder, 
  className,
  width, 
  height
}: InputProps) {
  return (
    <div>
      <input 
        type={type}
        className={className}
        width={width}
        height={height}
        value={value}
        placeholder={placeholder}
        onChange={event => updateValue(event.target.value)}
      />     
    </div>
  )

}