import React from 'react'

const Steps = () => {
    return (
        <div className="bg-white/5 backdrop-blur-[10px] h-full max-w-[546px] mx-auto rounded-2xl md:px-14 md:py-8 p-8 md:gap-12 gap-12 flex flex-col">
            {steps.map((step, index) => (
                <div
                    key={step.id}
                    className="step"
                >
                    <span
                        className={` before_line ${index === steps.length - 1 ? "before:content-none" : ""
                            }`}
                    >
                        {`0${step.id}`}
                    </span>
                    <div>
                        <h4 className="">
                            {step.title}
                        </h4>
                        <p className="text-sm font-light text-white">{step.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Steps

const steps = [
    {
      id: 1,
      title: "Place Your Order",
      description:
        "Place your order online quickly and easily, share your requirements, receive a fast quote, and start your packaging project confidently.",
    },
    {
      id: 2,
      title: "Artwork Creation",
      description:
        "Our expert team creates custom packaging designs, provides mockups for approval, and ensures your branding looks professional and impactful.",
    },
    {
      id: 3,
      title: "Production",
      description:
        "Review final details, approve artwork and specifications, confirm pricing, and give production approval before we begin manufacturing your packaging.",
    },
    {
      id: 4,
      title: "Fast Doorstep Delivery",
      description:
        "Your finished packaging is carefully produced, securely packed, and delivered on time across the UK with reliable tracking.",
    },
];