import * as React from 'react';
// styles
import { Image, Wrapper, HeaderText, Description, Link, Placeholder } from './styles';

interface IAboutItemProps {
  headerText: string;
  description?: string;
  imageSrc?: string;
  link?: string;
  linkText?: string;
  placeholder: string;
}

const AboutItem: React.FC<IAboutItemProps> = ({ imageSrc, headerText, description, link, linkText, placeholder }) => {
  return (
    <Wrapper>
      {headerText ? (
        <>
          <Image src={imageSrc} />
          <HeaderText>
            {headerText} {link && <Link href={link}>{linkText}</Link>}
          </HeaderText>
          <Description>{description}</Description>
        </>
      ) : (
        <>
          <Image src={imageSrc} />
          <Placeholder>{placeholder}</Placeholder>
        </>
      )}
    </Wrapper>
  );
};

export default AboutItem;
