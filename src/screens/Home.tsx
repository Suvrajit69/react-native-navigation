import {View, Text, StyleSheet, FlatList, Pressable} from 'react-native';
import React from 'react';

//React navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

import ProductItem from '../components/ProductItem';
import Separator from '../components/Separator';

//data
import {PRODUCTS_LIST} from '../data/constants';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: HomeProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={PRODUCTS_LIST}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={Separator}
        renderItem={({item})=> (
          <Pressable onPress={()=> {
            navigation.navigate("Details", {product: item})
          }}>
            <ProductItem product={item}/>
          </Pressable>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',

    padding: 12,
    backgroundColor: '#FFFFFF',
  },
});
export default Home;
