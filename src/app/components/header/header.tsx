import Image from "next/image";
import "./header.scss";


export function Header(){
    return(
        <div className="header">
          <div>
            <h1>Matheus Louzada</h1>
            <h2>Web Developer</h2>
          </div>
        </div>
    );
}