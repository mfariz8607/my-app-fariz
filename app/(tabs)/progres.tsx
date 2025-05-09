import { ScrollView, StyleSheet } from 'react-native';
import { CourseProgresCard } from '../../components/CourseProgresCard';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function ProgresTab() {
  return (
    <SafeAreaProvider>
      <ScrollView style={styles.container}>
        <CourseProgresCard/>
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
});