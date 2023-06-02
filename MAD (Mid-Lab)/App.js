import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SectionList, TouchableOpacity } from 'react-native';
import { useEffect, useState } from "react";

import CustomButton from './CustomButton';
import useRenderList from './useRenderList';
import DATA from './data';
import ProductList from './ProductList';

import axios from 'axios'

// const DATAA = [
//   {
//     title: 'Main Dishes',
//     data: ['Pizza', 'Burger', 'Risotto',],
//   },
//   {
//     title: 'Sides',
//     data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
//   },
//   {
//     title: 'Drinks',
//     data: ['Water', 'Coke', 'Beer'],
//   },
//   {
//     title: 'Desserts',
//     data: ['Cheese Cake', 'Ice Cream'],
//   },
// ];

export default function App() {

  const [data, setData] = useState([]);
  const { renderItem, onSelect } = useRenderList();
  const [productData, setProductData] = useState([]);


  // useEffect(()=>{
  //   axios.get('https://fakestoreapi.com/products', {
  //     // params: {
  //     //     articleID: articleID
  //     // }
  // })
  //     .then(function (response) {
          
  //         // console.log('response',response.data);    
  //         setData(response.data)
      
  //       })
  //     .catch(function (error) {
  //         console.log(error);
  //     })
  //     .then(function () {
  //         // always executed
  //         console.log('Always',data[0]);
  //     });  
  // },[])

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
         console.log('Always',response.data[0]);
         setProductData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);


  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}

      {/*  To Display API data on Screen */}

      <View >
          <ProductList data={productData} />
      </View>

      {/* <CustomButton afzal='bottom' />

      <CustomButton afzal='top' />
      <CustomButton afzal='bottom' />
      <CustomButton afzal='left' />
      <CustomButton afzal='right' /> */}
     

      {/* <FlatList
        data={data}
        renderItem={({item}) => 
          (
            <View style={{flex:1}}>
               <View style={{flex:0.50, backgroundColor:'lightgrey'}}>
                  <Text> {item.title} </Text>
               </View>
               <View style={{flex:0.50, backgroundColor:'green'}}>
                  <Text> {item.category} </Text>
              </View>

              
              <Text> {item.category} </Text>
            </View>
          )
        }
        keyExtractor={item => item.id}
      /> */}


  <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => (
        <View style={{backgroundColor:'green'}}>
          <Text style={styles.title}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({section: {title}}) => (
        <View style={{backgroundColor:'lightgrey'}}>
        <Text style={styles.header}>{title}</Text>
        </View>
      )}
    />

    {/* Display menu using custoom hook to minimize the code in App.js */}
    
    {/* <FlatList
      data={DATA}
      renderItem={renderItem}
      // keyExtractor={(item) => item.title}
      // extraData={selected}
    /> */}


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop:100
  },
});
