import React, { useState } from "react";
import styled from "styled-components";

export interface TooltipProps {
  tooltipHeading?: string;
  tooltipBody: string;
  tooltipImage?: string;
}

const TextWrapper = styled.div`
  cursor: pointer;
  text-decoration: underline;
`;

const TooltipWrapper = styled.div`
  &:hover {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    backgroundcolor: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 8px;
    borderradius: 5px;
    zindex: 9999;
  }
`;

const Tooltip = ({
  tooltipHeading,
  tooltipBody,
  tooltipImage,
}: TooltipProps) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div>
      <TextWrapper
        onMouseOver={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        text goes here
      </TextWrapper>
      {showTooltip && (
        <TooltipWrapper onMouseLeave={() => setShowTooltip(false)}>
          tooltip text
        </TooltipWrapper>
      )}
    </div>
  );
};

export default Tooltip;
