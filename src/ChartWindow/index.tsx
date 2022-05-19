import React, { FC, SyntheticEvent, useState } from "react";
import Draggable from "react-draggable";
import { ResizeCallbackData } from "react-resizable";
import {
  StyledDragIndicatorIcon,
  StyledResizableBox,
  Resizer,
  ResizeWrapper,
  DisabledState,
  StyledIframe,
} from "./styles";

interface IWindowSize {
  width: number;
  height: number;
}

interface IChartWindow {
  symbol: string;
}

export const ChartWindow: FC<IChartWindow> = ({ symbol }) => {
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
      onStart={startDragging}
      onStop={stopAllActions}
      disabled={isInResizingState}
      handle={".drg"}
      grid={[25, 25]}
    >
      <StyledResizableBox
        lockAspectRatio={isDraggingState}
        onResizeStart={startResizing}
        onResizeStop={stopAllActions}
        minConstraints={[100, 100]}
        width={windowSize.width}
        height={windowSize.height}
        onResize={(event: SyntheticEvent, data: ResizeCallbackData) => {
          setWindowSize({ width: data.size.width, height: data.size.height });
        }}
        handle={
          <ResizeWrapper>
            <Resizer />
          </ResizeWrapper>
        }
      >
        <StyledDragIndicatorIcon className="drg" />
        {!isDraggingState && !isInResizingState ? (
          <StyledIframe
            src={`https://s.tradingview.com/widgetembed/?frameElementId=tradingview_4e569&symbol=${symbol}&interval=240&range=1M&hidesidetoolbar=0&saveimage=1&toolbarbg=rgba(0, 0, 0, 0.8)&studies=%5B%5D&theme=dark&style=9&timezone=Etc%2FUTC&withdateranges=1&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=localhost&utm_medium=widget&utm_campaign=chart&utm_term=${symbol}`}
          ></StyledIframe>
        ) : (
          <DisabledState />
        )}
      </StyledResizableBox>
    </Draggable>
  );
};
