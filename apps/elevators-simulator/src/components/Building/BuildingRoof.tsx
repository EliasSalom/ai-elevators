import { FC } from "react";
import style from "../../styles/Roof.module.scss";

export const BuildingRoof: FC = () => {
  return (
    <div className={style.roof}>
      <div className={style.roof1}></div>
      <div className={style.roof2}></div>
      <div className={style.roof3}></div>
      <div className={style.roof4}></div>
    </div>
  );
};
