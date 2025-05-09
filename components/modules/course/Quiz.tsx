import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useAppDispatch } from '../../../store/hooks';
import { incrementScore, incrementAnswered } from '../../../store/reducer/quizSlice';

interface QuizProps {
  content: {
    question: string;
    options: { value: number; label: string }[];
    answer: number | null;
  };
  onNextContent: () => void;
}

export default function CourseQuiz({ content, onNextContent }: QuizProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useAppDispatch();

  const handlePress = (value: number) => {
    if (!submitted) setSelected(value);
  };

  const handleSubmit = () => {
    if (selected !== null && !submitted) {
      if (selected === content.answer) {
        dispatch(incrementScore());
      } else {
        dispatch(incrementAnswered());
      }
      setSubmitted(true);
      // Tunggu 1.5 detik sebelum lanjut ke soal berikutnya
      setTimeout(() => {
        setSelected(null);
        setSubmitted(false);
        onNextContent();
      }, 1500);
    }
  };

  const getOptionStyle = (value: number) => {
    if (!submitted) {
      return [
        styles.option,
        selected === value && styles.selectedOption,
      ];
    }

    if (value === content.answer) {
      return [styles.option, styles.correctOption];
    }

    if (value === selected && selected !== content.answer) {
      return [styles.option, styles.incorrectOption];
    }

    return styles.option;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{content.question}</Text>
      {content.options.map((opt) => (
        <TouchableOpacity
          key={opt.value}
          style={getOptionStyle(opt.value)}
          onPress={() => handlePress(opt.value)}
          disabled={submitted}
        >
          <Text>{opt.label}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity
        style={[styles.submitButton, selected === null && styles.disabledButton]}
        onPress={handleSubmit}
        disabled={selected === null || submitted}
      >
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  question: { fontSize: 18, marginBottom: 20 },
  option: {
    padding: 15,
    backgroundColor: '#eee',
    borderRadius: 10,
    marginVertical: 5,
  },
  selectedOption: {
    backgroundColor: '#ccc',
  },
  correctOption: {
    backgroundColor: '#C8E6C9',
  },
  incorrectOption: {
    backgroundColor: '#FFCDD2',
  },
  submitButton: {
    backgroundColor: '#3f72af',
    padding: 12,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#aaa',
  },
  submitText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
