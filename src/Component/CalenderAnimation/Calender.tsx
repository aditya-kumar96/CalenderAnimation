import { useEffect, useRef, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import {styles} from './CalenderStyle';

export const Calender = () => {
    const data = [1, 1, 1, 1, 1, 2, 12, 12, 121, 1, 1, 2, 1, 2, 2, 2, 0,3,3,4,4,5,5,3,2,23,0,4,4,34,];
    const [selectedIndex, setSelectedIndex] = useState(0);
    const flatListRef = useRef(null);
    useEffect(()=>{
      flatListRef.current?.scrollToIndex({
        index:selectedIndex,
        animated:true
      }); 
    },[selectedIndex]);
    return (
      <View style={styles.container}>
        <View style={styles.sectionContainer}>
          <FlatList
            data={data}
            initialScrollIndex={selectedIndex}
            ref={flatListRef}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  style={[styles.section, { backgroundColor: selectedIndex == index ? '#000' : '#fff' }]}
                >
                  <Text style={{ color: selectedIndex === index ? '#fff' : '#000' }}>
                    {index + 1}
                  </Text>
                </TouchableOpacity>
              )
            }}
          />
        </View>
        <View style={{ marginTop: 20, width: '100%' }}>
          <FlatList
              data={data}
              showsVerticalScrollIndicator={false}
              onScroll={e => {
                const ind=e.nativeEvent.contentOffset.y / 50;
                setSelectedIndex(ind.toFixed(0));
              }}
              renderItem={({item,index})=>{
                return(
                  <TouchableOpacity
                    style={[styles.VerticalSection,{marginBottom:data.length -1 === index ?300:0}]}
                    onPress={()=>{
                        setSelectedIndex(index);
                    }}
                  >
                    <Text>{index+1}</Text>
                  </TouchableOpacity>
                )
              }}
          />
        </View>
      </View>
    )
  }
  