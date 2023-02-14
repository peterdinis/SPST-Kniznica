import Link from "next/link";
import * as io from "socket.io-client";

/* const socket = io.connect(process.env.NEXT_PUBLIC_BACKEND_URL as string); */

/* console.log("Ping connected socket work", socket); */

const RoomsWrapper: React.FC = () => {
  return (
    <>
      <form>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
          <div className="mb-4">
            <div className="mb-2">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                htmlFor="password"
              >
                Meno
              </label>
              <input
                className="passwordInput shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
                id="Meno"
                type="text"
                autoFocus
                placeholder="Meno"
              />
            </div>
          </div>
          <div className="mb-2">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="password"
            >
              Priezivsko
            </label>
            <input
              className="passwordInput shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
              id="Priezivsko"
              type="text"
              autoFocus
              placeholder="Priezivsko"
            />
          </div>
          <div>
            <button
              className="mt-4 bg-red-700 rounded-lg p-2 text-white"
              type="submit"
            >
              Registrácia
            </button>
            <div>
              <Link
                className="mt-4 inline-block align-baseline font-bold text-2xl text-blue hover:text-blue-darker"
                href="/student/login"
              >
                Prihlásenie
              </Link>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default RoomsWrapper;
