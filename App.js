import { StatusBar } from "expo-status-bar";
import { Pressable, Text, View } from "react-native";
import { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(1);
  const [money, setMoney] = useState(5);
  const [incomeRate, setIncomeRate] = useState(1); // New state for tracking the rate of income

  useEffect(() => {
    const interval = setInterval(() => {
      setMoney((prevMoney) => prevMoney + incomeRate); // Use incomeRate for increment
    }, 1000); // Every second

    return () => clearInterval(interval);
  }, [incomeRate]); // Depend on incomeRate so the interval is reset when it changes

  const handlePress = () => {
    const cost = 5; // Define the cost to increase the income rate
    if (money >= cost) { // Check if the user has enough money
      setCount(count + 1);
      setMoney((prevMoney) => prevMoney - cost); // Decrease money by the cost
      setIncomeRate((prevRate) => prevRate + 1); // Increase the income rate
    } else {
      alert('Not enough money!');
    }
  };

  return (
    <View className="flex-1 items-center justify-center bg-blue-100">
      <Pressable onPress={handlePress} className="m-4 rounded-xl bg-white p-4">
        <Text>Expand</Text>
      </Pressable>
      <Text className="font-bold text-red-500">{count}</Text>
      <Text>{money}</Text>
      <StatusBar />
    </View>
  );
}
