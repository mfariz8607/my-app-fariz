import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

interface InfoProps {
    description?: string;
}

export const Info = (props:InfoProps) => {
    return (
        <ScrollView style={styles.container}>
            <Text> {props.description} </Text>
            
            {/* <View style={styles.exclusiveLabel}>
                <Text style={styles.exclusiveText}>Exclusive</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.title}>React DOM</Text>
                <Text style={styles.text}>
                    React DOM adalah library yang menjembatani antara komponen React dan DOM asli di browser, memungkinkan aplikasi web berjalan dengan efisien dan interaktif. React DOM bertanggung jawab untuk merender elemen ke dalam struktur HTML yang ditampilkan pada halaman web.
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.subtitle}>Keunggulan</Text>
                <Text style={styles.text}>
                    ✅ Pembaruan DOM yang efisien melalui Virtual DOM{"\n"}
                    ✅ Kode deklaratif lebih mudah dipahami{"\n"}
                    ✅ Kompatibel dengan banyak tool modern seperti Babel & Webpack{"\n"}
                    ✅ Skalabilitas tinggi untuk aplikasi kompleks{"\n"}
                    ✅ Dukungan komunitas yang luas
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.subtitle}>Komponen Utama</Text>
                <Text style={styles.text}>
                    ✅ ReactDOM.render() (sebelum React 18){"\n"}
                    ✅ createRoot() (mulai React 18){"\n"}
                    ✅ Virtual DOM{"\n"}
                    ✅ Synthetic Event System{"\n"}
                    ✅ hydrate() untuk server-side rendering
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.subtitle}>Analogi Sederhana</Text>
                <Text style={styles.text}>
                    Bayangkan Virtual DOM seperti konsep "draft" dalam menulis. Daripada langsung mengedit naskah final (DOM asli), kamu membuat draf perubahan dulu (Virtual DOM), lalu setelah yakin, baru diterapkan ke versi akhir (DOM nyata). Ini membuat proses lebih efisien dan minim kesalahan.
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.subtitle}>Perbedaan dengan React Native</Text>
                <Text style={styles.text}>
                    React DOM digunakan untuk membangun antarmuka web berbasis browser. Sementara React Native digunakan untuk membangun aplikasi mobile yang menghasilkan komponen asli (native components) seperti View, Text, dll. React Native tidak menggunakan DOM, melainkan bridge ke native API.
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.subtitle}>Best Practice</Text>
                <Text style={styles.text}>
                    ✅ Gunakan React.Fragment untuk menghindari div berlebih{"\n"}
                    ✅ Optimalkan komponen dengan React.memo{"\n"}
                    ✅ Hindari manipulasi DOM langsung dengan `document.querySelector`{"\n"}
                    ✅ Gunakan key unik saat membuat list{"\n"}
                    ✅ Gunakan useEffect dan useRef untuk interaksi DOM
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.subtitle}>Tambahan Informasi</Text>
                <Text style={styles.text}>
                    ✅ React DOM hanya digunakan untuk pengembangan web, sedangkan untuk mobile digunakan React Native.{"\n"}
                    ✅ ReactDOM bekerja sangat baik dengan tools seperti Redux, React Router, dan lainnya untuk membangun SPA (Single Page Application).
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.subtitle}>Perkembangan</Text>
                <Text style={styles.text}>
                    ✅ ReactDOM telah berevolusi untuk mendukung fitur-fitur seperti concurrent rendering sejak React 18.{"\n"}
                    ✅ Kini lebih fleksibel dan efisien dalam merender UI kompleks.{"\n"}
                    ✅ Integrasi lebih baik dengan fitur-fitur seperti Suspense, Lazy Loading, dan Streaming Server Rendering.
                </Text>
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Lihat Kelas</Text>
            </TouchableOpacity> */}
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
