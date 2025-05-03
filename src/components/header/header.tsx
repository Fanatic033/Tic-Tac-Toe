import React from 'react'
import Image from 'next/image'
import logo from '@/public/logo.svg'
import { Profile } from '@/components/profile'
import { ArrowDownIcon } from '@/components/header'
import { UiButton } from '@/components/ui'

export const Header = () => {
	return (
		<header className='flex h-24 items-center px-8 bg-white shadow-lg'>
			<Image
				src={logo}
				alt={'logo'}
			/>
			<div className='w-px h-8 bg-slate-200 mx-6' />
			<UiButton
				variant={'primary'}
				size={'lg'}
				className={'w-44'}
			>
				Играть
			</UiButton>
			<button className='ml-auto flex items-center gap-2 text-teal-600 '>
				<Profile  name={'Fanatic033'} rating={1203} />
				<ArrowDownIcon />
			</button>
		</header>
	)
}
