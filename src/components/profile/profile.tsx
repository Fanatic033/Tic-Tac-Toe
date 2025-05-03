import Image from 'next/image'
import avatar from '@/public/avatar.svg'
import { FC } from 'react'
import clsx from 'clsx'
import { ClassName } from '@/types/types'

export const Profile: FC<ClassName> = ({ className }) => {
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
