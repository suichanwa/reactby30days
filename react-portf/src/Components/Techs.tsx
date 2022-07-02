import React from "react";
import './techsStyle.css';


const Techs = () => {

    const techs = [
        "React",
        "React Native",
        "React Hooks",
        "Redux",
        "Typescript",
    ];

    return (
        <div>
            {techs.map((tech) => (
                <li className = 'techs'key={tech}>{tech}</li>
            ))}
        </div>
    );
}

export default Techs;