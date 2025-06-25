import React from 'react';
import { Text, View, Image, StyleSheet, Pressable } from 'react-native';

interface CourseCardType {
  onGoToDetail?: (value: any) => void;
  onStartCourse?: (value: any) => void;
  title: string;
  deskription: string;
  catergory: string;
  tanggal: string;
  image: string;
}

export const CourseCard = ({
  onGoToDetail,
  onStartCourse,
  title,
  deskription,
  catergory,
  tanggal,
  image,
}: CourseCardType) => {
  const isEnabled = true; // Tambahkan logika sesuai kebutuhan

  return (
    <View style={styles.cardContainer}>
      <Image source={{ uri: image }} style={styles.imageStyles} />
      <View style={styles.cardInfo}>
        <View style={styles.infoHeader}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.category}>{tanggal}</Text>
        </View>
        <Text style={styles.description}>{deskription}</Text>
        <View style={styles.buttonContainer}>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              { backgroundColor: pressed && isEnabled ? '#6c2d7d' : '#841584' },
            ]}
            onPress={isEnabled && onGoToDetail ? () => onGoToDetail(title) : undefined}
          >
            <Text style={styles.buttonText}>Preview</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              { backgroundColor: pressed && isEnabled ? '#0052cc' : '#007aff' },
            ]}
            onPress={isEnabled && onStartCourse ? () => onStartCourse(title) : undefined}
          >
            <Text style={styles.buttonText}>Start</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 2,
  },
  imageStyles: {
    width: '100%',
    height: 225,
    resizeMode: 'cover',
  },
  cardInfo: {
    padding: 15,
  },
  infoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    flex: 1,
  },
  category: {
    color: '#666',
    fontSize: 13,
  },
  description: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
    backgroundColor: '#841584',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
