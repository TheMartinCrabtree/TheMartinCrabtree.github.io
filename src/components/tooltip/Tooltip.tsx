import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled, { AnyStyledComponent } from "styled-components";

export interface TooltipProps {
  tooltipHeading?: string;
  tooltipBody: string;
  tooltipImage?: string;
  children?: any;
}

const TextWrapper = styled.div`
  cursor: pointer;
  text-decoration: underline;
  display: inline-block;
`;

const TooltipWrapper = styled.div<{ xCoord: number; yCoord: number }>`
  &:hover {
    position: absolute;
    top: ${({ yCoord }) => `${yCoord}`};
    left: ${({ xCoord }) => `${xCoord}`};
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    padding: 5px;
    borderradius: 5px;
    zindex: 9999;
  }
`;

const Tooltip: React.FC<TooltipProps> = ({
  tooltipHeading,
  tooltipBody,
  tooltipImage,
  children,
}) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleMouseOver = (event: React.MouseEvent) => {
    setIsTooltipVisible(true);
    setTooltipPosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseLeave = () => {
    setIsTooltipVisible(false);
  };

  return (
    <div>
      <TextWrapper
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        testing testing testing
        {children}
      </TextWrapper>
      {isTooltipVisible && tooltipBody && (
        <TooltipWrapper xCoord={tooltipPosition.x} yCoord={tooltipPosition.y}>
          <div>{tooltipHeading}</div>
          <p>{tooltipBody}</p>
        </TooltipWrapper>
      )}
    </div>
  );
};

export default Tooltip;
