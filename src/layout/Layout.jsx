import { View, Text } from "react-native";
import React, { useState } from "react";
import { DATA } from "../../constants/index";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./style";
import NFTCard from "../nftCard/NFTCard";
import Header from "../header/Header";
import NotFound from "../notFound/NotFound";

const Layout = () => {
  const [data, setData] = useState(DATA);
  const setSearch = (text) => {
    const fillterdData = DATA.filter((NFTTitem) =>
      NFTTitem.name.toLocaleLowerCase().includes(text.toLocaleLowerCase())
    );
    setData(fillterdData);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header setSearch={setSearch} />
      {data.length === 0 ? (
        <NotFound />
      ) : (
        <View>
          <FlatList
          showsVerticalScrollIndicator={false}
            data={data}
            renderItem={({ item }) => <NFTCard item={item} />}
            key={(item) => item.id}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Layout;
