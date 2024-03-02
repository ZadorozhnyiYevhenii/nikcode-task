import { IWidget } from "@/types/IWidget"
import './WidgetItem.scss';

export const WidgetItem = ({
  widget
}: {
  widget: IWidget
}) => {
  return (
    <span className="widget-item" >
      {widget.icon}
      {widget.title}
    </span>
  )
}