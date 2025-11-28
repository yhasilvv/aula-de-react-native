import { TextInput } from 'react-native';
import { TextInputProps } from 'react-native';

export function InputCustomizado({ ...rest }: TextInputProps) {
  return <TextInput {...rest} />;
}
