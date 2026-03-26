import { AppContext } from "../AppContext";
import { useContext } from "react";

const About = () => {
    const { projectTitle } = useContext(AppContext);
    return (
        <div>
            <h1>{projectTitle}</h1>
            <p>This is the About page.</p>
        </div>
    )
}

export default About;