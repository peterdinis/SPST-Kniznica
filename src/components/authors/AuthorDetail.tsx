import Header from "../shared/Header"
import { useRouter } from "next/router"

const AuthorDetail: React.FC = () => {
    const router = useRouter();
    const {id} = router.query;

    
    return (
        <>
            <Header name="Detail o spisovateľovi" />
            {id}
        </>
    )
}

export default AuthorDetail