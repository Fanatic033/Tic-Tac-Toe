import Image from 'next/image'
import avatar from '@/public/avatar.svg'
import { FC } from 'react'
import clsx from 'clsx'

export interface Props {
	className?: string
}

export const Profile: FC<Props> = ({ className }) => {
	return (
		<div className={clsx('flex items-center gap-2 text-start', className)}>
			<Image
				src={avatar}
				alt={'avatar'}
			/>
			<div>
				<div className='text-lg leading-tight'>Fanatic033</div>
				<div className='text-slate-400 text-xs  leading-tight'>
					Рейтинг: 1230
				</div>
			</div>
		</div>
	)
}
