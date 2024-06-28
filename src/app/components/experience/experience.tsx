import { SectionTitle } from "../sectionTitle/sectionTitle";
import "./experience.scss";
import Image from "next/image";

export function Experience() {
    return (

        <div className="experience">
            <SectionTitle text="Experience" />
            <p>2 years doing projects putting into practice the knowledge of college and an extracurricular course</p>
            <div className="experience-time">
                <div>
                    <Image
                        src="/react-icon.png"
                        alt="React Logo"
                        width={40}
                        height={40}
                        priority
                    />
                    <div className="time-bar">
                        <div className="time-measure"></div>
                    </div>
                </div>

                <div>
                    <Image
                        src="/js-icon.png"
                        alt="JavaScript Logo"
                        width={40}
                        height={40}
                        priority
                    />
                </div>
                <div>
                    <Image
                        src="/ts-icon.png"
                        alt="TypeScript Logo"
                        width={40}
                        height={40}
                        priority
                    />
                </div>
                <div>
                    <Image
                        src="/Java-icon.png"
                        alt="Java Logo"
                        width={40}
                        height={40}
                        priority
                    />
                </div>
            </div>

        </div>

    )
}