import Image from 'next/image'
import avatar from '@/public/avatar.svg'

export const Profile = () => {
	return (
		<div className='flex items-center gap-2 text-start'>
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
