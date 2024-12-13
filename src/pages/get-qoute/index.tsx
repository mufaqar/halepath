import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

const GetAQoute = () => {
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
      fetch('/api/get-qoute', {
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
      <section className='pt-16 bg-primary'>
        <div className='container mx-auto px-4'>
          <h2 className='md:text-4xl text-3xl font-semibold text-white text-center'>
            Request a Quote
          </h2>
          <p className='text-lg font-normal text-white text-center max-w-[800px] mx-auto mt-5'>
            Fill the form below and we reply with a custom quote for your needs.
          </p>
        </div>
      </section>
      <section className='py-16 grad_Bg'>
        <div className='container mx-auto max-w-[898px] px-4'>
          <form className="flex flex-col w-full gap-8 bg-white shadow-[0px_4px_10px_0px_rgb(0,0,0,0.1)] rounded-lg md:px-16 px-8 md:py-14 py-10 mt-8" onSubmit={handleSubmit(onSubmit)}>
            <div className='flex md:flex-row flex-col md:gap-8 gap-5'>
              <div className="w-full">
                <label htmlFor='name' className="text-lg font-normal leading-normal">Enter your Name</label>
                <input
                  className="text-lg font-normal text-txt_Clr bg-white px-4 py-2 mt-2 border border-[#CACACA] focus:border-secondary  outline-none rounded-md w-full"
                  type="text"
                  {...register('name', { required: true })}
                  id='name'
                  placeholder="Enter your Name" />
                {/* {errors.name && <span className='text-xs text-red-500'>This field is required</span>} */}
              </div>
              <div className="w-full">
                <label htmlFor='email' className="text-lg font-normal leading-normal">Email</label>
                <input
                  className="text-lg font-normal text-txt_Clr bg-white px-4 py-2 mt-2 border border-[#CACACA] focus:border-secondary  outline-none rounded-md w-full"
                  type="email"
                  {...register('email', { required: true })}
                  id='email'
                  placeholder="Email" />
                {/* {errors.email && <span className='text-xs text-red-500'>This field is required</span>} */}
              </div>
            </div>
            <div className='flex md:flex-row flex-col md:gap-8 gap-5'>
              <div className="w-full">
                <label htmlFor='pname' className="text-lg font-normal leading-normal">Product Name</label>
                <input
                  className="text-lg font-normal text-txt_Clr bg-white px-4 py-2 mt-2 border border-[#CACACA] focus:border-secondary  outline-none rounded-md w-full"
                  type="text"
                  {...register('pname', { required: true })}
                  id='pname'
                  placeholder="Product Name" />
                {/* {errors.pname && <span className='text-xs text-red-500'>This field is required</span>} */}
              </div>
              <div className="w-full">
                <label htmlFor='pcode' className="text-lg font-normal leading-normal">Select Code</label>
                <input
                  className="text-lg font-normal text-txt_Clr bg-white px-4 py-2 mt-2 border border-[#CACACA] focus:border-secondary  outline-none rounded-md w-full"
                  type="text"
                  {...register('pcode', { required: true })}
                  id='pcode'
                  placeholder="Select Code" />
                {/* {errors.pcode && <span className='text-xs text-red-500'>This field is required</span>} */}
              </div>
            </div>
            <div className='flex md:flex-row flex-col md:gap-8 gap-5'>
              <div className="w-full">
                <label htmlFor='quantity' className="text-lg font-normal leading-normal">Quantity</label>
                <input
                  className="text-lg font-normal text-txt_Clr bg-white px-4 py-2 mt-2 border border-[#CACACA] focus:border-secondary  outline-none rounded-md w-full"
                  type="number"
                  {...register('quantity', { required: true })}
                  id='quantity'
                  placeholder="Quantity" />
                {/* {errors.quantity && <span className='text-xs text-red-500'>This field is required</span>} */}
              </div>
              <div className="w-full">
                <label htmlFor='phone' className="text-lg font-normal leading-normal">Phone Number</label>
                <input
                  className="text-lg font-normal text-txt_Clr bg-white px-4 py-2 mt-2 border border-[#CACACA] focus:border-secondary  outline-none rounded-md w-full"
                  type="tel"
                  {...register('phone', { required: true })}
                  id='phone'
                  placeholder="Phone Number" />
                {/* {errors.phone && <span className='text-xs text-red-500'>This field is required</span>} */}
              </div>
            </div>
            <div className='flex md:flex-row flex-col md:gap-8 gap-5'>
              <div className="w-full">
                <label htmlFor='width' className="text-lg font-medium leading-normal hidden">Width</label>
                <input
                  className="text-lg font-normal text-txt_Clr bg-white px-4 py-2 mt-2 border border-[#CACACA] focus:border-secondary  outline-none rounded-md w-full"
                  type="number"
                  {...register('width', { required: true })}
                  id='width'
                  placeholder="Width" />
                {/* {errors.width && <span className='text-xs text-red-500'>This field is required</span>} */}
              </div>
              <div className="w-full">
                <label htmlFor='depth' className="text-lg font-medium leading-normal hidden">Depth</label>
                <input
                  className="text-lg font-normal text-txt_Clr bg-white px-4 py-2 mt-2 border border-[#CACACA] focus:border-secondary  outline-none rounded-md w-full"
                  type="number"
                  {...register('depth', { required: true })}
                  id='depth'
                  placeholder="Depth" />
                {/* {errors.depth && <span className='text-xs text-red-500'>This field is required</span>} */}
              </div>
              <div className="w-full">
                <label htmlFor='length' className="text-lg font-medium leading-normal hidden">Length</label>
                <input
                  className="text-lg font-normal text-txt_Clr bg-white px-4 py-2 mt-2 border border-[#CACACA] focus:border-secondary  outline-none rounded-md w-full"
                  type="number"
                  {...register('length', { required: true })}
                  id='length'
                  placeholder="Length" />
                {/* {errors.length && <span className='text-xs text-red-500'>This field is required</span>} */}
              </div>
              <div className='w-full flex flex-col gap-1'>
                <label htmlFor='dimension' className="text-lg font-medium leading-normal hidden"> Dimension</label>
                <select id='dimension'
                  {...register("dimension", { required: true })}
                  className='text-lg font-normal text-txt_Clr bg-white px-4 py-2 mt-2 border border-[#CACACA] focus:border-secondary  outline-none rounded-md w-full'>
                  <option>Inch</option>
                  <option>CM</option>
                  <option>MM</option>
                </select>
                {/* {errors.dimension && <span className='text-xs text-red-500'>This field is required</span>} */}
              </div>
            </div>
            <div className="w-full">
              <label htmlFor="file_input" className="text-lg font-normal leading-normal">Attach Your Design:</label>
              <input
                type="file"
                {...register('file_input', { required: true })}
                id="file_input"
                className="text-sm font-medium text-txt_Clr block w-full border border-[#CACACA] rounded-md focus:border-secondary disabled:opacity-50 disabled:pointer-events-none file:bg-gray-100 file:border-0 file:me-4 file:py-3 file:px-4" />
              {/* {errors.file_input && <span className='text-xs text-red-500'>This field is required</span>} */}
            </div>
            <div className="w-full">
              <label htmlFor='message' className="text-lg font-medium leading-normal hidden">Your Message</label>
              <textarea
                className="text-lg font-normal text-txt_Clr bg-white px-4 py-2 mt-2 border border-[#CACACA] focus:border-secondary  outline-none rounded-md w-full"
                id='message'
                {...register('message', { required: true })}
                rows={5}
                placeholder="Enter your Meassage"></textarea>
              {/* {errors.message && <span className='text-xs text-red-500'>This field is required</span>} */}
            </div>
            <div className="w-full flex md:flex-row flex-row gap-5 items-center">
              <label htmlFor='captcha' className="text-lg font-medium leading-normal">4 + 7 =</label>
              <input
                className="text-lg font-normal text-txt_Clr bg-white px-4 py-2 mt-2 border border-[#CACACA] focus:border-secondary outline-none rounded-0 w-[64px]"
                id='captcha'
                placeholder="" />
              <span className="text-lg font-medium leading-normal">Please verify.</span>
              {/* {errors.captcha && <span className='text-xs text-red-500'>This field is required</span>} */}
            </div>
            <div className="w-full">
              <button type='submit' className="text-sm font-semibold text-white bg-primary hover:bg-secondary px-4 py-3 rounded-md w-full">
                {loading ? 'SENDING...' : 'Get Inquiry'}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default GetAQoute