import { FC } from "react";
import style from "../../styles/Floor.module.scss";

interface Props {
  floorNumber?: number;
  correntFloor?: number;
  handleFloorChange: (floorNumber: number) => void;
}
export const Floor: FC<Props> = ({ handleFloorChange }) => {
  const floorsNumbersArray = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div>
      {floorsNumbersArray.map((floorNumber, index) => (
        <div className={style.floor} key={index}>
          <div className={style.personSide}>
            <div className={style.floorNumber}>{floorNumber}</div>
            <button
              key={floorNumber}
              onClick={() => handleFloorChange(floorNumber)}
            >
              Floor {floorNumber}
            </button>
          </div>
          <div className={style.simulatorSide}></div>
        </div>
      ))}
    </div>
  );
};
