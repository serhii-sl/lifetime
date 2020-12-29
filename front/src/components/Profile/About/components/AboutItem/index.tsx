import * as React from 'react';
// styles
import { Image, Wrapper, TextWrapper, HeaderText, Description, Link, Placeholder, ContentWrapper } from './styles';

interface IAboutItemProps {
  headerText?: string;
  description?: string;
  imageSrc?: string;
  link?: string;
  linkText?: string;
  placeholder: string;
}

const AboutItem: React.FC<IAboutItemProps> = ({ imageSrc, headerText, description, link, linkText, placeholder }) => {
  return (
    <Wrapper>
      {headerText || link ? (
        <ContentWrapper>
          <div>
            <Image src={imageSrc} />
          </div>
          <TextWrapper>
            <HeaderText>
              {headerText} {link && <Link href={link}>{linkText}</Link>}
            </HeaderText>
            <Description>{description}</Description>
          </TextWrapper>
          </ContentWrapper>
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
