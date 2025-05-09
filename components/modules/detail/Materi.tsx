import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export const Materi = () => {
    const onStartCourse = () => {
        router.push("/course");
      };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.exclusiveLabel}>
                <Text style={styles.exclusiveText}>Exclusive</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.title}>Pengenalan React DOM</Text>
                <Text style={styles.text}>
                    React DOM adalah bagian dari React yang bertugas merender komponen React ke DOM nyata di browser. Ini merupakan jembatan antara kode React dan antarmuka pengguna berbasis HTML.
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.subtitle}>Peran React DOM</Text>
                <Text style={styles.text}>
                    ✅ Menghubungkan komponen React dengan DOM browser{"\n"}
                    ✅ Mengelola pembaruan UI berdasarkan perubahan state atau props{"\n"}
                    ✅ Bekerja sama dengan Virtual DOM untuk performa tinggi{"\n"}
                    ✅ Mengoptimalkan perubahan DOM agar tidak membebani browser
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.subtitle}>Metode Render</Text>
                <Text style={styles.text}>
                    ✅ `ReactDOM.render()` digunakan sebelum React 18{"\n"}
                    ✅ `createRoot()` digunakan pada React 18 untuk mendukung concurrent rendering{"\n"}
                    ✅ `hydrate()` digunakan untuk merender aplikasi hasil server-side rendering
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.subtitle}>Virtual DOM</Text>
                <Text style={styles.text}>
                    ✅ Representasi ringan dari DOM asli{"\n"}
                    ✅ React membandingkan Virtual DOM lama dan baru untuk efisiensi pembaruan{"\n"}
                    ✅ Hanya bagian yang berubah yang di-update di DOM nyata{"\n"}
                    ✅ Membantu performa UI tetap cepat walaupun banyak komponen
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.subtitle}>Kelebihan React DOM</Text>
                <Text style={styles.text}>
                    ✅ Cepat dan efisien melalui teknik diffing{"\n"}
                    ✅ Dukungan ekosistem luas (React Router, Redux, dsb){"\n"}
                    ✅ Kompatibel dengan berbagai browser modern{"\n"}
                    ✅ Cocok untuk SPA (Single Page Application)
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.subtitle}>Keterbatasan React DOM</Text>
                <Text style={styles.text}>
                    ❌ Tidak bisa digunakan untuk aplikasi mobile native (gunakan React Native){"\n"}
                    ❌ Perlu belajar JSX dan konsep reaktif{"\n"}
                    ❌ Kurva belajar yang cukup menantang untuk pemula
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.subtitle}>React DOM vs React Native</Text>
                <Text style={styles.text}>
                    🧠 React DOM = Web (HTML, CSS){"\n"}
                    📱 React Native = Mobile (iOS/Android) dengan komponen native seperti View & Text{"\n"}
                    🔁 Logika React sama, tetapi target platform dan rendering engine berbeda
                </Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={onStartCourse}>
                <Text style={styles.buttonText}>Mulai Belajar</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0A192F',
        padding: 20,
        borderRadius: 10
    },
    exclusiveLabel: {
        backgroundColor: '#FF6B00',
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignSelf: 'flex-start',
        borderRadius: 5,
        marginBottom: 10,
    },
    exclusiveText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    card: {
        padding: 20,
        marginBottom: 10,
        backgroundColor: '#112240',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#64ffda',
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ccd6f6',
    },
    text: {
        fontSize: 16,
        marginTop: 10,
        color: '#8892b0',
    },
    button: {
        backgroundColor: '#64ffda',
        paddingVertical: 15,
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 20,
        marginBottom: 40
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#0A192F',
    }
});