const Carousel = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full h-[600px]">
                <img  src="https://images-cdn.ubuy.co.in/643036ae837601387535abd3-newqz-ceramic-vases-set-of-3-for-home.jpg" className="w-full rounded" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full h-[600px]">
                <img src="https://cdn.shopify.com/s/files/1/0836/2769/files/pottery-vases-decoration_600x600.jpg?v=1667196167" className="w-full rounded" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a> 
                <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full h-[600px]">
                <img src="https://c02.purpledshub.com/uploads/sites/42/2022/04/Porcelain-cbd3f18.jpg" className="w-full rounded" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a> 
                <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide4" className="carousel-item relative w-full h-[600px]">
                <img src="https://www.tbsnews.net/sites/default/files/styles/infograph/public/images/2021/11/16/whatsapp_image_2021-11-13_at_00.06.42.jpeg" className="w-full rounded" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">❮</a> 
                <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Carousel;