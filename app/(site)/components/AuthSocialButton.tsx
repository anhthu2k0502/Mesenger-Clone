'use client'

import { IconType } from "react-icons"
import clsx from "clsx"

interface AuthSocialButtonProps{
    icon: IconType
    onClick: () => void
    disabled?:boolean
}
const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({icon: Icon, onClick, disabled}) => {
    return (
        <button disabled={disabled} type="button" onClick={onClick}
        className={clsx(`inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-fray-500 shadow-sm ring-1 ring-inset ring-gray-300
        hover:bg-gray-50 focus:outline-offset-0`, disabled && "cursor-default opacity-50")}>
            <Icon/>
        </button>

    )
}
export default AuthSocialButton