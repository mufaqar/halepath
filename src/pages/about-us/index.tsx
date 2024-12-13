import PageBanner from '@/components/page-banner'
import React from 'react'

const AboutUs = () => {
  return (
    <>
      <PageBanner title="About Us" />
      <section className='container mx-auto px-3'>
        <section className='py-16'>
          <div className='container mx-auto px-4'>
            <div>
              <p className='text-lg font-normal text-txt_Clr mt-5'>
                We live in a fast-paced world where advancements in technology have allowed people to make informed decisions and better choices. Today, nearly everyone uses a smartphone or laptop to know about consumer products and all other details that will help them make best buying decision. In the business sector, due to significant competition, there is a clear shift from product-centric to a customer-centric approach. Another reason for the shift is ambitious entrepreneurs and small-businessmen running their own brands to better serve the customers.
              </p>
              <p className='text-lg font-normal text-txt_Clr mt-5'>
                We all know the famous 4 Ps of marketing (Product, Price, Place, and Promotion). However, another P that has been added to the mix is Packaging. According to research studies, an average consumer takes less than 20 seconds to make a buying decision. Also, almost 72% of the population says that their buying decision is influenced by the packaging design.
              </p>
              <p className='text-lg font-normal text-txt_Clr mt-5'>
                The first thing that allows the average consumer to make the purchase decision is none other than the ‘packaging of the product. People usually buy from brands there are familiar with, such as startups, and business companies have to think out of the box to make an impression on potential customers.
              </p>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}

export default AboutUs