import React from 'react'

const Steps = () => {
    return (
        <div className="bg-title_Clr h-full max-w-[546px] mx-auto rounded-2xl md:px-14 md:py-16 p-8 md:gap-24 gap-12 flex flex-col">
            {steps.map((step, index) => (
                <div
                    key={step.id}
                    className="relative flex md:flex-row flex-col md:gap-[50px] gap-7"
                >
                    <span
                        className={`text-xl font-semibold text-white bg-secondary p-[18px] border-[18px] border-primary rounded-full flex items-center justify-center w-[89px] h-[89px] before_line ${index === steps.length - 1 ? "before:content-none" : ""
                            }`}
                    >
                        {`0${step.id}`}
                    </span>
                    <div>
                        <h4 className="md:text-2xl text-xl font-semibold text-primary mb-3">
                            {step.title}
                        </h4>
                        <p className="text-base font-light text-white">{step.description}</p>
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
        title: "Book Online",
        description:
            "Lpsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
    },
    {
        id: 2,
        title: "Choose Design",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        id: 3,
        title: "Confirmation",
        description:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
        id: 4,
        title: "Delivery",
        description: "Lpsum is simply dummy text of the printing and typesetting is industry. Lorem Ipsum has been.",
    },
];