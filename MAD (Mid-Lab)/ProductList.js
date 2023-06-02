import React from 'react';
import { View, Text, StyleSheet, SectionList, Image } from 'react-native';

const ProductList = ({ data }) => {
  
  const organizedData = {};
  data.forEach(item => {
    if (!organizedData[item.category]) {
      organizedData[item.category] = [];
    }
    organizedData[item.category].push(item);
  });

  const renderItem = ({ item, section }) => {

    // if (section.index === 0 && section.itemCount > 2) {
    //   if (item.index > 1) {
    //     return null;
    //   }
    // }

    return (
      <View style={styles.item}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        
        <Text style={styles.description}>{item.image}</Text>
        
        <Text style={styles.category}>{item.category}</Text>

        <Image 
        // style={styles.tinyLogo}
        source={item.image}>
        </Image>

        <View style={styles.image}>
            <Image source={{ uri: item.image }} style={{ width:200 , height: 250,
          alignItems: 'center',
          justifyContent: 'center',
          margin:10
          
          }} />
        </View>


      </View>
    );
  };

  const renderSectionHeader = ({ section: { title } }) => (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );

  const APIData = Object.keys(organizedData).map(category => {
    return {
      title: category,
      data: organizedData[category],
    };
  });

  return (
    <SectionList
      sections={APIData}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
      keyExtractor={(item, index) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    // backgroundColor: '#c2e1ff',
    // backgroundColor: 'yellow',
    // padding: 20,
    // marginVertical: 8,
    marginHorizontal: 6,
    //  alignItems: 'center',
    // justifyContent: 'center',
  },
  image:{
    alignItems:'center',
  },
  title: {
    fontSize: 35,
    backgroundColor:'green',
    textAlign:'center'
  },
  description: {
    fontSize: 24,
    backgroundColor:'red',
  },
  category: {
    fontSize: 18,
  },
  header: {
    backgroundColor: '#ccc',
    backgroundColor: 'yellow',
    paddingTop: 25 ,
    paddingBottom:25,
    // marginHorizontal:16,
  },
  headerText: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});

export default ProductList;