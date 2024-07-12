import { GithubIcon } from "../icons/github-icon";
import { InstaIcon } from "../icons/insta-icon";
import { LinkedinIcon } from "../icons/linkedin-icon";
import { TwitterIcon } from "../icons/twitter-icon";

import "./social-btns.scss"

export function SocialBtns() {
    return(
        <div className="social">
            
            <a href="https://www.linkedin.com/in/matheus-louzadaa/" target="black">
                <LinkedinIcon/>
            </a>
            <a href="https://github.com/mtlouzada" target="black">
                <GithubIcon/>
            </a>
            
        </div>
    )
}