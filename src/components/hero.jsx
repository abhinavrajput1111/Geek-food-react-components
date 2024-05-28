function Hero() {
  return (
    <>
      <div
        id="hero_wrapper"
        className="hero_wrapper bg-red-300 h-[90vh] w-full mb-16"
      >
        <div id="box" className="hero-section h-full ">
          <div className="box-text p-6 pt-24 pl-16">
            <div className="box-heading w-[60%]">
              <h1 className="text-5xl font-black text-center text-gray-900">
                Let us find your
              </h1>
              <h2 className="text-5xl font-black text-pink-500 text-center">
                Forever Food.
              </h2>
              <p className="text-lg text-center text-black">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nesciunt illo tenetur fuga ducimus numquam ea!
              </p>

              <div className="flex gap-6 mt-6 ml-10">
                <button className="pink bg-pink-600 hover:bg-pink-400 hover:text-black text-white text-md px-5 py-3 rounded-md">
                  Search Now
                </button>
                <button className="white bg-white hover:bg-gray-200 text-black px-5 py-3 rounded-md">
                  Know More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
