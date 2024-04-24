import { Floor } from "@/components/Floor/Floor";
import { Building } from "@/components/Building/Building";
import { Details } from "@/components/Details/Details";
import { sortArray } from "@/utils/helpers/random";

export default function Home() {
  const prices = [100, 80, 60, 50, 20];
  const result = sortArray(prices);
  console.log(result);
  const info = [
    {
      title: "Elevators",
      description: "Elevators",
    },
    {
      title: "Floor",
      description: "Floor",
    },
  ];
  return (
    <main
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        height: "90vh",
        gap: "20px",
      }}
    >
      <Details info={info} />
      <Building />
    </main>
  );
}
