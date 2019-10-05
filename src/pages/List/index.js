import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, AsyncStorage, Image } from 'react-native';

import safeView from '../../components/SafeView';

import SpotList from '../../components/SpotList';

import logo from '../../assets/logo.png';

import styles from './styles';

export default function List() {
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    async function getStoragedTechs() {
      let storagedTechs = await AsyncStorage.getItem('techs');
      storagedTechs = storagedTechs.split(',').map(tech => tech.trim());

      setTechs(storagedTechs);
    }

    getStoragedTechs();
  }, []);

  return (
    <SafeAreaView style={[safeView.android, styles.container]}>
      <Image style={styles.logo} source={logo} />

      <ScrollView>
        {techs.map(tech => (
          <SpotList key={tech} tech={tech} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
