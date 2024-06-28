import { SectionTitle } from "../sectionTitle/sectionTitle";
import "./experience.scss";
import Image from "next/image";

export function Experience() {
    return (

        <div className="experience">
            <SectionTitle text="Experience" />
            <p>2 years doing projects putting into practice the knowledge of college and an extracurricular course</p>
            <div className="experience-time">

                <div className="experience-representation">
                    <Image
                        src="/react-icon.png"
                        alt="React Logo"
                        width={40}
                        height={40}
                        priority
                    />
                    <div className="timeMeasure-bar">
                        <div className="time-measure measure-1">
                            <span>2 years</span>
                        </div>
                    </div>
                </div>

                <div className="experience-representation">
                    <Image
                        src="/js-icon.png"
                        alt="JavaScript Logo"
                        width={40}
                        height={40}
                        priority
                    />
                    <div className="timeMeasure-bar">
                        <div className="time-measure measure-2">
                            <span>2 years</span>
                        </div>
                    </div>
                </div>

                <div className="experience-representation">
                    <Image
                        src="/ts-icon.png"
                        alt="TypeScript Logo"
                        width={40}
                        height={40}
                        priority
                    />
                     <div className="timeMeasure-bar">
                        <div className="time-measure measure-3">
                            <span>1 year</span>
                        </div>
                    </div>
                </div>

                <div className="experience-representation">
                    <Image
                        src="/Java-icon.png"
                        alt="Java Logo"
                        width={40}
                        height={40}
                        priority
                    />
                     <div className="timeMeasure-bar">
                        <div className="time-measure measure-4">
                            <span>1 year</span>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    )
}