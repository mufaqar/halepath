import React from 'react'

const PageBanner = ({ title, content }: any) => {
    return (
        <section className='py-16 bg-[#F7F7F7]' id="shapes-and-style">
            <div className='container mx-auto px-4'>
                <div>
                    <h2 className='md:text-4xl text-3xl font-semibold text-title_Clr text-center'>
                        {title}
                    </h2>
                    { content && <p className='text-lg font-normal text-txt_Clr text-center max-w-[800px] mx-auto mt-5'>
                        {content}
                    </p>}
                </div>
            </div>
        </section>
    )
}

export default PageBanner