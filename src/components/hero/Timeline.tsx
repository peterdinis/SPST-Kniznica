import Header from "../shared/Header";

const TimeLine: React.FC = () => {
  return (
    <div>
      <Header name="Ako funguje applikácia" />
      <div className="containermx-auto w-full h-full">
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div
            className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
            style={{
              left: "50%",
            }}
          ></div>
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
            </div>
            <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-gray-800 text-xl">
                Prihlásenie
              </h3>
              <p className="text-lg leading-snug tracking-wide text-gray-900 text-opacity-100">
                Akonáhle sa prihlásí do systému žiak alebo učiteľ môže si požičať knihu/y.
              </p>
            </div>
          </div>
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
            </div>
            <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-white text-xl">Požičanie kníh</h3>
              <p className="text-lg font-medium leading-snug tracking-wide text-white text-opacity-100">
                Žiak alebo učiteľ si požiča knihu/y svoje požičané knihy nájde v odkaze na profile. Po požičaní knih/y príde adminovi informácia o novej objednávke.
              </p>
            </div>
          </div>
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
            </div>
            <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-gray-800 text-xl">
                Admin
              </h3>
              <p className="text-lg leading-snug tracking-wide text-gray-900 text-opacity-100">
                Admin vám pošle email o potvrdení objednávky
              </p>
            </div>
          </div>
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-lg">4</h1>
            </div>
            <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-white text-xl">Škola</h3>
              <p className="text-lg font-medium leading-snug tracking-wide text-white text-opacity-100">
                A v škole si vyzdvihnete svoje knihy.
              </p>
            </div>
          </div>

          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">5</h1>
            </div>
            <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-gray-800 text-xl">
                Iné informácie
              </h3>
              <p className="text-lg leading-snug tracking-wide text-gray-900 text-opacity-100">
                Po požičaní/objednaní knihy online. Je kniha dostupná na 1 týždeň.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
