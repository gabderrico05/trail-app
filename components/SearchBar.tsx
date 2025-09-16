import Feather from '@expo/vector-icons/Feather';
import { useState } from "react";
import { TextInput, View } from "react-native";


interface SearchBarProps {
  className: string;
  label: string;
  onChangeText?: (text: string | undefined) => void;
  placeholder?: string;
}

const SearchBar = ({ className, label, onChangeText, placeholder = "Pesquisar"}: SearchBarProps) => {
    const [value, setValue] = useState('')

    const handleChange = (text: string) => {
      onChangeText?.(text);
      setValue(text);

    }

  return (
   <View className="py-1 mx-14 px-5 flex-row items-center bg-lightGray rounded-2xl">
    <Feather name="search" size={24} color="#001D15" />
    <TextInput 
      className={`w-full h-full px-5 rounded-2xl font-medium text-xl ${className}`}
      placeholder={placeholder}
      onChangeText={handleChange}
      value={value}
      placeholderTextColor="#001D15"
    />
    
   </View>
  );
};


export default SearchBar;