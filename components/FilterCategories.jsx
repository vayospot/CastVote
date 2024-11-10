import { useState } from "react";
import { TouchableOpacity, Text, View } from "react-native";

export default function FilterCategories({
  containerClassName,
  itemClassName,
  itemTextClassName,
  filterOptions,
  activeFilterColor = "#fff",
  inactiveFilterColor = "#808080",
}) {
  const [activeFilter, setActiveFilter] = useState(filterOptions[0]);

  const handleSelectedFilter = (option) => setActiveFilter(option);

  return (
    <View className={`flex-row ${containerClassName}`} style={{ gap: 10 }}>
      {filterOptions.map((option, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleSelectedFilter(option)}
          className={`rounded-full px-3 py-1.5 ${itemClassName}`}
          style={{
            backgroundColor:
              activeFilter === option ? activeFilterColor : inactiveFilterColor,
            opacity: activeFilter === option ? 1 : 0.5,
          }}
        >
          <Text
            className={`font-boldFont text-sm text-default ${itemTextClassName}`}
          >
            {option}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
