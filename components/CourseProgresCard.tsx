import { View, Image, Text, StyleSheet, Button, Alert } from "react-native";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { resetQuiz } from "../store/reducer/quizSlice";
import { resetTopic } from "../store/reducer/topicSlice";

export const CourseProgresCard = () => {
  const dispatch = useAppDispatch();

  const { answered, totalQuestions, score } = useAppSelector((state) => state.quiz);
  const { readTopics, totalTopics } = useAppSelector((state) => state.topic); 

  const handleResetProgress = () => {
    Alert.alert(
      "Peringatan!",
      "Apakah Anda yakin ingin mereset progress?",
      [
        {
          text: "Batal",
          style: "cancel",
        },
        {
          text: "Reset",
          style: "destructive",
          onPress: () => {
            dispatch(resetQuiz());
            dispatch(resetTopic());
          },
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View>
      {/* Kartu Progres */}
      <View style={styles.cardContainer}>
        <View>
          <Image
            source={{ uri: 'https://blog.openreplay.com/images/reacts-virtual-dom/images/hero.png' }}
            style={styles.imageStyle}
          />
        </View>
        <View style={styles.cardInfo}>
          <View style={{ marginTop: 10, marginBottom: 10 }}>
            <Text style={styles.title}>React DOM</Text>
          </View>
          <View style={{ flexDirection: 'column', gap: 5 }}>
            <View style={styles.row}>
              <Text style={{ flex: 2 }}>Materi Kursus</Text>
              <View style={{ flex: 1 }}>
                <Text style={styles.chip}>{readTopics}/{totalTopics}</Text>
              </View>
            </View>
            <View style={styles.row}>
              <Text style={{ flex: 2 }}>Quiz</Text>
              <View style={{ flex: 1 }}>
                <Text style={styles.chip}>{answered}/{totalQuestions}</Text>
              </View>
            </View>
            <View style={styles.row}>
              <Text style={{ flex: 2 }}>Score</Text>
              <View style={{ flex: 1 }}>
                <Text style={styles.chip}>{score}%</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Tombol Reset */}
      <View style={styles.resetButtonContainer}>
        <Button title="Reset Progress" onPress={handleResetProgress} color="#d9534f" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 120,
    height: 150,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  cardContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: 'white',
    borderColor: '#f6f7f5',
    marginTop: 15,
  },
  cardInfo: {
    paddingHorizontal: 15,
    paddingTop: 10,
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  chip: {
    backgroundColor: '#e6e4e1',
    paddingVertical: 2,
    paddingHorizontal: 15,
    borderRadius: 15,
    flexWrap: 'wrap',
  },
  row: {
    flexDirection: 'row',
    marginVertical: 2,
  },
  resetButtonContainer: {
    marginTop: 20,
  },
});
