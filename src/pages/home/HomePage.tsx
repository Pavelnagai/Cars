import {Header} from "../../widget/header/header";
import { useNavigate } from "react-router-dom";
export const HomePage = () => {
    const navigate = useNavigate()
    return (
        <div>
            <Header/>

            <button onClick={() => navigate('/game')}>Game</button>
        </div>
    )
}
