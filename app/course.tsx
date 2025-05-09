import { SafeAreaProvider } from 'react-native-safe-area-context';
import CourseTopic from '../components/modules/course/Topic';
import CourseQuiz from '../components/modules/course/Quiz';
import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { useAppDispatch } from '../store/hooks';
import { initializeQuiz } from '../store/reducer/quizSlice';
import { setTotalTopics, setReadTopics } from '../store/reducer/topicSlice';
import { Alert, View, StyleSheet, Text } from 'react-native';
import { ProgressBar } from 'react-native-paper';

const courseData = {
  content: [
    { 
      type:'materi',
      ilustration: 'https://blog.openreplay.com/images/reacts-virtual-dom/images/hero.png',
      value:[
        { id: 1, description: 'BAB I - Apa Itu React DOM dan Perannya dalam React' },
        { id: 2, description: 'React DOM adalah bagian dari pustaka React yang bertanggung jawab untuk memperbarui Document Object Model (DOM) sesuai dengan perubahan yang terjadi dalam komponen React. DOM adalah struktur pohon yang merepresentasikan elemen-elemen HTML di browser. React DOM menjembatani dunia virtual React dengan browser nyata, memungkinkan pengembang membangun antarmuka yang interaktif dan dinamis.' },
        { id: 3, description: 'Salah satu fitur utama dari React DOM adalah kemampuannya menggunakan Virtual DOM untuk meningkatkan performa. Virtual DOM adalah representasi ringan dari DOM asli. Setiap kali terjadi perubahan data, React membandingkan Virtual DOM lama dan baru untuk menentukan perubahan minimum yang perlu diterapkan ke DOM nyata.' },
        { id: 4, description: 'React DOM berperan penting dalam membuat aplikasi bersifat deklaratif. Artinya, pengembang hanya perlu mendefinisikan tampilan berdasarkan state, dan React DOM yang akan menangani proses pembaruan tampilan. Ini membuat kode lebih mudah dipahami dan dirawat.' },
        { id: 5, description: 'React DOM hanya berfokus pada aplikasi web. Untuk aplikasi native (seperti di Android atau iOS), digunakan pustaka terpisah seperti React Native. Dengan memisahkan React dan React DOM, React bisa lebih fleksibel dan digunakan di berbagai platform.' },
        { id: 6, description: 'Dalam pengembangan modern, React DOM biasa digunakan bersama dengan tools seperti Webpack dan Babel. Tools ini membantu mengompilasi dan mengelola modul React, lalu menggunakan ReactDOM untuk merender hasil akhirnya ke halaman web pengguna.' },
      ]
    },
    { 
      type:'materi',
      ilustration: 'https://reactjs.org/logo-og.png',
      value:[
        { id: 1, description: 'BAB II - ReactDOM.render() dan Evolusinya' },
        { id: 2, description: 'Sebelum React 18, fungsi utama dari React DOM adalah ReactDOM.render(). Fungsi ini digunakan untuk merender elemen React ke dalam elemen HTML nyata di browser, seperti document.getElementById("root"). Ini merupakan titik awal dari semua aplikasi React.' },
        { id: 3, description: 'Contoh penggunaannya seperti: jsx ReactDOM.render(<App />, document.getElementById("root")); Kode tersebut akan mengambil komponen App dan merendernya ke dalam elemen HTML dengan ID root. Fungsi ini sangat mendasar dalam struktur aplikasi React.' },
        { id: 4, description: 'Namun, sejak React 18, pendekatan ini mulai digantikan oleh createRoot() dari paket react-dom/client. Hal ini dilakukan untuk mendukung fitur-fitur concurrent rendering seperti automatic batching dan startTransition, yang meningkatkan performa dan interaktivitas aplikasi.' },
        { id: 5, description: 'Contoh sintaks baru: jsx import { createRoot } from "react-dom/client"; const root = createRoot(document.getElementById("root")); root.render(<App />); Dengan createRoot, React dapat memberikan pengalaman pengguna yang lebih halus dan efisien tanpa memerlukan perubahan besar dalam struktur kode.' },
        { id: 6, description: 'Migrasi dari ReactDOM.render() ke createRoot() menjadi langkah penting dalam memperbarui aplikasi ke standar terbaru React. Developer disarankan untuk mengadopsi pendekatan ini untuk memastikan kompatibilitas ke depan.' },
        
      ]
    },
    { 
      type:'materi',
      ilustration: 'https://reactjs.org/logo-og.png',
      value:[
        { id: 1, description: 'BAB III - Virtual DOM: Inti dari Efisiensi React DOM' },
        { id: 2, description: 'Virtual DOM adalah konsep penting yang membuat React DOM sangat efisien. Alih-alih memanipulasi DOM secara langsung setiap kali terjadi perubahan, React membuat salinan ringan dari DOM — disebut Virtual DOM — dan hanya memperbarui bagian yang benar-benar berubah.' },
        { id: 3, description: 'Setiap kali state atau props berubah, React membandingkan Virtual DOM baru dengan versi sebelumnya menggunakan algoritma yang disebut diffing. Perbandingan ini memungkinkan React untuk menentukan perbedaan secara cepat dan efisien, tanpa harus merender ulang seluruh halaman.' },
        { id: 4, description: 'Setelah perbedaan ditemukan, React DOM melakukan reconciliation dan memperbarui hanya bagian yang diperlukan dari DOM nyata. Ini jauh lebih cepat dibandingkan manipulasi DOM manual yang memerlukan pemrosesan ulang seluruh elemen.' },
        { id: 5, description: 'Konsep ini tidak hanya meningkatkan performa tetapi juga memberikan pengalaman pengguna yang lebih mulus. Misalnya, perubahan kecil dalam input form atau animasi bisa berjalan lebih lancar karena React DOM menghindari render ulang yang tidak perlu.' },
        { id: 6, description: 'Dengan pendekatan ini, pengembang dapat fokus pada logika aplikasi dan membiarkan React DOM menangani efisiensi render di balik layar. Ini menjadikan React sangat populer untuk aplikasi berskala besar dan kompleks.' },
        
      ]
    },
    { 
      type:'materi',
      ilustration: 'https://reactjs.org/logo-og.png',
      value:[
        { id: 1, description: 'BAB IV - Event Handling di React DOM' },
        { id: 2, description: 'React DOM menyediakan cara yang konsisten dan efisien untuk menangani event di browser. Alih-alih menggunakan addEventListener seperti di JavaScript murni, React menggunakan sintaks JSX untuk mendefinisikan event handler langsung dalam komponen. Misalnya, alih-alih menulis element.addEventListener("click", handler), di React kita cukup menulis: jsx <button onClick={handleClick}>Klik Saya</button>' },
        { id: 3, description: 'Event handler tersebut akan ditangani oleh React DOM, bukan oleh browser secara langsung. React menggunakan sistem event delegasi, yang artinya event didaftarkan di root dan dikelola oleh React, bukan oleh masing-masing elemen DOM.' },
        { id: 4, description: 'Pendekatan ini memungkinkan React DOM untuk melakukan optimisasi tambahan, seperti pembatalan event atau penggabungan event dalam satu siklus render. Ini juga membantu menjaga performa saat banyak elemen di-render.' },
        { id: 5, description: 'Selain itu, React menyamakan perilaku event di berbagai browser dengan menggunakan sistem Synthetic Event. Ini adalah pembungkus dari native event yang menjamin perilaku konsisten lintas platform.' },
        { id: 6, description: 'Dengan sistem event handling ini, pengembangan interaktivitas antarmuka menjadi lebih sederhana, terstandarisasi, dan minim bug, terutama dalam aplikasi skala besar.' },
        
      ]
    },
    { 
      type:'materi',
      ilustration: 'https://reactjs.org/logo-og.png',
      value:[
        { id: 1, description: 'BAB V - ReactDOM dan Manajemen Akses ke DOM Langsung' },
        { id: 2, description: 'Meskipun React menganjurkan pendekatan deklaratif, terkadang pengembang perlu mengakses elemen DOM secara langsung, misalnya untuk integrasi dengan pustaka pihak ketiga (seperti jQuery) atau mengatur fokus input.' },
        { id: 3, description: 'React DOM memungkinkan ini melalui fitur ref. Dengan ref, kita bisa mengambil referensi langsung ke elemen DOM dari komponen React. Contohnya: jsx const inputRef = useRef(null); <input ref={inputRef} /> Setelah elemen dirender, inputRef.current akan berisi DOM node yang sebenarnya, dan kita bisa mengakses properti seperti .focus() untuk mengatur fokus input.' },
        { id: 4, description: 'React DOM juga menyediakan fungsi seperti findDOMNode, namun ini tidak disarankan untuk digunakan dalam komponen berbasis function karena bersifat imperatif dan rawan konflik. Alternatifnya, gunakan ref dan useEffect dengan pendekatan modern.' },
        { id: 5, description: 'Mengakses DOM langsung melalui React DOM harus dilakukan dengan hati-hati agar tidak merusak prinsip reaktif dari React. Manipulasi DOM manual yang tidak sesuai bisa mengganggu proses render dan menyebabkan bug yang sulit dilacak.' },
        { id: 6, description: 'Dengan memahami cara kerja ref dan kapan sebaiknya digunakan, pengembang dapat menggabungkan kekuatan React DOM dengan fleksibilitas kontrol manual tanpa mengorbankan keandalan aplikasi.' },
        
      ]
    },
    { 
      type:'quiz',
      ilustration: null,
      value:{
        question: '1. Apa peran utama React DOM dalam aplikasi React?',
        options: [
          { value: 1, label: 'A. Mengatur logika bisnis aplikasi' },
          { value: 2, label: 'B. Menyimpan state global aplikasi' },
          { value: 3, label: 'C. Menyinkronkan Virtual DOM dengan DOM nyata' },
          { value: 4, label: 'D. Menyediakan routing antar halaman' }
        ],
        answer: 3
      }
    },
    { 
      type:'quiz',
      ilustration: null,
      value:{
        question: '2. Mengapa React DOM membuat kode lebih mudah dipahami?',
        options: [
          { value: 1, label: 'A. Karena menggunakan pendekatan imperatif' },
          { value: 2, label: 'B. Karena bekerja langsung dengan HTML murni' },
          { value: 3, label: 'C. Karena memungkinkan penggunaan jQuery' },
          { value: 4, label: 'D. Karena menggunakan pendekatan deklaratif' }
        ],
        answer: 4
      }
    },
    { 
      type:'quiz',
      ilustration: null,
      value:{
        question: '3. Manakah dari berikut ini merupakan cara baru untuk merender aplikasi React sejak React 18?',
        options: [
          { value: 1, label: 'A. ReactDOM.create()' },
          { value: 2, label: 'B. ReactDOM.render()' },
          { value: 3, label: 'C. createRoot().render()' },
          { value: 4, label: 'D. renderDOM()' }
        ],
        answer: 3
      }
    },
    { 
      type:'quiz',
      ilustration: null,
      value:{
        question: '4. Apa alasan utama React mengganti ReactDOM.render() dengan createRoot()?',
        options: [
          { value: 1, label: 'A. Untuk kompatibilitas dengan HTML5' },
          { value: 2, label: 'B. Untuk mendukung concurrent rendering' },
          { value: 3, label: 'C. Untuk mendukung CSS Modules' },
          { value: 4, label: 'D. Agar lebih mudah digunakan oleh pemula' }
        ],
        answer: 2
      }
    },
    { 
      type:'quiz',
      ilustration: null,
      value:{
        question: '5. Apa fungsi utama Virtual DOM dalam React?',
        options: [
          { value: 1, label: 'A. Membandingkan perubahan dan mengoptimalkan render' },
          { value: 2, label: 'B. Menyimpan data pengguna' },
          { value: 3, label: 'C. Menghapus elemen dari DOM' },
          { value: 4, label: 'D. Menyediakan animasi secara otomatis' }
        ],
        answer: 1
      }
    },
    { 
      type:'quiz',
      ilustration: null,
      value:{
        question: '6. Apa nama proses yang digunakan React untuk membandingkan dua Virtual DOM?',
        options: [
          { value: 1, label: 'A. Staging' },
          { value: 2, label: 'B. Diffing' },
          { value: 3, label: 'C. Rendering' },
          { value: 4, label: 'D. Parsing' }
        ],
        answer: 2
      }
    },
    { 
      type:'quiz',
      ilustration: null,
      value:{
        question: '7. Apa kelebihan utama dari sistem Synthetic Event di React?',
        options: [
          { value: 1, label: 'A. Menambahkan animasi otomatis' },
          { value: 2, label: 'B. Menghapus kebutuhan akan CSS' },
          { value: 3, label: 'C. Mempercepat proses kompilasi' },
          { value: 4, label: 'D. Menjamin konsistensi lintas browser' }
        ],
        answer: 4
      }
    },
    { 
      type:'quiz',
      ilustration: null,
      value:{
        question: '8. Bagaimana React menangani event click pada tombol?',
        options: [
          { value: 1, label: 'A. Dengan delegasi event dari root menggunakan Synthetic Event' },
          { value: 2, label: 'B. Dengan addEventListener langsung di DOM' },
          { value: 3, label: 'C. Dengan metode handleEvent()' },
          { value: 4, label: 'D. Dengan callback dari HTML form' }
        ],
        answer: 1
      }
    },
    { 
      type:'quiz',
      ilustration: null,
      value:{
        question: '9. Apa tujuan utama penggunaan ref di React?',
        options: [
          { value: 1, label: 'A. Mengakses dan memodifikasi state global' },
          { value: 2, label: 'B. Membuat komponen baru secara dinamis' },
          { value: 3, label: 'C. Mengakses elemen DOM secara langsung' },
          { value: 4, label: 'D. Menyimpan data form sementara' }
        ],
        answer: 3
      }
    },
    { 
      type:'quiz',
      ilustration: null,
      value:{
        question: '10. Manakah metode yang tidak disarankan untuk mengakses DOM di komponen berbasis function?',
        options: [
          { value: 1, label: 'A. useRef()' },
          { value: 2, label: 'B. findDOMNode()' },
          { value: 3, label: 'C. useEffect()' },
          { value: 4, label: 'D. ref di elemen JSX' }
        ],
        answer: 2
      }
    },
  ]
}

export default function Course() {
  const [activeContent, setActiveContent] = useState(0);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const totalContent = courseData.content.length;
  const totalQuiz = courseData.content.filter(item => item.type === 'quiz').length;

  useEffect(() => {
    dispatch(initializeQuiz(totalQuiz));
    const totalTopics = courseData.content.filter(item => item.type === 'materi').length;
    dispatch(setTotalTopics(totalTopics));
  }, []);

  const onNextQuiz = () => {
    const isLast = activeContent === totalContent - 1;
    const currentQuizCount = courseData.content
      .slice(0, activeContent + 1)
      .filter(item => item.type === 'quiz').length;

    const isLastQuiz = currentQuizCount === totalQuiz;

    if (isLastQuiz && isLast) {
      Alert.alert('Kuis Selesai!', 'Kamu telah menyelesaikan semua soal kuis.', [
        { text: 'Lanjut', onPress: () => router.replace('/progres') },
      ]);
    } else {
      setActiveContent(activeContent + 1);
    }
  };

  const onNextContent = () => {
    dispatch(setReadTopics(activeContent + 1));
    if (activeContent < totalContent - 1) {
      setActiveContent(activeContent + 1);
    } else {
      Alert.alert('Selamat!', 'Kamu sudah menyelesaikan semua materi dan kuis.', [
        { text: 'OK', onPress: () => router.replace('./(tabs)/progres') },
      ]);
    }
  };

  const CourseController = () => {
    const current = courseData.content[activeContent];
    if (current.type === 'materi') {
      return (
        <CourseTopic
          onNextContent={onNextContent}
          topic={current.value as Array<{ id: number; description: string }>}
        />
      );
    }
    if (current.type === 'quiz') {
      return (
        <CourseQuiz
          onNextContent={onNextQuiz}
          content={current.value as {
            question: string;
            options: { value: number; label: string }[];
            answer: number | null;
          }}
        />
      );
    }
    return null;
  };

  const progress = (activeContent + 1) / totalContent;

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        {/* Progress Bar */}
        <Text style={styles.progressText}>
          Progres: {activeContent + 1} / {totalContent}
        </Text>
        <ProgressBar progress={progress} color="#6200ee" style={styles.progressBar} />

        {/* Main Course Content */}
        <CourseController />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  progressText: {
    fontSize: 14,
    marginBottom: 4,
    fontWeight: '500',
    color: '#333',
  },
  progressBar: {
    height: 8,
    borderRadius: 8,
    marginBottom: 16,
  },
});