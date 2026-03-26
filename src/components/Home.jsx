import { useContext } from "react";
import {AppContext} from '../AppContext.jsx'
const Home = () => {
    
    const { projectTitle } = useContext(AppContext);
    return (
        <div>
            <h1>{projectTitle}</h1>
            <p>This is the Home page.</p>
        </div>
    )
}

export default Home;