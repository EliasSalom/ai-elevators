import { FC } from "react";
import style from "../../styles/DetailsCard.module.scss";

interface Props {
  title: string;
  description: string;
}
export const CardDetails: FC<Props> = ({ title, description }) => {
  return (
    <div className={style.detailsCard}>
      <label className={style.title}>{title}</label>
      <label>{description}</label>
    </div>
  );
};
