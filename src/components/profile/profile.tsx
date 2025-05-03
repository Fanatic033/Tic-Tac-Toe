import Image, { StaticImageData } from 'next/image'
import avatarSrc from '@/public/avatar.svg'
import { FC } from 'react'
import clsx from 'clsx'

interface Props {
	className?: string
	name: string
	rating: number
	avatar?: string | StaticImageData
}

export const Profile: FC<Props> = ({
	className,
	name,
	rating,
	avatar = avatarSrc
}) => {
	return (
		<div className={clsx('flex items-center gap-2 text-start', className)}>
			<Image
				src={avatar}
				alt={'avatar'}
				className='w-14 h-14'
			/>
			<div className='overflow-hidden'>
				<div className='text-lg leading-tight truncate'>{name}</div>
				<div className='text-slate-400 text-xs  leading-tight'>
					Рейтинг: {rating}
				</div>
			</div>
		</div>
	)
}
