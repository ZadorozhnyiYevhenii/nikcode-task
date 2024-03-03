"use client";

import { DragEvent, useState } from "react";
import cn from "classnames";
import { UIButton } from "../UIButton/UIButton";
import { FaChartPie } from "react-icons/fa";
import { IWidget } from "@/types/IWidget";
import { WidgetItem } from "../WidgetItem/WidgetItem";
import { IoStatsChart } from "react-icons/io5";
import { PiChartDonutFill } from "react-icons/pi";
import { NewWidgetForm } from "../NewWidgetForm/NewWidgetForm";
import { getIcon } from "@/helpers/getWidgetIcon";
import { sortWidgets } from "@/helpers/sortWidgets";
import "./DashBoard.scss";

export const DashBoard = () => {
  const [widgets, setWidgets] = useState<IWidget[]>([
    { id: 1, title: "Pie Chart", icon: <FaChartPie />, order: 1 },
    { id: 2, title: "Stats Chart", icon: <IoStatsChart />, order: 2 },
    { id: 3, title: "Donut Chart", icon: <PiChartDonutFill />, order: 3 },
  ]);

  const [currentWidget, setCurrentWidget] = useState<IWidget>();

  const [showForm, setShowForm] = useState(false);
  const [widgetType, setWidgetType] = useState("");
  const [widgetName, setWidgetName] = useState("");

  const [isDragging, setIsDragging] = useState(false);

  const dragStartHandler = (widget: IWidget): void => {
    setCurrentWidget(widget);
    setIsDragging(true);
  };

  const dragOverHandler = (e: DragEvent<HTMLLIElement>): void => {
    e.preventDefault();
    setIsDragging(false);
  };

  const dropHandler = (e: DragEvent<HTMLLIElement>, widget: IWidget): void => {
    e.preventDefault();
    setWidgets(
      widgets.map((item) => {
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

  const addNewWidget = () => {
    setShowForm((prev) => !prev);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (widgetName.trim().length < 3 || !widgetType) {
      return;
    }

    const newWidget: IWidget = {
      id: Date.now(),
      title: widgetName,
      icon: getIcon(widgetType),
      order: widgets.length + 1,
    };
    setWidgets([...widgets, newWidget]);
    setShowForm(false);
    setWidgetName("");
    setWidgetType("");
  };

  const handleDeleteWidget = (widget: IWidget) => {
    const updatedWidgets = widgets.filter((item) => item.id !== widget.id);
    setWidgets(updatedWidgets);
  };

  return (
    <nav className="sidebar">
      <h1 className="sidebar__heading">Dashboard</h1>

      <ul className="sidebar__list">
        {widgets.sort(sortWidgets).map((widget) => (
          <li
            key={widget.id}
            onDragStart={() => dragStartHandler(widget)}
            onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e) => dropHandler(e, widget)}
            draggable={true}
            className="sidebar__item"
          >
            <WidgetItem
              widget={widget}
              handleDeleteWidget={() => handleDeleteWidget(widget)}
              isDragging={isDragging}
            />
          </li>
        ))}
      </ul>

      <div
        className={cn("sidebar__btn", { "sidebar__btn--visible": !showForm })}
      >
        <UIButton onClickButton={addNewWidget}>Add your widget</UIButton>
      </div>

      <div
        className={cn("sidebar__form", {
          "sidebar__form--visible": showForm,
        })}
      >
        <NewWidgetForm
          widgetName={widgetName}
          widgetType={widgetType}
          handleSubmit={handleSubmit}
          setWidgetName={setWidgetName}
          setWidgetType={setWidgetType}
          onClose={() => setShowForm(false)}
        />
      </div>
    </nav>
  );
};
