import PageBanner from '@/components/page-banner';
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaPinterestP, FaRegCalendar, FaRegEnvelope, FaTwitter } from "react-icons/fa";

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    setLoading(true);
    SendMail()
    function SendMail() {
      fetch('/api/contact', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then((res) => {
        console.log('Response received');
        if (res.status === 200) {
          console.log('Response succeeded!');
          reset();
          setLoading(false);
        }
      });
    }
  }
  return (
    <>
      <PageBanner title="Contact Us"
        content="Choose a packaging style for your custom boxes, start designing with us, and get your boxes with the most advanced printing techniques." />
      <section className='py-16'>
        <div className='container mx-auto px-4 grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-7'>
          <div>
            <h2 className='md:text-2xl text-2xl font-semibold text-title_Clr'>
              Let's Connect
            </h2>
            <p className='text-lg font-normal text-txt_Clr max-w-[700px] mt-2'>
              Don’t hesitate to contact us on also during the non-working hours / weekend on whatsapp. You will still get an answer in about 30 minutes.
            </p>
            <div>
              <form className="grid w-full gap-5 items-center bg-white drop-shadow-xl rounded-lg px-8 py-10 mt-8" onSubmit={handleSubmit(onSubmit)}>
                <div className='flex md:flex-row flex-col md:gap-5 gap-5'>
                  <div className="w-full">
                    <label htmlFor='fname' className="text-sm font-medium leading-none hidden">First Name</label>
                    <input
                      className="text-sm font-medium text-txt_Clr bg-white px-4 py-3 border border-[#CACACA] focus:border-secondary  outline-none rounded-md w-full"
                      type="text"
                      {...register('fname', { required: true })}
                      id='fname'
                      placeholder="First Name" />
                    {/* {errors.fname && <span className='text-xs text-red-500'>This field is required</span>} */}
                  </div>
                  <div className="w-full">
                    <label htmlFor='lname' className="text-sm font-medium leading-none hidden">Last Name</label>
                    <input
                      className="text-sm font-medium text-txt_Clr bg-white px-4 py-3 border border-[#CACACA] focus:border-secondary  outline-none rounded-md w-full"
                      type="text"
                      {...register('lname', { required: true })}
                      id='lname'
                      placeholder="Last Name" />
                    {/* {errors.lname && <span className='text-xs text-red-500'>This field is required</span>} */}
                  </div>
                </div>
                <div className='flex md:flex-row flex-col md:gap-5 gap-5'>
                  <div className="w-full">
                    <label htmlFor='email' className="text-sm font-medium leading-none hidden">Email  Address</label>
                    <input
                      className="text-sm font-medium text-txt_Clr bg-white px-4 py-3 border border-[#CACACA] focus:border-secondary  outline-none rounded-md w-full"
                      type="email"
                      {...register('email', { required: true })}
                      id='email'
                      placeholder="Email  Address" />
                    {/* {errors.email && <span className='text-xs text-red-500'>This field is required</span>} */}
                  </div>
                  <div className="w-full">
                    <label htmlFor='subject' className="text-sm font-medium leading-none hidden">Subject</label>
                    <input
                      className="text-sm font-medium text-txt_Clr bg-white px-4 py-3 border border-[#CACACA] focus:border-secondary  outline-none rounded-md w-full"
                      type="text"
                      {...register('subject', { required: true })}
                      id='subject'
                      placeholder="Subject" />
                    {/* {errors.subject && <span className='text-xs text-red-500'>This field is required</span>} */}
                  </div>
                </div>
                <div className="w-full">
                  <label htmlFor='message' className="text-sm font-medium leading-none hidden">Your Message</label>
                  <textarea
                    className="text-sm font-medium text-txt_Clr bg-white px-4 py-3 border border-[#CACACA] focus:border-secondary  outline-none rounded-md w-full"
                    id='message'
                    {...register('message', { required: true })}
                    rows={5}
                    placeholder="Write your message"></textarea>
                  {/* {errors.message && <span className='text-xs text-red-500'>This field is required</span>} */}
                </div>
                <div className="w-full">
                  <button type='submit' className="text-sm font-semibold text-white bg-primary hover:bg-secondary px-4 py-3 rounded-md w-full">
                    {loading ? 'SENDING...' : 'Get Inquiry'}
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div>
            <Image src="/images/contact-img.jpg" alt='img' width={612} height={408} className='rounded-lg h-full w-full object-cover' />
          </div>
        </div>
      </section>
      <section className='py-16'>
        <div className='container mx-auto px-4'>
          <div className='py-4 sm:py-8 w-full bg-right sm:bg-left lg:bg-center bg-cover rounded-lg flex justify-end px-4 sm:px-10 bg-[url("/images/contact-bg.jpg")]'>
            <div className='w-full sm:w-1/2 py-4'>
              <h2 className='md:text-3xl text-2xl font-semibold text-title_Clr'>
                Live Support
              </h2>
              <p className='text-lg font-normal text-txt_Clr max-w-[700px] mt-3'>
                Looking for a packaging whizz for your business needs? Let’s have a talk!
              </p>
              <h5 className='md:text-lg text-lg font-semibold text-title_Clr mt-8'>
                Toll-free Call Center
              </h5>
              <ul className='mt-6 flex flex-col gap-y-3'>
                <li>
                  <Link href="tel:+1(321)1235678" className='text-lg font-normal flex items-center gap-x-3 sm:gap-x-5 text-txt_Clr hover:text-primary'>
                    <span><FaPhoneAlt /> </span> +1 (321) 123 5678
                  </Link>
                </li>
                <li>
                  <Link href="tel:+1(321)1235678" className='text-lg font-normal flex items-center gap-x-3 sm:gap-x-5 text-txt_Clr hover:text-primary'>
                    <span><FaPhoneAlt /> </span> +1 (321) 123 5678
                  </Link>
                </li>
                <li>
                  <Link href="mailto:info@elitecustomboxes.com" className='text-lg font-normal flex items-center gap-x-3 sm:gap-x-5 text-txt_Clr hover:text-primary'>
                    <span><FaRegEnvelope /> </span> info@elitecustomboxes.com
                  </Link>
                </li>
                <li>
                  <span className='text-lg font-normal flex items-center gap-x-3 sm:gap-x-5 text-txt_Clr'>
                    <span><FaRegCalendar /> </span> 24/7
                  </span>
                </li>
                <li>
                  <span className='text-lg font-normal flex items-center gap-x-3 sm:gap-x-5 text-txt_Clr'>
                    <span><FaMapMarkerAlt /> </span> 520 N Veterans Pkwy Addison, IL 60101 United States
                  </span>
                </li>
              </ul>
              <h5 className='md:text-lg text-lg font-semibold text-title_Clr mt-8'>
                Follow Us:
              </h5>
              <ul className='flex md:gap-6 gap-2 mt-5'>
                <li>
                  <Link href="#" className='text-xl hover:scale-125 inline-block hover:text-secondary text-primary'>
                    <FaLinkedinIn />
                  </Link>
                </li>
                <li>
                  <Link href="#" className='text-xl hover:scale-125 inline-block hover:text-secondary text-primary'>
                    <FaFacebookF />
                  </Link>
                </li>
                <li>
                  <Link href="#" className='text-xl hover:scale-125 inline-block hover:text-secondary text-primary'>
                    <FaInstagram />
                  </Link>
                </li>
                <li>
                  <Link href="#" className='text-xl hover:scale-125 inline-block hover:text-secondary text-primary'>
                    <FaTwitter />
                  </Link>
                </li>
                <li>
                  <Link href="#" className='text-xl hover:scale-125 inline-block hover:text-secondary text-primary'>
                    <FaPinterestP />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactUs