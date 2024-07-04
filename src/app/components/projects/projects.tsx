import { SectionTitle } from "../sectionTitle/sectionTitle";
import "./projects.scss"

export function Projects(){
    return(
        <div className="container-projetos">
            <SectionTitle text="Projetos"/>
            <a href="https://github.com/mtlouzada/turing-Challenger" target="_black">Turing-Challenger</a>
            <a href="https://github.com/mtlouzada/salary-VS-inflation">salary-VS-inflation</a>
        </div>
    );
}