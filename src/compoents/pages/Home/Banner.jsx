

const Banner = () => {
    return (
        <div className="carousel mt-6 w-full h-[600px] mb-14">
        <div id="slide1" className="carousel-item relative w-full">
            <img src='https://i.ibb.co/7Ry7sQ0/pexels-pixabay-271619.jpg' className="w-full rounded-xl" />
            <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                <div className='text-white space-y-7 pl-12 w-1/2'>
                    <h2 className=' lg:text-6xl font-bold'>Affordable Price For LuxStay hotel booking</h2>
                    <p>There are many variations of pakage of  available, but the majority have suffered alteration in some form</p>
                    <div>
                        <button className="btn mb-4 btn-primary md:mb-5 mr-5">Discover More</button>
                        <button className="btn btn-outline btn-secondary">Latest Project</button>
                    </div>
                </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
            <img src='https://i.ibb.co/ZJZYYd8/pexels-konstantinos-eleftheriadis-916620-2034335.jpg' className="w-full rounded-xl" />
            <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                <div className='text-white space-y-7 pl-12 w-1/2'>
                <h2 className=' lg:text-6xl font-bold'>Affordable Price For LuxStay hotel booking</h2>
                    <p>There are many variations of pakage of  available, but the majority have suffered alteration in some form</p>
                    <div>
                        <button className="btn btn-primary mr-5">Discover More</button>
                        <button className="btn btn-outline btn-secondary">Latest Project</button>
                    </div>
                </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
            <img src='https://i.ibb.co/MBKm0RS/pexels-pixabay-258154.jpg' className="w-full rounded-xl" />
            <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                <div className='text-white space-y-7 pl-12 w-1/2'>
                <h2 className=' lg:text-6xl font-bold'>Affordable Price For LuxStay hotel booking</h2>
                    <p>There are many variations of pakage of  available, but the majority have suffered alteration in some form</p>
                    <div>
                        <button className="btn btn-primary mr-5">Discover More</button>
                        <button className="btn btn-outline btn-secondary">Latest Project</button>
                    </div>
                </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
            <img src='https://i.ibb.co/SJgZm5f/pexels-enginakyurt-1579253.jpg' className="w-full rounded-xl" />
            <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                <div className='text-white space-y-7 pl-12 w-1/2'>
                <h2 className=' lg:text-6xl font-bold'>Affordable Price For LuxStay hotel booking</h2>
                    <p>There are many variations of pakage of  available, but the majority have suffered alteration in some form</p>
                    <div>
                        <button className="btn btn-primary mr-5">Discover More</button>
                        <button className="btn btn-outline btn-secondary">Latest Project</button>
                    </div>
                </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
        </div>
    </div>
    );
};

export default Banner;