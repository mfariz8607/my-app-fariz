import { View, Text, StyleSheet, Button, Image, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { setReadTopics, setTotalTopics } from '../../../store/reducer/topicSlice';

interface CourseTopicProps {
  onNextContent: () => void;
  topic: Array<{ id: number; description: string }>;
}

export default function CourseTopic({ onNextContent, topic }: CourseTopicProps) {
  const [activeTopic, setActiveTopic] = useState(1); // Start from 1 to always show ID 1
  const dispatch = useAppDispatch();

  const { totalTopics } = useAppSelector((state) => state.topic);

  useEffect(() => {
    if (totalTopics === 0) {
      dispatch(setTotalTopics(topic.length));
    }
  }, [dispatch, topic.length, totalTopics]);

  const handleContinue = () => {
    const nextIndex = activeTopic + 1;
    if (nextIndex <= topic.length) {
      setActiveTopic(nextIndex);
      dispatch(setReadTopics(nextIndex));
    }
  };

  const handleNextTopic = () => {
    setActiveTopic(1); // Reset to 1 to keep title visible
    onNextContent();
  };

  const isFinished = activeTopic >= topic.length;

  // Pisahkan judul dan isi
  const titleItem = topic.find(item => item.id === 1);
  const contentItems = topic.filter(item => item.id !== 1);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          source={{ uri: 'https://blog.openreplay.com/images/reacts-virtual-dom/images/hero.png' }}
          style={styles.image}
        />

        {/* Garis-garis indikator paragraf */}
        <View style={styles.progressContainer}>
          {Array.from({ length: activeTopic - 1 }).map((_, index) => (
            <View key={index} style={styles.progressBar} />
          ))}
        </View>

        <View style={styles.contentContainer}>
          {/* Tampilkan judul (ID 1) langsung */}
          {titleItem && (
            <Text style={styles.titleText}>{titleItem.description}</Text>
          )}

          {/* Tampilkan paragraf berdasarkan activeTopic */}
          {contentItems.slice(0, activeTopic - 1).map((item) => (
            <Text key={item.id} style={styles.paragraph}>
              {item.description}
            </Text>
          ))}
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        {!isFinished && (
          <Button onPress={handleContinue} title="Tap to continue" color="#841584" />
        )}
        {isFinished && (
          <Button onPress={handleNextTopic} title="Next Topic" color="#4287f5" />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 250,
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 12,
    flexWrap: 'wrap',
  },
  progressBar: {
    width: 50,
    height: 5,
    backgroundColor: '#841584',
    margin: 4,
    borderRadius: 3,
  },
  contentContainer: {
    padding: 16,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 12,
    textAlign: 'justify',
  },
  buttonContainer: {
    padding: 16,
  },
});
