import MenuBookIcon from "@mui/icons-material/MenuBook";

const MyBooks: React.FC = () => {
  return (
    <>
      <div className="w-full md:w-9/12 mx-2 h-64">
        <div className="bg-white p-3 shadow-sm rounded-sm">
          <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
            <MenuBookIcon />
            <span className="tracking-wide">Moje požičané knihy</span>
          </div>
          TEXT
        </div>
      </div>
    </>
  );
};

export default MyBooks;
