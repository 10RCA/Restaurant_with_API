import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react';
import SearchBar from   '../components/SearchBar';
import useResults from '../api/hooks/useResults';
import { AntDesign } from '@expo/vector-icons';
import useResults from '../api/hooks/useResults';
import ResultsList from '../components/ResultsList';
export default function SearchScreen() {
 
const [searchApi, results] = useResults()
console.log(results);

const filterResultsByPrice = (price) =>{

return results.filter((result)=>{

  return result.price === price
})

}

  return (
    <View style={styles.backgroundStyle}>
       <AntDesign style={styles.iconStyle} name="search1" size={30} color="black" />
    <TextInput style={styles.inputStyle}
    
    placeholder="Ara"
    autoCorrect={false}
    autoCapitalize='none'
    />
    <SearchBar/>
    <ResultsList title = 'Öğrenci Dostu Restoranlar'results={filterResultsByPrice('₺')}/>
    <ResultsList title = 'Uygun Restoranlar'results={filterResultsByPrice('₺₺')}/>
    <ResultsList title = 'Zengin İşi Restoranlar'results={filterResultsByPrice('₺₺₺')}/>

    </View>
  )
}

const styles = StyleSheet.create({

  backgroundStyle:{
    backgroundColor: 'lightgray',
    flexDirection: 'row',
    margin: 10,
    height: 50,
    alignItems: 'center',
    borderRadius: 20,

  },
  iconStyle:{
    marginHorizontal: 15,


  },
  inputStyle:{
    flex: 1,
    fontSize: 18,
  },
})
