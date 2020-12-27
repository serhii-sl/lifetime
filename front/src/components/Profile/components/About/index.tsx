import * as React from 'react';
// styles
import { Header, Wrapper } from './styles';
// components
import AboutItem from './components/AboutItem';
import { PROFILE_ABOUT_DATA } from './constants';

const About: React.FC = () => {
  return (
    <Wrapper>
      <Header>About</Header>
      {PROFILE_ABOUT_DATA.map(({ headerText, imageSrc, description, placeholder, link, linkText }, index) => (
        <AboutItem
          headerText={headerText}
          imageSrc={imageSrc}
          description={description}
          placeholder={placeholder}
          link={link}
          linkText={linkText}
          key={index}
        />
      ))}
    </Wrapper>
  );
};

export default About;
