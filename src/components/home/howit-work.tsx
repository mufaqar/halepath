import React from 'react'
import ServiceBox from './serviceBox'

function HowIt_work() {
    return (
        <section className='py-16 bg-[#F7F7F7]'>
            <div className='container mx-auto px-4'>
                <div>
                    <h2 className='md:text-4xl text-3xl font-semibold text-title_Clr text-center'>
                        How it works
                    </h2>
                    <p className='text-lg font-normal text-txt_Clr text-center max-w-[880px] mx-auto mt-5'>
                        Select a packaging style, quantity, and choose from custom or stock sizes – then start designing your custom boxes. Add customization options like images, text, and any color your brand requires. As you design you'll see an instant quote so you know exactly what your final order will come to.
                    </p>
                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-7 mt-10'>
                    <ServiceBox
                        title="Tiny minimums. No maximums."
                        content="No matter the size of your custom packaging order, you'll get the best boxes at prices to match."
                        img="/images/tiny.png"
                    />
                    <ServiceBox
                        title="Instant quotes"
                        content="Pick your style, design your boxes, and get an instant quote."
                        img="/images/qoutes.png"
                    />
                    <ServiceBox
                        title="Fast turnarounds"
                        content="Eligible orders may ship within 10 days or less with priority turnaround options."
                        img="/images/turns.png"
                    />
                </div>
            </div>
        </section>
    )
}

export default HowIt_work