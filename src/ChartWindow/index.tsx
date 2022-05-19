import React, { SyntheticEvent, useState } from "react";
import Draggable from "react-draggable";
import { ResizeCallbackData } from "react-resizable";
import { StyledDragIndicatorIcon, StyledResizableBox } from "./styles";

interface IWindowSize {
  width: number;
  height: number;
}

const defaultGridSize: [number, number] = [30, 30];

export const ChartWindow = () => {
  const [isInResizingState, setIsInResizingState] = useState<boolean>(false);
  const [isDraggingState, setIsDraggingState] = useState<boolean>(false);

  const [windowSize, setWindowSize] = useState<IWindowSize>({
    width: 300,
    height: 300,
  });

  const startResizing = () => {
    setIsDraggingState(false);
    setIsInResizingState(true);
  };

  const startDragging = () => {
    setIsInResizingState(false);
    setIsDraggingState(true);
  };

  const stopAllActions = () => {
    setIsDraggingState(false);
    setIsInResizingState(false);
  };

  return (
    <Draggable
      grid={defaultGridSize}
      onStart={startDragging}
      onStop={stopAllActions}
      disabled={isInResizingState}
      handle={".drg"}
    >
      <StyledResizableBox
        lockAspectRatio={isDraggingState}
        onResizeStart={startResizing}
        onResizeStop={stopAllActions}
        handleSize={defaultGridSize}
        minConstraints={[100, 100]}
        width={windowSize.width}
        height={windowSize.height}
        onResize={(event: SyntheticEvent, data: ResizeCallbackData) => {
          setWindowSize({ width: data.size.width, height: data.size.height });
        }}
      >
        <StyledDragIndicatorIcon className="drg" />
        <iframe src="https://google.com" title="test" />
      </StyledResizableBox>
    </Draggable>
  );
};
