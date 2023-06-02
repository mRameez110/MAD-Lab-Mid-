import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';

const useRenderList = () => {
 // const [selected, setSelected] = useState(new Map());

  // const onSelect = React.useCallback(
  //   (id) => {
  //     const newSelected = new Map(selected);
  //     newSelected.set(id, !selected.get(id));
  //     setSelected(newSelected);
  //   },
  //   [selected],
  // );

  const renderItem = ({ item: resMenu }) => (
    <View >
      <Text style={{backgroundColor:'yellow', fontSize:40}} >
        {resMenu.title}
        </Text>
      <FlatList
        data={resMenu.data}
        renderItem={({ item }) => (
          <View>
            <Text style={{backgroundColor:'green', fontSize:30}}>
              {item}
            </Text>
          </View>
        )}
        keyExtractor={(item) => item}
        // extraData={selected}
      />
    </View>
  );

  return { renderItem};
};

export default useRenderList;
