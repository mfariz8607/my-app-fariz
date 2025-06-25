import { Text, View, StyleSheet, TouchableOpacity, Animated, Dimensions, ToastAndroid } from "react-native";
import { Info, Materi } from "../components/modules/detail";
import React, { useState, useRef, useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import axios from "axios";

const { width } = Dimensions.get("window");

const Detail = () => {
    const [activeTab, setActiveTab] = useState("info");
    const indicatorPosition = useRef(new Animated.Value(0)).current;
    const { id } = useLocalSearchParams();
    const [itemTopic, setItemTopic] = useState([]);
    const [description, setDescription] = useState('');

    const onGetData = async () => {
    try {
      const response = await axios.get(`https://elearning-api-fariz.vercel.app/api/kursus/${id}`);

      setDescription(response.data.data.deskripsi);

      if(response.data.data.content && response.data.data.content.length > 0) {
        const topic = response.data.data.content.map((item:any, index:Number) => {
            return {
                id: index.toString(),
                title: item.type,
                describe: item.type,
            }
        });
        setItemTopic(topic);
      }
    } catch (error) {
        const message = error?.message || 'Gagal mengambil data';
        ToastAndroid.showWithGravity(
          message,
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
      }
  }

  const UIActiveTabs = () => {
    if (activeTab == "info") return <Info description={description} />
    if (activeTab == "materi") return <Materi />
    return <Info description={description} />
  }

  useEffect (() => {
    onGetData();
  }, []);

    const handleTabPress = (tab) => {
        setActiveTab(tab);
        Animated.spring(indicatorPosition, {
            toValue: tab === "info" ? 0 : 1,
            useNativeDriver: false,
        }).start();
    };

    const renderActiveTabContent = () => {
        return activeTab === "info" ? <Info /> : <Materi />;
    };

    return (
        <View style={styles.container}>

            <View style={styles.tabContainer}>
                <TouchableOpacity
                    style={[styles.tabButton, activeTab === "info" && styles.activeTab]}
                    onPress={() => handleTabPress("info")}
                >
                    <Text style={[styles.tabText, activeTab === "info" && styles.activeTabText]}>Info</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.tabButton, activeTab === "materi" && styles.activeTab]}
                    onPress={() => handleTabPress("materi")}
                >
                    <Text style={[styles.tabText, activeTab === "materi" && styles.activeTabText]}>Materi</Text>
                </TouchableOpacity>
            </View>

            <View style={{paddingTop: 20}}></View>

            <View style={styles.contentContainer}>{renderActiveTabContent()}</View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        paddingTop: 30,
        paddingBottom:30,
        paddingHorizontal: 16,
    },
    headerText: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#0A192F",
        marginBottom: 16,
        textAlign: "center",
    },
    
    tabContainer: {
        flexDirection: "row",
        backgroundColor: "#112240",
        borderRadius: 10,
        overflow: "hidden",
    },
    tabButton: {
        flex: 1,
        paddingVertical: 12,
        alignItems: "center",
    },
    tabText: {
        fontSize: 16,
        fontWeight: "600",
        color: "#ccd6f6",
    },
    activeTab: {
        backgroundColor: "#64ffda",
    },
    activeTabText: {
        color: "#0A192F",
    },
    indicatorWrapper: {
        height: 4,
        width: "100%",
        backgroundColor: "#112240",
        marginBottom: 12,
        borderRadius: 10,
    },
    indicator: {
        width: "50%",
        height: 4,
        backgroundColor: "#64ffda",
        borderRadius: 10,
    },
    contentContainer: {
        flex: 1,
    },
});

export default Detail;