"use client";
import React, { FC, useEffect, useState } from "react";
import style from "../../styles/Building.module.scss";
import { Floor } from "@/components/Floor/Floor";
import { BuildingRoof } from "@/components/Building/BuildingRoof";

interface Props {
  Floor: React.ReactElement;
  onDataChange: (floorNumber: number) => void;
}
export const Building: FC = () => {
  const [currentFloor, setCurrentFloor] = useState(1);
  const [elevatorFloor, setElevatorFloor] = useState(1);
  const [isMoving, setIsMoving] = useState(false);
  useEffect(() => {
    setIsMoving(true);
    // Simulating elevator movement
    const elevatorTimer = setTimeout(() => {
      setElevatorFloor(currentFloor);
      setIsMoving(false);
    }, 2000);

    return () => clearTimeout(elevatorTimer);
  }, [currentFloor]);
  return (
    <div className={style.buildingContainer}>
      <BuildingRoof />
      <Floor handleFloorChange={setCurrentFloor} />
    </div>
  );
};
