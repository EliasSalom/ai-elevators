import style from "../../styles/Details.module.scss";
import { CardDetails } from "@/components/Cards/DetailsCard";

interface Props {
  info: Array<{ title: string; description: string }>;
}
export const Details: React.FC<Props> = ({ info }) => {
  return (
    <div className={style.details}>
      <h2>Details</h2>
      <div>
        {info.map(({ title, description }, index) => (
          <CardDetails key={index} title={title} description={description} />
        ))}
      </div>
    </div>
  );
};
