function Footer() {

    return (
      <footer className="relative  pt-8 pb-6 mt-1">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-6/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                <a
                  href="https://www.creative-tim.com/product/notus-js"
                  className="text-blueGray-500 text-2xl hover:text-gray-800"
                >
                  &copy; SPŠT Knižnica 2023
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;