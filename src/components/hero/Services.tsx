import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from "@mui/icons-material/School";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

function Services() {
  return (
    <div className="overflow-y-hidden mt-4">
      <div className="pb-16">
        <div className="pt-16">
          <div className="py-12 bg-gray-100">
            <div className="max-w-8xl mx-auto container">
              <div
                tabIndex={0}
                aria-label="group of cards"
                className="focus:outline-none flex flex-wrap items-center justify-center sm:justify-between"
              >
                <div
                  tabIndex={0}
                  aria-label="card 1"
                  className="focus:outline-none flex flex-col items-center py-6 md:py-0 px-6 w-full sm:w-1/2 md:w-1/4"
                >
                  <h4
                    tabIndex={0}
                    className="focus:outline-none text-lg font-medium leading-6 text-gray-800 text-center pt-5"
                  >
                    <HomeIcon /> Doma Objednáš
                  </h4>
                </div>
                <div
                  tabIndex={0}
                  aria-label="card 2"
                  className="focus:outline-none flex flex-col items-center py-6 md:py-0 px-6 w-full sm:w-1/2 md:w-1/4"
                >
                  <h4
                    tabIndex={0}
                    className="focus:outline-none text-lg font-medium leading-6 text-gray-800 text-center pt-5"
                  >
                    <SchoolIcon /> V škole vyzdhvineš
                  </h4>
                </div>
                <div
                  tabIndex={0}
                  aria-label="card 3"
                  className="focus:outline-none flex flex-col items-center py-6 md:py-0 px-6 w-full sm:w-1/2 md:w-1/4"
                >
                  <h4
                    tabIndex={0}
                    className="focus:outline-none text-lg font-medium leading-6 text-gray-800 text-center pt-5"
                  >
                    <ThumbUpIcon /> Ľahké že 👀
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
