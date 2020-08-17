import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Landing from './src/pages/Landing';
import { AppLoading } from 'expo'; // componente de carregamento
import { Archivo_400Regular, Archivo_700Bold, useFonts } from '@expo-google-fonts/archivo'; //importando fonte Archivo
import { Poppins_400Regular, Poppins_600SemiBold} from '@expo-google-fonts/poppins'

import AppStack from './src/routes/AppStack';

export default function App() {

  // declarando as fontes que vai utilizar na aplicacao
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  //caso as fontes nao tenham sido carregadas ainda o componente de loading ira aparecer
  if(!fontsLoaded) {
    return <AppLoading/>;
  }else {
    return (
      //<> significa um fragment, eh necessario pois tem mais de 1 elemento sendo renderizado(landing e statusbar)
      //status bar eh a barra de status do celular
      <>
        <AppStack/>
        <StatusBar style="light" />
      </>
    );
  }
}
