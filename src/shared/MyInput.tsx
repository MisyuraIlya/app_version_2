import React, { FC } from 'react'

interface MyInputProps {
  googleIcons: string
  register: any
  name: string
  type: string
  placeholder: string
}

const MyInput: FC<MyInputProps> = ({
  googleIcons,
  register,
  name,
  type,
  placeholder,
}) => {
  return (
    <div className="clientsAgentSearchWrapper">
      <div className="search-cont">
        <input type={type} {...register(name)} />
        <span className="material-symbols-outlined search-img">
          {googleIcons}
        </span>
      </div>
    </div>
  )
}

export default MyInput
