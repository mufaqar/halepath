import React from 'react'

const PageBanner = ({ title, content }: any) => {
    return (
        <section className='pt-14'>
            <div className='container mx-auto px-4'>
                <div>
                    <h1 className='md:text-[51px] md:leading-normal text-3xl font-bold text-title_Clr text-center mb-4'>
                        {title}
                    </h1>
                    { content && <p className='text-xl font-normal text-title_Clr text-center max-w-[820px] mx-auto'>
                        {content}
                    </p>}
                </div>
            </div>
        </section>
    )
}

export default PageBanner