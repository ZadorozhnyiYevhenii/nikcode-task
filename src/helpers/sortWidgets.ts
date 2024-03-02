import { IWidget } from "@/types/IWidget";

export const sortWidgets = (widget1: IWidget, widget2: IWidget) => {
  if (widget1.order > widget2.order) {
    return 1;
  } else {
    return -1;
  }
};
