
import { ReactNode } from "react";
import clsx from "clsx";

export default function Button({ isActive=true, onClick, isDisabled=false, label, children }: { isActive?: boolean, onClick: () => void, isDisabled?: boolean, label?: string, children:ReactNode }) {
    return <button
        onClick={onClick}
        disabled={isDisabled}
        className={clsx('py-1 px-2 bg-green-500 mx-2 rounded text-white text-base', isActive && 'bg-green-900')}
    >
        {children || label}
    </button>
}