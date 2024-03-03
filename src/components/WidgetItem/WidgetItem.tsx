import cn from "classnames";
import { IWidget } from "@/types/IWidget";
import { RxCross2 } from "react-icons/rx";
import "./WidgetItem.scss";

export const WidgetItem = ({
  widget,
  handleDeleteWidget,
  isDragging,
}: {
  widget: IWidget;
  handleDeleteWidget: (widget: IWidget) => void;
  isDragging: boolean;
}) => {
  return (
    <div className="widget-item">
      <span className="widget-item__title">
        {widget.icon}
        {widget.title}
      </span>
      <button
        onClick={() => handleDeleteWidget(widget)}
        className={cn("widget-item__btn", { "not-show": isDragging })}
      >
        <RxCross2 />
      </button>
    </div>
  );
};
