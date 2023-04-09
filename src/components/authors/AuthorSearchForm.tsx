import Header from "../shared/Header";

const AuthorSearchForm: React.FC = () => {
  return (
    <>
      <Header name="Hľadať spisovateľa" />
      <div className="flex justify-center align-top">
        <form className="mt-4">
          <input
            name="form"
            className="w-full border rounded-md pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none focus:shadow-outline"
            placeholder="Hľadaj spisovateľa..."
          />
        </form>
      </div>
    </>
  );
};

export default AuthorSearchForm;
