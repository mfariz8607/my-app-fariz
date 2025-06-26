import { FlatList, Text, View, StyleSheet, Image, Pressable, ScrollView, ToastAndroid, TextInput, Button } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { router } from "expo-router";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setData } from "../../store/reducer/kursusSlice";
import { CourseCard } from "@/components/courseCard";

const Home = () => {
  const dispatch = useDispatch();
  const kursusList = useSelector(state => state.kursus.data)
  const [searchQuery, setSearchQuery] = useState('');

  const ongoToDetail = (itemId:String) => {
    router.push(`/detail?id=${itemId}`);
  };

  const onStartCourse = () => {
    router.push("/course");
  };

  const onGetData = async () => {
    try {
      dispatch(setData([]))
      const params={
        filter: searchQuery,
      }
      const response = await axios.get("https://elearning-api-fariz.vercel.app/api/kursus",
        { params }
      );
      dispatch(setData(response.data.data))
    } catch (error) {
        dispatch(setData([]));
        const message = error?.message || 'Gagal mengambil data';

        ToastAndroid.showWithGravity(
          message,
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
      }
  }

  useEffect (() => {
    onGetData();
  }, []);

  return (
    <SafeAreaProvider>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <View style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            title="Submit"
            onPress={()=>onGetData()}
          />
        </View>
      </View>

      <FlatList
                onRefresh={() => onGetData()}
                refreshing={false}
                data={kursusList}
                renderItem={({item}) => 
                    <CourseCard
                        onGoToDetail={()=>ongoToDetail(item._id)}
                        onStartCourse={onStartCourse}
                        catergory={item.kategori}
                        title={item.title}
                        deskription={item.deskripsi}
                        image={item.img_url}
                        tanggal={item.tgl}
                     />
                }
                keyExtractor={item => item._id}
            />
      {/* // <ScrollView style={styles.container}>
      //   {cards.map((card, index) => {
      //     const isEnabled = card.title === "React DOM";
      //     return (
      //       <View key={index} style={styles.cardContainer}>
      //         <Image source={{ uri: card.image }} style={styles.imageStyles} />
      //         <View style={styles.cardInfo}>
      //           <View style={styles.infoHeader}>
      //             <Text style={styles.title}>{card.title}</Text>
      //             <Text style={styles.category}>{card.date}</Text>
      //           </View>
      //           <Text style={styles.description}>{card.description}</Text>
      //           <View style={styles.buttonContainer}>
      //             <Pressable
      //               style={({ pressed }) => [
      //                 styles.button,
      //                 { backgroundColor: pressed && isEnabled ? "#6c2d7d" : "#841584" },
      //               ]}
      //               onPress={isEnabled ? ongoToDetail : undefined}
      //             >
      //               <Text style={styles.buttonText}>Preview</Text>
      //             </Pressable>
      //             <Pressable
      //               style={({ pressed }) => [
      //                 styles.button,
      //                 { backgroundColor: pressed && isEnabled ? "#0052cc" : "#007aff" },
      //               ]}
      //               onPress={isEnabled ? onStartCourse : undefined}
      //             >
      //               <Text style={styles.buttonText}>Start</Text>
      //             </Pressable>
      //           </View>
      //         </View>
      //       </View>
      //     );
      //   })}
      // </ScrollView> */}
    </SafeAreaProvider>
  );
};

const cards = [
  {
    title: "React DOM",
    date: "Mei 2025",
    description:
      "React DOM is the part of the React library responsible for rendering React components to the actual DOM (Document Object Model) in web browsers.",
    image:
      "https://blog.openreplay.com/images/reacts-virtual-dom/images/hero.png",
  },
  {
    title: "React Native Navigation",
    date: "March 2025",
    description:
      "React Native Navigation refers to the tools and libraries used to handle screen-to-screen movement (also called routing or navigation) in a React Native app.",
    image: "https://ucarecdn.com/d74c629f-9f50-4643-9ccd-81b62f25d9ff/",
  },
  {
    title: "React Animations",
    date: "April 2025",
    description:
      "React Animation is the process of adding visual effects, transitions, or motion to UI elements in a React application to make the interface more dynamic and engaging.",
    image: "https://www.bacancytechnology.com/qanda/wp-content/uploads/2024/02/React-Animation-for-Individual-Photos.png",
  },
  {
    title: "React Suspense and Lazy",
    date: "Februari 2025",
    description:
      "React Suspense and lazy are features in React that help you implement code-splitting — loading components only when they're needed — which can improve performance by reducing the initial load time of your application.",
    image: "https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-07-react-lazy/social-2.png",
  },
];

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginBottom: 10
  },
  cardContainer: {
    backgroundColor: "white",
    borderRadius: 12,
    marginBottom: 20,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 2,
  },
  imageStyles: {
    width: "100%",
    height: 225,
    resizeMode: "cover",
  },
  titleOverlay: {
    position: "absolute",
    top: 120,
    alignSelf: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
    color: "white",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 8,
    fontWeight: "bold",
    fontSize: 16,
  },
  cardInfo: {
    padding: 15,
  },
  infoHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    flex: 1,
  },
  category: {
    color: "#666",
    fontSize: 13,
  },
  description: {
    fontSize: 14,
    color: "#333",
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: "center",
    backgroundColor: "#841584",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  input: {
    flex: 1,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'row'
  }
});

export default Home;
