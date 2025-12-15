import { StatusBar } from 'expo-status-bar';

import './global.css';
import { LoginScreen } from '@/screens/login';
import { SafeAreaView } from 'react-native-safe-area-context';
import TelaSoma from '@/screens/telasoma';
import TelaContador from '@/screens/telacontador';
import TelaParImpar from '@/screens/telaimparpar';
import TelaMedia from '@/screens/telamedia';

export default function App() {
  return (
    <>
      <SafeAreaView className='flex-1'>
        <TelaMedia/>

      </SafeAreaView>
      <StatusBar style="auto" />
    </>
  );
}
