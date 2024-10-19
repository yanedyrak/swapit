import { ScrollView, Text } from "react-native";
import { History } from "./History";

export const ScrollHistories = () => (
  <ScrollView
    className="p-3 pl-0 gap-2 "
    horizontal
    showsHorizontalScrollIndicator={false}
  >
    <History />
    <History />
    <History />
    <History />
    <History />
    <History />
  </ScrollView>
);
