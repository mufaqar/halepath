"use client";

import Image from "next/image";

const ProTab2 = () => {
    // ✅ STATIC DATA (replacing ACF repeater + relationship)
    const productOptions = [
        {
            id: 1,
            title: "Add-on",
            products: [
                {
                    id: 1,
                    title: "Matte Lamination",
                    code: "ML-01",
                    image: "/images/addon/ci014.jpg",
                },
                {
                    id: 2,
                    title: "Gloss Lamination",
                    code: "GL-02",
                    image: "/images/addon/ci016.jpg",
                },
                {
                    id: 3,
                    title: "Soft Touch",
                    code: "ST-03",
                    image: "/images/addon/ci020.jpg",
                },
                {
                    id: 4,
                    title: "UV Coating",
                    code: "UV-04",
                    image: "/images/addon/ci021.jpg",
                },
            ],
        },
        {
            id: 2,
            title: "Addition Options",
            products: [
                {
                    id: 5,
                    title: "Kraft Paper",
                    code: "KP-01",
                    image: "/images/addition/op017.jpg",
                },
                {
                    id: 6,
                    title: "Art Paper",
                    code: "AP-02",
                    image: "/images/addition/op018.jpg",
                },
                {
                    id: 7,
                    title: "Card Stock",
                    code: "CS-03",
                    image: "/images/addition/op019.jpg",
                },
                {
                    id: 8,
                    title: "Recycled Paper",
                    code: "RP-04",
                    image: "/images/addition/op020.jpg",
                },
            ],
        },
        {
            id: 3,
            title: "Material Options",
            products: [
                {
                    id: 9,
                    title: "Offset Printing",
                    code: "OP-01",
                    image: "/images/material/op501.jpg",
                },
                {
                    id: 10,
                    title: "Digital Printing",
                    code: "DP-02",
                    image: "/images/material/op502.jpg",
                },
                {
                    id: 11,
                    title: "UV Printing",
                    code: "UV-03",
                    image: "/images/material/op503.jpg",
                },
                {
                    id: 12,
                    title: "Screen Printing",
                    code: "SP-04",
                    image: "/images/material/op504.jpg",
                },
            ],
        },
        {
            id: 4,
            title: "Finishing Options",
            products: [
                {
                    id: 13,
                    title: "Embossing",
                    code: "EM-01",
                    image: "/images/printing/op024.jpg",
                },
                {
                    id: 14,
                    title: "Debossing",
                    code: "DB-02",
                    image: "/images/printing/op027.jpg",
                },
                {
                    id: 15,
                    title: "Foil Stamping",
                    code: "FS-03",
                    image: "/images/printing/op030.jpg",
                },
            ],
        },
    ];


    return (
        <section className="">
            {productOptions.map((option) => (
                <div
                    key={option.id}
                    className="hale_container flex md:flex-row flex-col gap-5 border-b border-gray-300 py-16"
                >
                    {/* LEFT TITLE */}
                    <div className="md:w-1/5 w-full px-5">
                        <h3 className="text-2xl font-bold text-title_Clr">
                            {option.title}
                        </h3>
                    </div>

                    {/* RIGHT PRODUCTS GRID */}
                    <div className="md:w-4/5 w-full grid md:grid-cols-4 grid-cols-1 gap-5">
                        {option.products.map((product) => (
                            <div
                                key={product.id}
                                className="materialBox shadow-[0_0_2px_0_rgba(23,43,77,0.4)] hover:shadow-lg transition-all ease-in-out duration-300"
                            >
                                <div className="w-full">
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        width={500}
                                        height={500}
                                    />
                                </div>

                                <div className="px-5 py-6 text-center">
                                    <p className="text-base font-semibold text-title_Clr/80 mb-2">
                                        {product.code}
                                    </p>

                                    <h3 className="text-lg leading-none font-semibold text-title_Clr">
                                        <h3>{product.title}</h3>
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default ProTab2;