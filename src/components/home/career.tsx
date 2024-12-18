import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Career = () => {
    return (
        <section className='md:pt-24 pb-10 py-16 px-4 md:pr-20'>
            <div className='relative container mx-auto px-8 bg-[url("/images/career-bg.png")] bg-cover bg-no-repeat bg-center rounded-[20px] md:pt-14 md:pl-14 md:pr-0 p-10 md:pb-0 pb-0'>
                <div className='flex md:flex-row flex-col md:gap-8 gap-8'>
                    <div className='md:w-2/5 w-full'>
                        <h4 className='text-lg font-normal text-white mb-7 uppercase tracking-widest'>
                            Careers with Ball
                        </h4>
                        <h2 className='md:text-[56px] md:leading-normal text-4xl font-medium text-white mb-9'>
                            Be unstoppable.
                        </h2>
                        <p className='text-base font-normal text-white mb-6'>
                            <strong>We believe our packaging can change the world — and you
                                can too.</strong>  Join us on our journey to provide the most sustainable packaging solutions on the planet.
                        </p>
                        <p className='text-base font-normal text-white'>
                            With Ball, you’re working toward something bigger than
                            yourself.
                        </p>
                        <Link href="#" className='bg-secondary hover:bg-white px-8 py-2.5 text-sm font-bold text-white hover:text-secondary rounded-full border-2 border-secondary flex items-center gap-2 mt-8 w-fit'>
                            Explore Ball Careers
                        </Link>
                        <ul className='career_list text-white flex flex-col gap-4 md:mt-16 mt-10 md:mb-24 mb-10'>
                            <li className='text-base font-bold text-white'>
                                Medical, dental and vision insurance
                            </li>
                            <li className='text-base font-bold text-white'>
                                Employee stock purchase and company match
                            </li>
                            <li className='text-base font-bold text-white'>
                                MPaid holidays, vacation and sick leave & parental leave
                            </li>
                            <li className='text-base font-bold text-white'>
                                Life Insurance
                            </li>
                            <li className='text-base font-bold text-white'>
                                401(k) plan
                            </li>
                        </ul>
                    </div>
                    <div className='md:w-3/5 w-full flex md:flex-row flex-col items-start gap-5 md:-mr-20'>
                        <div className='w-full rounded-[13px] shadow-[0_233px_93px_0_rgba(1,97,207,0.05)] '>
                            <Image src="/images/team/team1.png" alt='team1.png' width={237} height={451} className='w-full h-full object-cover object-center rounded-[13px]' />
                        </div>
                        <div className='w-full rounded-[13px] shadow-[0_233px_93px_0_rgba(1,97,207,0.05)] '>
                            <Image src="/images/team/team2.png" alt='team2.png' width={237} height={451} className='w-full h-full object-cover object-center rounded-[13px]' />
                        </div>
                        <div className='w-full rounded-[13px] shadow-[0_233px_93px_0_rgba(1,97,207,0.05)] '>
                            <Image src="/images/team/team2.png" alt='team2.png' width={237} height={451} className='w-full h-full object-cover object-center rounded-[13px]' />
                        </div>
                        <div className='w-full rounded-[13px] shadow-[0_233px_93px_0_rgba(1,97,207,0.05)] '>
                            <Image src="/images/team/team3.png" alt='team3.png' width={237} height={451} className='w-full h-full object-cover object-center rounded-[13px]' />
                        </div>
                    </div>
                    <Image src="/images/team/teammain.png" alt='teammain.png' width={1096} height={1092} className='absolute bottom-0 right-0 ml-auto mr-0 md:w-2/3' />
                </div>
            </div>
        </section>
    )
}

export default Career