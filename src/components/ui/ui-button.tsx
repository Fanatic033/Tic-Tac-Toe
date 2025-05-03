import { FC, ReactNode } from 'react'
import clsx from 'clsx'

type ButtonSize = 'md' | 'lg'
type ButtonVariant = 'primary' | 'outline'

export interface Props {
	className?: string
	size?: ButtonSize
	variant?: ButtonVariant
	children: ReactNode
}

export const UiButton: FC<Props> = ({
	className,
	size = 'md',
	variant = 'primary',
	children
}) => {
	const buttonClassName = clsx(
		'transition-colors',
		className,
		{
			md: 'rounded px-6 py-2 text-sm leading-tight',
			lg: 'rounded-lg px-5 py-2 text-2xl leading-tight'
		}[size],
		{
			primary: 'bg-teal-600 text-white hover:bg-teal-500',
			outline: 'border border-teal-600 text-teal-600 hover:bg-teal-50'
		}[variant]
	)

	return <button className={buttonClassName}>{children}</button>
}
