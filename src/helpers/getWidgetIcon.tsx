import { FaChartPie } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
import { PiChartDonutFill } from "react-icons/pi";

export const getIcon = (widgetType: string): JSX.Element => {
  switch (widgetType) {
    case "PieChart":
      return <FaChartPie />;
    case "StatsChart":
      return <IoStatsChart />;
    case "DonutChart":
      return <PiChartDonutFill />;
    default:
      return <></>;
  }
};