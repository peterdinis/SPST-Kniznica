import MessageIcon from '@mui/icons-material/Message';

const MyMessages: React.FC = () =>{
    return (
        <div className="mt-10 w-full md:w-9/12 mx-2 h-64">
        <div className="bg-white p-3 shadow-sm rounded-sm">
          <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
            <MessageIcon />
            <span className="tracking-wide">Moje správy</span>
          </div>
        </div>
      </div>
    )
}

export default MyMessages;