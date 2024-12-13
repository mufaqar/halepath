import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";

function Qoute_Form() {
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
    SendMail();
    function SendMail() {
      fetch("/api/email", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => {
        console.log("Response received");
        if (res.status === 200) {
          console.log("Response succeeded!");
          alert("Message Successfully send.!");
          reset();
          setLoading(false);
        }
      });
    }
  };

  return (
    <div className="shadow-[0_4px_15px_0_rgba(0,0,0,0.15)]">
      <h2 className="text-2xl font-semibold text-white px-8 py-3.5 bg-secondary">
        Get A Quote
      </h2>
      <form
        className="grid w-full gap-4 items-center bg-[#F7F7F7] px-5 py-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex md:flex-row flex-col md:gap-3 gap-5">
          <div className="w-full">
            <label
              htmlFor="name"
              className="text-sm font-medium leading-none hidden"
            >
              Name
            </label>
            <input
              className="text-sm font-medium text-txt_Clr bg-white p-4 border border-[#CACACA] focus:border-secondary  outline-none rounded-[5px] w-full"
              type="text"
              {...register("name", { required: true })}
              id="name"
              placeholder="Your Name"
            />
            {/* {errors.name && <span className='text-xs text-red-500'>This field is required</span>} */}
          </div>
          <div className="w-full">
            <label
              htmlFor="email"
              className="text-sm font-medium leading-none hidden"
            >
              Email Address
            </label>
            <input
              className="text-sm font-medium text-txt_Clr bg-white p-4 border border-[#CACACA] focus:border-secondary  outline-none rounded-[5px] w-full"
              type="email"
              {...register("email", { required: true })}
              id="email"
              placeholder="Email  Address"
            />
            {/* {errors.email && <span className='text-xs text-red-500'>This field is required</span>} */}
          </div>
        </div>
        <div className="w-full flex gap-3">
          <div className="w-1/2">
            <label
              htmlFor="phone"
              className="text-sm font-medium leading-none hidden"
            >
              Phone Number
            </label>
            <input
              className="text-sm font-medium text-txt_Clr bg-white p-4 border border-[#CACACA] focus:border-secondary  outline-none rounded-[5px] w-full"
              type="tel"
              {...register("phone")}
              id="phone"
              placeholder="Phone  Number"
            />
          </div>
          <div className="w-1/2">
            <label
              htmlFor="quantity"
              className="text-sm font-medium leading-none hidden"
            >
              Quantity
            </label>
            <input
              className="text-sm font-medium text-txt_Clr bg-white p-4 border border-[#CACACA] focus:border-secondary  outline-none rounded-[5px] w-full"
              type="number"
              {...register("quantity", { required: true })}
              id="quantity"
              placeholder="Quantity *"
            />
            {/* {errors.quantity && <span className='text-xs text-red-500'>This field is required</span>} */}
          </div>
          {/* {errors.phone && <span className='text-xs text-red-500'>This field is required</span>} */}
        </div>

        <div className="w-full flex gap-3">
          <div className="w-1/3">
            <label
              htmlFor="Length"
              className="text-sm font-medium leading-none hidden"
            >
              Length
            </label>
            <input
              className="text-sm font-medium text-txt_Clr bg-white p-4 border border-[#CACACA] focus:border-secondary  outline-none rounded-[5px] w-full"
              type="number"
              {...register("Length", { required: true })}
              id="Length"
              placeholder="Length"
            />
          </div>
          <div className="w-1/3">
            <label
              htmlFor="Width"
              className="text-sm font-medium leading-none hidden"
            >
              Width
            </label>
            <input
              className="text-sm font-medium text-txt_Clr bg-white p-4 border border-[#CACACA] focus:border-secondary  outline-none rounded-[5px] w-full"
              type="number"
              {...register("Width", { required: true })}
              id="Width"
              placeholder="Width"
            />
          </div>
          <div className="w-1/3">
            <label
              htmlFor="Depth"
              className="text-sm font-medium leading-none hidden"
            >
              Depth
            </label>
            <input
              className="text-sm font-medium text-txt_Clr bg-white p-4 border border-[#CACACA] focus:border-secondary  outline-none rounded-[5px] w-full"
              type="number"
              {...register("Depth", { required: true })}
              id="Depth"
              placeholder="Depth"
            />
          </div>
        </div>
        <div className="w-full flex gap-3">
          <div className="w-1/3">
            <label
              htmlFor="Unit"
              className="text-sm font-medium leading-none hidden"
            >
              Select Unit
            </label>
            <select
              className="text-sm font-medium text-txt_Clr bg-white p-4 border border-[#CACACA] focus:border-secondary  outline-none rounded-[5px] w-full"
              id="Unit"
              {...register("Unit", { required: true })}
            >
              <option value="Select Unit">Select Unit </option>
              <option value="Cosmetics Box">Inches</option>
              <option value="Cosmetics Box">CM</option>
              <option value="Cosmetics Box">MM</option>
            </select>
            {/* {errors.packing && <span className='text-xs text-red-500'>This field is required</span>} */}
          </div>
          <div className="w-1/3">
            <label
              htmlFor="packing"
              className="text-sm font-medium leading-none hidden"
            >
              Colors
            </label>
            <select
              className="text-sm font-medium text-txt_Clr bg-white p-4 border border-[#CACACA] focus:border-secondary  outline-none rounded-[5px] w-full"
              id="Colors"
              {...register("Colors", { required: true })}
            >
              <option value="Colors">Colors </option>
              <option value="Cosmetics Box">1 color</option>
              <option value="Cosmetics Box">2 colors</option>
              <option value="Cosmetics Box">3 colors</option>
              <option value="Cosmetics Box">4 colors</option>
              <option value="Cosmetics Box">5 colors</option>
            </select>
            {/* {errors.packing && <span className='text-xs text-red-500'>This field is required</span>} */}
          </div>
          <div className="w-1/3">
            <label
              htmlFor="packing"
              className="text-sm font-medium leading-none hidden"
            >
              Select Stock
            </label>
            <select
              className="text-sm font-medium text-txt_Clr bg-white p-4 border border-[#CACACA] focus:border-secondary  outline-none rounded-[5px] w-full"
              id="Stock"
              {...register("Stock", { required: true })}
            >
              <option value="Select Stock">Select Stock </option>
              <option value="Cosmetics Box">12 PT</option>
              <option value="Cosmetics Box">14 PT</option>
              <option value="Cosmetics Box">16 PT</option>
              <option value="Cosmetics Box">18 PT</option>
              <option value="Cosmetics Box">20 PT</option>
              <option value="Cosmetics Box">Kraft Stock</option>
              <option value="Cosmetics Box">Rigid Stock</option>
            </select>
            {/* {errors.packing && <span className='text-xs text-red-500'>This field is required</span>} */}
          </div>
        </div>
        <div className="w-full">
          <label
            htmlFor="detail"
            className="text-sm font-medium leading-none hidden"
          >
            Write your Message
          </label>
          <textarea
            className="text-sm font-medium text-txt_Clr bg-white p-4 border border-[#CACACA] focus:border-secondary  outline-none rounded-[5px] w-full"
            id="detail"
            {...register("detail", { required: true })}
            rows={5}
            placeholder="Write your Message"
          ></textarea>
          {/* {errors.detail && <span className='text-xs text-red-500'>This field is required</span>} */}
        </div>
        <div className="w-full">
          <button
            type="submit"
            className="text-base font-semibold text-white bg-primary hover:bg-secondary px-4 py-3 rounded-[5px] w-full"
          >
            {loading ? "SENDING..." : "Get Inquiry"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Qoute_Form;
