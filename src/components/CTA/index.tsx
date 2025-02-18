import Link from "next/link";
import React from "react";

const CAT = () => {
  return (
    <>
      <section className="bg-secondary py-7">
        <div className="container mx-auto px-4 flex md:flex-row flex-col items-center gap-7 justify-between">
          <div className="md:w-2/3 w-full flex flex-wrap items-center gap-3">
            <h6 className="md:text-xl text-lg font-normal text-white mr-4">
              Need More This Special Year?
            </h6>
            <p className="md:text-3xl text-xl font-normal text-primary">30%</p>
            <p className="md:text-3xl text-xl font-normal text-white">
              Discount Bulk Shopping
            </p>
          </div>
          <div className="md:w-1/3 w-full">
            <Link
              href="#"
              className="bg-primary hover:bg-white px-5 py-4 text-lg font-medium text-white hover:text-primary rounded-full border-2 border-primary flex w-fit ml-auto md:mr-0 mr-auto items-center gap-2"
            >
              Order Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CAT;
