import styled from "styled-components";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { ResizableBox } from "react-resizable";

export const StyledDragIndicatorIcon = styled(DragIndicatorIcon)`
  cursor: move;
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;
  transform: translate(-2px, 3px) rotate(90deg);
  color: white;

  &:active {
    cursor: grabbing;
    cursor: -moz-grabbing;
    cursor: -webkit-grabbing;
  }
`;

export const StyledResizableBox = styled(ResizableBox)`
  display: flex;
  flex-flow: column nowrap;
`;

export const Resizer = styled(ArrowForwardIosIcon)`
  transform: rotate(45deg);
  cursor: move;
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;
  color: white;

  &:active {
    opacity: 0;
    cursor: none;
  }
`;

export const ResizeWrapper = styled.div`
  width: calc(100% + 15px);
  margin-top: -10px;
  display: flex;
  justify-content: flex-end;
`;

export const DisabledState = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 16px;
  background: #131722;
  box-shadow: 17px 17px 34px #0f121b, -17px -17px 34px #171c29;
`;

export const StyledIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;
