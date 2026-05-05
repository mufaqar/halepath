
const PageBanner = ({ title }: any) => {
    return (
        <section className="py-16 sm:h-[350px] h-[260px] flex items-center justify-center bg-cover bg-no-repeat bg-center bg-black/50 bg-blend-overlay"
            style={{ backgroundImage: "url('/images/about-page/s2.webp')" }}>
            <div className="hale_container">
                <h1 className="text-white font-bold text-3xl md:text-5xl lg:text-[51px]">
                    {title}
                </h1>
            </div>
        </section >
    )
}

export default PageBanner