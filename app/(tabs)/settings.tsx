import { ScrollView, TouchableOpacity, StyleSheet, Text, View, Image, Platform } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import * as ImagePicker from 'expo-image-picker';
import { setPhoto } from '@/store/reducer/profileSlice';
import { ReactNode } from 'react';

interface MenuItemProps {
  icon: ReactNode;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, label }) => (
  <TouchableOpacity style={styles.menuItem}>
    <View style={styles.menuLeft}>
      {icon}
      <Text style={styles.menuLabel}>{label}</Text>
    </View>
    <Feather name="chevron-right" size={24} color="#999" />
  </TouchableOpacity>
);

export default function SettingsTab() {
  const profile = useSelector((state: RootState) => state.profile);
  const dispatch = useDispatch();

  const pickImage = async () => {
    // Minta izin akses galeri (hanya di mobile)
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Izin akses galeri ditolak!');
        return;
      }
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled && result.assets.length > 0) {
      dispatch(setPhoto(result.assets[0].uri));
    }
  };

  if (!profile) {
    return <Text>Loading...</Text>;
  }

  return (
    <SafeAreaProvider>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={pickImage}>
            <Image
              source={{ uri: profile.photo || 'https://images.bauerhosting.com/legacy/media/6282/805b/d89b/4873/b676/2b93/boys-season-3-1.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=1440&q=80' }}
              style={styles.profileImage}
            />
            <View style={styles.cameraIcon}>
              <Feather name="camera" size={20} color="#000" />
            </View>
          </TouchableOpacity>

          <Text style={styles.name}>{profile.name}</Text>
          <Text style={styles.email}>{profile.email}</Text>
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => router.push('/profile')}>
            <Text style={styles.editText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.menu}>
          <MenuItem icon={<Feather name="heart" size={22} color="#333" />} label="Favourites" />
          <MenuItem icon={<Feather name="download" size={22} color="#333" />} label="Downloads" />
          <View style={styles.separator} />
          <MenuItem icon={<Feather name="globe" size={22} color="#333" />} label="Language" />
          <MenuItem icon={<Feather name="map-pin" size={22} color="#333" />} label="Location" />
          <MenuItem icon={<Feather name="monitor" size={22} color="#333" />} label="Display" />
          <MenuItem icon={<Feather name="rss" size={22} color="#333" />} label="Feed preference" />
          <MenuItem icon={<Feather name="credit-card" size={22} color="#333" />} label="Subscription" />
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9FAF9',
    flex: 1,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 30,
    backgroundColor: '#fff',
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 0,
    right: -4,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 4,
    elevation: 2,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 10,
  },
  email: {
    fontSize: 14,
    color: '#666',
  },
  editButton: {
    marginTop: 10,
    backgroundColor: '#4CAF50',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 8,
  },
  editText: {
    color: '#fff',
    fontWeight: '600',
  },
  menu: {
    padding: 16,
    backgroundColor: '#fff',
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuLabel: {
    fontSize: 16,
    marginLeft: 14,
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 12,
  },
});
