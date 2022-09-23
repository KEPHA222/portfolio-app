import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        The purpose of Javascript Mastery is to help aspire and establish
        software developers to take their development skills to the next level
        and build awesome apps.
      </SectionText>
      <Button onClick={() => (window.location = "https://github.com/KEPHA222")}>
        Learn More..
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
