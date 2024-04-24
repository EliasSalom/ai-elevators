"use client";
import { FC } from "react";
import style from "../../styles/Elevator.module.scss";

interface Props {
  currentFloor: number;
  isMoving: boolean;
}
export const Elevator: FC<Props> = ({ currentFloor, isMoving }) => {
  return (
    <div className={`${style.elevator} ${isMoving ? style.moving : ""}`}>
      <div className={style.green}></div>
      <div className={style.passengers}></div>
    </div>
  );
};
