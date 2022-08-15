import { ElementType, ReactElement } from "react";

export type WithChildren = {
  children: ReactElement | ReactElement[];
};

export type WithPolymorphy = {
  as: ElementType;
};
