import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import ScrollableTabView, {  DefaultTabBar,} from 'react-native-scrollable-tab-view';
// import InputMakanan from '../InputMenu/InputMakanan';
// import InputMinuman from '../InputMenu/InputMinuman';
import Test1 from '../Test/Test1';
import Test2 from '../Test/Test2';


const Tabbar = () => {
  return (
    <View style={styles.container}>
 
      <View style={styles.tabbar}>
        <ScrollableTabView
          initialPage={0}
          tabBarActiveTextColor="#337091"
          renderTabBar={() => (
            <DefaultTabBar
              underlineStyle={{
                backgroundColor: '#337091',
              }}
            />
          )}>
          <Test1 tabLabel="Food" />
          <Test2 tabLabel="Drink" />
        </ScrollableTabView>
      </View>
    </View>
  );
};

const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  tabbar: {
    flex: 1,
    // marginTop: width * 0.1,
    paddingHorizontal: 30,
  },
});

export default Tabbar;
