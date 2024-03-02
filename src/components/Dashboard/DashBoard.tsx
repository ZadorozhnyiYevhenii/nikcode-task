"use client";

import { DragEvent, useState } from "react";
import { IWidget } from "@/types/IWidget";
import { WidgetItem } from "../WidgetItem/WidgetItem";
import { FaChartPie } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
import { PiChartDonutFill } from "react-icons/pi";
import "./DashBoard.scss";
import { UIButton } from "../UIButton/UIButton";

export const DashBoard = () => {
  const [widgets, setWidgets] = useState<IWidget[]>([
    { id: 1, title: "List", icon: <FaChartPie />, order: 1 },
    { id: 2, title: "PiCharm", icon: <IoStatsChart />, order: 2 },
    { id: 3, title: "TiCharm", icon: <PiChartDonutFill />, order: 3 },
  ]);

  const [currentWidget, setCurrentWidget] = useState<IWidget>();

  const dragStartHandler = (
    e: DragEvent<HTMLLIElement>,
    widget: IWidget
  ): void => {
    setCurrentWidget(widget);
  };

  const dragOverHandler = (e: DragEvent<HTMLLIElement>): void => {
    e.preventDefault();
  };

  const dropHandler = (e: DragEvent<HTMLLIElement>, widget: IWidget): void => {
    e.preventDefault();
    setWidgets(
      widgets.map((item) => {
        console.log(item.order, "drop");

        if (item.id === widget.id) {
          return {
            ...item,
            order: currentWidget ? currentWidget.order : item.order,
          };
        }

        if (item.id === currentWidget?.id) {
          return { ...item, order: widget.order };
        }

        return item;
      })
    );
  };

  const sortWidgets = (widget1: IWidget, widget2: IWidget) => {
    if (widget1.order > widget2.order) {
      return 1;
    } else {
      return -1;
    }
  };

  const addNewWidget = () => {
    const newWidget: IWidget = { id: Date.now(), title: "New Widget", icon: <PiChartDonutFill />, order: widgets.length + 1 };
    setWidgets([...widgets, newWidget]);
  }

  return (
    <nav className="sidebar">
      <h1 className="sidebar__heading">Dashboard</h1>
      <ul className="sidebar__list">
        {widgets.sort(sortWidgets).map((widget) => (
          <li
            key={widget.id}
            onDragStart={(e) => dragStartHandler(e, widget)}
            onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e) => dropHandler(e, widget)}
            draggable={true}
          >
            <WidgetItem widget={widget} />
          </li>
        ))}
      </ul>
      <UIButton onClickButton={addNewWidget}>Click</UIButton>
    </nav>
  );
};
