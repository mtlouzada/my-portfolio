import Image from "next/image";
import "./header.scss";


export function Header(){
    return(
        <div className="header">
          <div>
            <h1>Hi, I´m Matheus! 🛹</h1>
            <h2>Web Developer</h2>
          </div>
          <Image
            src="/me.jpg"
            alt="Vercel Logo"
            width={325}
            height={277}
            priority
          />
        </div>
    );
}