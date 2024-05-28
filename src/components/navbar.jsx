let navlinks = ["home", "quote", "Restaurant", "Foods", "Contact"];

function Navbar() {
  return (
    <>
      <div id="wrapper" className="relative">
        <div
          id="nav_box"
          className="nav_box flex justify-between p-5 items-center sticky top-0 z-10"
        >
          <div className="logo-div flex md:gap-3 gap-1">
            <img src="https://flowbite.com/docs/images/logo.svg" />
            <h2 className="text-2xl font-semibold">GeekFoods</h2>
          </div>
          <div className="nav-links-list">
            <ul className="md:flex md:gap-8 sm:block hidden">
              {navlinks.map(function (list, index) {
                return (
                  <li
                    key={index}
                    className="font-semibold cursor-pointer hover:text-gray-400"
                  >
                    {" "}
                    {list}{" "}
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <button className="font-semibold bg-blue-500 hover:bg-blue-400 text-white px-2 py-1 rounded-md">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
