import SettingsIcon from '@mui/icons-material/Settings';

const TeacherOptions: React.FC = () => {
    return (
        <>
            <div className="w-full md:w-9/12 mx-2 h-64">
                <div className="bg-white p-3 shadow-sm rounded-sm">
                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                        <SettingsIcon />
                        <span className="tracking-wide">Moje možnosti</span>
                    </div>
                    TEXT
                </div>
            </div>
        </>
    )
}

export default TeacherOptions;