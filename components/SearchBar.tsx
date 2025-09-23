import Feather from '@expo/vector-icons/Feather';
import React, { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";


interface SearchBarProps {
  className?: string;
  onChangeText?: (text: string | undefined) => void;
  placeholder?: string;
}

const SearchBar = ({ className ="", onChangeText, placeholder = "Pesquisar"}: SearchBarProps) => {
    const [value, setValue] = useState('')

    const handleChange = (text: string) => {
      onChangeText?.(text);
      setValue(text);

    }

  return (
   <View className="p-0.5 pl-2 pr-10 flex-row items-center bg-lightGray rounded-2xl">
    <TouchableOpacity className='flex-row h-full items-center pb-1 px-2'>
    <Feather name="search" size={22} color="#113D31" />
    </TouchableOpacity>
    <TextInput 
      className={`w-full h-full pl-1.5 rounded-2xl font-medium text-xl ${className}`}
      placeholder={placeholder}
      onChangeText={handleChange}
      value={value}
      placeholderTextColor="#113D31"
    />
    
   </View>
  );
};


export default SearchBar;