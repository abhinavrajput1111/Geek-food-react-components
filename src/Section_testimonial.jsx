function Section_testimonial() {
  return (
    <>
      <div
        id="testimonial_wrapper"
        className="testimonial_wrapper w-full h-auto p-10 "
      >
        <div id="container" className="container md:flex gap-5">
          <div id="left" className="left md:w-[29%] w-full">
            <div className="mb-5 bg-slate-100 p-5 rounded-md">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                minima dicta amet, molestiae aliquam incidunt suscipit
                recusandae labore ratione doloremque, architecto et illo minus
                quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel
                ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem
                nam, eveniet enim ad inventore laudantium est illum voluptatem
                quis.
              </p>
            </div>

            <div className="flex gap-5">
              <img src="testimonial.avif" className="w-12 h-12 rounded-full" />
              <div>
                <h5 className="font-bold text-lg">Gladis Lennon</h5>
                <p className="text-gray-500">Head of SEO</p>
              </div>
            </div>
          </div>
          <div id="center" className="center md:w-[29%] w-full">
            <div className="mb-5 bg-slate-100 p-5 rounded-md">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
                vel quo deserunt quos expedita minima incidunt sed tempora, a
                architecto consectetur reprehenderit, in repellat voluptatum.
              </p>
            </div>

            <div className="flex gap-5 mb-5">
              <img src="testimonial.avif" className="w-12 h-12 rounded-full" />
              <div>
                <h5 className="font-bold text-lg">Gladis Lennon</h5>
                <p className="text-gray-500">Head of SEO</p>
              </div>
            </div>

            {/* second*/}

            <div className="mb-5 bg-slate-100 p-5 rounded-md">
              <p>
                LLorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                beatae incidunt perferendis soluta facilis voluptas dicta
                repudiandae quasi asperiores libero, exercitationem molestiae
                autem sapiente dolore nulla non consequatur. Eaque, dolores.
              </p>
            </div>

            <div className="flex gap-5 mb-5">
              <img src="testimonial.avif" className="w-12 h-12 rounded-full" />
              <div>
                <h5 className="font-bold text-lg">Gladis Lennon</h5>
                <p className="text-gray-500">Head of SEO</p>
              </div>
            </div>
          </div>

          {/* right div*/}
          <div id="right" className="right md:w-[29%] w-full">
            {/* first */}

            <div className="mb-5 bg-slate-100 p-5 rounded-md">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                doloribus eius aut unde, dolores accusantium!
              </p>
            </div>

            <div className="flex gap-5 mb-5">
              <img src="testimonial.avif" className="w-12 h-12 rounded-full" />
              <div>
                <h5 className="font-bold text-lg">Gladis Lennon</h5>
                <p className="text-gray-500">Head of SEO</p>
              </div>
            </div>

            {/* second */}

            <div className="mb-5 bg-slate-100 p-5 rounded-md">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                a voluptatum quidem nulla quisquam natus velit provident earum
                esse, odio numquam labore recusandae similique sunt.
              </p>
            </div>

            <div className="flex gap-5 mb-5">
              <img src="testimonial.avif" className="w-12 h-12 rounded-full" />
              <div>
                <h5 className="font-bold text-lg">Gladis Lennon</h5>
                <p className="text-gray-500">Head of SEO</p>
              </div>
            </div>

            {/* third */}

            <div className="mb-5 bg-slate-100 p-5 rounded-md">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
                ut necessitatibus, repudiandae qui dolor minima.
              </p>
            </div>

            <div className="flex gap-5 mb-5">
              <img src="testimonial.avif" className="w-12 h-12 rounded-full" />
              <div>
                <h5 className="font-bold text-lg">Gladis Lennon</h5>
                <p className="text-gray-500">Head of SEO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section_testimonial;
