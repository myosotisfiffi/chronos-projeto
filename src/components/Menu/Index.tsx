import { TimerIcon } from "lucide-react";
import style from './style.module.css'

export function Menu(){
return(
  
    <div className={`${style.menu} ${style.paragraph}`}>
     <a className={style.menuLink} href="#">
      <TimerIcon />
      <span>Chronos</span>
     </a>
     </div>
    );
}