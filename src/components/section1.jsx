// import section1_image from "./assets/section1.avif";

function Section1() {
  return (
    <>
      <div
        id="section_wrapper"
        className="section1_wrapper w-full h-screen px-10 mb-10"
      >
        <div id="box" className="box md:flex block md:items-center ">
          <div id="left" className="left md:w-[45%] w-full ">
            <img src="section1.avif" className="h-[70vh] " />
          </div>

          <div
            id="right"
            className="right md:w-[58%] w-full p-16 bg-slate-100 md:h-[100vh] h-auto  flex flex-col justify-center "
          >
            <h2 className="md:text-3xl text-xl font-bold mb-10">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
              debitis.
            </h2>

            <p className="md:text-lg text-md mb-10">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
              molestiae! Quidem est esse numquam odio deleniti, beatae, magni
              dolores provident quaerat totam eos, aperiam architecto eius quis
              quibusdam fugiat dicta.
            </p>

            <button
              id="section1_button"
              className="px-3 py-2 bg-blue-800 hover:bg-white border border-blue-900 hover:text-blue-900 text-white rounded-md w-[40%]"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section1;
