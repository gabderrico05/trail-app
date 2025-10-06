import Feather from '@expo/vector-icons/Feather';
import React, { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";

interface SearchBarProps<T> {
  data: T[];
  filterKey: keyof T | (keyof T)[];
  onFiltered: (results: T[]) => void;
  placeholder?: string;
  className?: string;
}

export default function SearchBar<T>({
  data,
  filterKey,
  onFiltered,
  placeholder = "Pesquisar",
  className = "",
}: SearchBarProps<T>) {

  const [query, setQuery] = useState("");

  const handleChange = (text: string) => {
    setQuery(text);
    if (text.trim() === "") {
      onFiltered(data);
    }
  };

  const handleSearch = () => {
    const results = data.filter((item) => {
      const keys = Array.isArray(filterKey) ? filterKey : [filterKey];
      return keys.some(key => 
        String(item[key]).toLowerCase().includes(query.toLowerCase())
      );
    });
    onFiltered(results);
  };

  return (
    <View className={`p-0.5 pl-2 pr-10 flex-row items-center bg-lightGray-300 rounded-2xl ${className}`}>
      <TouchableOpacity 
        className="flex-row h-full items-center pb-0.5 px-2"
        onPress={handleSearch}
      >
        <Feather name="search" size={20} color="#113D31" />
      </TouchableOpacity>

      <TextInput
        className="w-full h-full pl-1.5 rounded-2xl font-medium text-lg"
        placeholder={placeholder}
        onChangeText={handleChange}
        value={query}
        placeholderTextColor="#113D31"
      />
    </View>
  );
}
