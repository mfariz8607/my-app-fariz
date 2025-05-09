import { ScrollView, TextInput, StyleSheet, View, Text, Button, Alert } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useSelector, useDispatch } from "react-redux";
import { updateProfile } from "@/store/reducer/profileSlice";
import { router } from "expo-router";
import React, { useState } from "react";

export default function Profile() {
  const profile = useSelector(state => state.profile);
  const dispatch = useDispatch();

  // Local state (bukan langsung dari Redux)
  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [address, setAddress] = useState(profile.address);
  const [phone, setPhone] = useState(profile.phone);

  const onSave = () => {
    dispatch(updateProfile({ name, email, address, phone, photo: profile.photo }));
    Alert.alert('Berhasil', 'Profil disimpan.');
    router.push('/(tabs)/settings');
  };

  const onCancel = () => {
    Alert.alert('Konfirmasi', 'Perubahan belum disimpan. Kembali?', [
      { text: 'Batal', style: 'cancel' },
      { text: 'Kembali', style: 'destructive', onPress: () => router.push('/(tabs)/settings') }
    ]);
  };

  return (
    <SafeAreaProvider>
      <ScrollView style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.label}>Nama Lengkap</Text>
          <TextInput
            style={styles.input}
            onChangeText={setName}
            value={name}
            placeholder="Masukkan Nama lengkap"
          />

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            keyboardType="email-address"
            placeholder="Masukkan email"
          />

          <Text style={styles.label}>Alamat</Text>
          <TextInput
            style={styles.inputAddress}
            onChangeText={setAddress}
            value={address}
            multiline
            editable
            numberOfLines={4}
            maxLength={40}
            placeholder="Masukkan alamat"
          />

          <Text style={styles.label}>Nomor HP</Text>
          <TextInput
            style={styles.input}
            onChangeText={setPhone}
            value={phone}
            keyboardType="phone-pad"
            placeholder="Masukkan nomor HP"
          />

          <View style={styles.buttonContainer}>
            <Button title="Simpan" onPress={onSave} color="#4CAF50" />
            <View style={{ height: 10 }} />
            <Button title="Kembali" onPress={onCancel} color="red" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAF9',
  },
  form: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    margin: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 12,
    marginBottom: 4,
  },
  input: {
    height: 44,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  inputAddress: {
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    paddingVertical: 10,
  },
  buttonContainer: {
    marginTop: 24,
  },
});
