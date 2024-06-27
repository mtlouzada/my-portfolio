import { SectionTitle } from "../sectionTitle/sectionTitle";
import "./information.scss";

export function Information() {
    return (
        <div className="infos">
            
            <SectionTitle text="Languages"/>
            <div className="languages-info">
                <span>🇺🇸 EN Intermediary</span>
                <span>🇧🇷 PT BR Native Speaker</span>
            </div>

            <SectionTitle text="Education"/>
            <div className="educational-info">
                <span>🎓</span>
                <span>Systems Analysis and Development - Universidade Estásio de Sá</span>
            </div>
        </div>
            );
}