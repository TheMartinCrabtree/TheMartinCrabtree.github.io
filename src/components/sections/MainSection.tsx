import React, { ReactNode } from "react";
import styled from "styled-components";
import SubSection, { type SubSectionProps } from "./SubSection";

// need to update prop type for subsection
type MainSectionProps = {
  // sections?: Array<SubSectionProps>;
  sections?: any;
};

// temp text align
const MainSectionWrapper = styled.div`
  width: 100%;
  color: white;
  text-align: center;
  padding: 20px 0px;

  align-self: flex-end;
`;

const MainSection = ({ sections }: MainSectionProps) => {
  const _renderSubSections = ({ sections }: MainSectionProps) => {
    return (
      sections &&
      sections.map(({ data, layout }: SubSectionProps) => {
        // need to implement layout property
        const generatedKey =
          window && window.crypto && window.crypto.randomUUID();

        return <SubSection key={generatedKey} layout={layout} data={data} />;
      })
    );
  };

  return (
    <MainSectionWrapper>
      {sections && _renderSubSections({ sections })}
    </MainSectionWrapper>
  );
};

export { type MainSectionProps };
export default MainSection;
