import * as React from 'react';
// redux
import { Field } from 'redux-form';
// styles
import { Input, Label, Error, Wrapper} from './styles';

interface IMainInputReduxProps {
  label?: string;
  placeholder?: string;
  name: string;
  error?: string;
  type?: string;
  validate?: ((value: any) => string | void | null)[];
  image?: string
}

const renderField: React.FC<IMainInputReduxProps> = ({ error, label, image, ...inputProps }) => (
  <Wrapper>
    {label && <Label>{label}</Label>}
      {image && <img src={image} alt={'input-img'}/>}
      <Input {...inputProps} />
      {error && <Error>{error}</Error>}
  </Wrapper>
);

const InputMain: React.FC<IMainInputReduxProps> = ({ name, ...rest }) => {
  return <Field {...rest} name={name} component={renderField} />;
};

export default InputMain;
