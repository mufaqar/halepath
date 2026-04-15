import Image from "next/image";

const ProTab3 = () => {

    return (
        <section className="py-16">
            <div className="md:w-2/3 w-full mx-auto">
                <h2 className="text-[#111827] mt-5 md:mt-0 font-bold text-3xl text-center mb-4">
                    Our Ordering Process
                </h2>
                <p className="text-lg font-normal text-title_Clr text-center mb-5">
                    Looking for custom packaging? Make it a breeze by following our four easy steps - soon you’ll be on your way
                    to meeting all your packaging needs!
                </p>
            </div>

            <div className="hale_container grid md:grid-cols-4 grid-cols-1 gap-5">
                <div className="bg-[#f5f5f5] rounded-2xl md:py-12 px-6 p-5 text-center">
                    <Image src="/images/box.svg" alt="icon" width={64} height={64} className="mx-auto mb-2" />
                    <h3 className="text-lg font-semibold text-title_Clr text-center mb-2">Customize your packaging</h3>
                    <p className="text-base font-normal text-title_Clr/80 text-center">
                        Choose from our vast selection...
                    </p>
                </div>

                <div className="bg-[#f5f5f5] rounded-2xl md:py-12 px-6 p-5 text-center">
                    <Image src="/images/box2.svg" alt="icon" width={64} height={64} className="mx-auto mb-2" />
                    <h3 className="text-lg font-semibold text-title_Clr text-center mb-2">Add to quote and submit</h3>
                    <p className="text-base font-normal text-title_Clr/80 text-center">
                        Submit quotation to our experts.
                    </p>
                </div>

                <div className="bg-[#f5f5f5] rounded-2xl md:py-12 px-6 p-5 text-center">
                    <Image src="/images/box3.svg" alt="icon" width={64} height={64} className="mx-auto mb-2" />
                    <h3 className="text-lg font-semibold text-title_Clr text-center mb-2">Consult with our expert</h3>
                    <p className="text-base font-normal text-title_Clr/80 text-center">
                        Get expert consultation.
                    </p>
                </div>

                <div className="bg-[#f5f5f5] rounded-2xl md:py-12 px-6 p-5 text-center">
                    <Image src="/images/box4.svg" alt="icon" width={64} height={64} className="mx-auto mb-2" />
                    <h3 className="text-lg font-semibold text-title_Clr text-center mb-2">Production & shipping</h3>
                    <p className="text-base font-normal text-title_Clr/80 text-center">
                        Sit back and relax.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProTab3;