import { Dispatch, SetStateAction } from "react";
import { widgetNames } from "@/constants/widgetNames";
import { UIButton } from "../UIButton/UIButton";
import "./NewWidgetForm.scss";

export const NewWidgetForm = ({
  handleSubmit,
  widgetType,
  widgetName,
  setWidgetType,
  setWidgetName,
}: {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  widgetType: string;
  widgetName: string;
  setWidgetType: Dispatch<SetStateAction<string>>;
  setWidgetName: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <form onSubmit={handleSubmit} className="widget-form">
      <select
        value={widgetType}
        onChange={(e) => setWidgetType(e.target.value)}
        className="widget-form__select"
      >

        <option value="">Select Widget Type</option>
        {widgetNames.map((widget) => (
          <option key={widget.id} value={widget.value}>
            {widget.title}
          </option>
        ))}
      </select>

      <input
        type="text"
        value={widgetName}
        onChange={(e) => setWidgetName(e.target.value)}
        placeholder="Enter Widget Name"
        className="widget-form__input"
      />

      <UIButton type="submit">Add Widget</UIButton>
    </form>
  );
};
