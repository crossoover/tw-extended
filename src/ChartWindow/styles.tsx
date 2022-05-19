import styled from "styled-components";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import { ResizableBox } from "react-resizable";

export const StyledDragIndicatorIcon = styled(DragIndicatorIcon)`
  cursor: move;
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;

  &:active {
    cursor: grabbing;
    cursor: -moz-grabbing;
    cursor: -webkit-grabbing;
  }
`;

export const StyledResizableBox = styled(ResizableBox)`
  display: flex;
  flex-flow: column nowrap;
  border: 1px solid red;
`;
