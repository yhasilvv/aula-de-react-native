import { TextInput, View } from 'react-native';
import { TextInputProps } from 'react-native';


export function InputCustomizado({ ...rest }: TextInputProps) {
  return ( 
  <View className="border-gray-500 border-2 rounded-2xl w-full">
    <TextInput {...rest} />
  </View>
)

}