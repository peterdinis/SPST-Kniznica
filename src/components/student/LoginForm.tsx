import Header from "../shared/Header";

const LoginForm: React.FC = () => {
  return (
    <>
      <Header name="Prihlásenie žiak" />
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
                /*   {...register('username', {
                  required: true,
                  minLength: 5,
                  min: 5,
                })} */
              />

              {/*  <p className="text-red-800">
                {errors.username && errors.username.message}
              </p> */}
            </div>
          </div>
          <div className="mb-2">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="username"
            >
              Heslo
            </label>
            <input
              className="emailInput shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="password"
              type="pasword"
              /*  type={passwordShown ? 'text' : 'password'} */
              placeholder="******************"
              autoFocus
              /*  {...register('password', {
                required: true,
                minLength: 5,
                min: 5,
              })} */
            />
            {/*  <p className="text-red-800">
              {errors.password && errors.password.message}
            </p> */}
            <button>Zobraziť heslo</button>
          </div>
          <div>
            <button className="mt-4 bg-red-700 rounded-lg p-2 text-white" type="submit">
              Prihlásenie
            </button>
            <div>
              <a
                className="mt-4 inline-block align-baseline font-bold text-2xl text-blue hover:text-blue-darker"
                href="/student/register"
              >
                Registrácia tu
              </a>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
