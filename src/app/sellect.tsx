import React, { useState, useRef } from 'react';
import { View, Text, Image, StyleSheet, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

const InroductionMaterials = [
  {
    id: 0,
    image: require('../../assets/images/image0.png'),
    title: 'Kitoblardan o’rganish uchun innovatsion yondashuv',
    label: 'Kitobning asosiy g’oyalarini eshitish va o’qish orqali o’rganing.',
  },
  {
    id: 1,
    image: require('../../assets/images/image1.png'),
    title: 'Dunyo tan olgan kitoblar atiga 15 daqiqa ichida !',
    label: 'Hayotingizni o’zgartiruvchi eng sara kitoblar sizni kutmoqda.',
  },
  {
    id: 2,
    image: require('../../assets/images/image2.png'),
    title: 'Kitob o’qish endi qiziq va samaraliroq !',
    label: 'Interaktiv o’yinlar bilan endi osonroq o’rganasiz.',
  }
];

const Introductions = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const colorScheme = useColorScheme();
  const router = useRouter();
  const flatListRef = useRef<FlatList>(null);

  const renderItem = ({ item }: any) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} />
      <View style={{marginTop: 10,}}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.label}>{item.label}</Text>
      </View>
    </View>
  );

  const handlePress = () => {
    if (currentIndex === 2) {
      flatListRef.current?.scrollToIndex({ index: 1, animated: true });
      setTimeout(() => {
        
            router.navigate('/selection')
        
      }, 300); // Delay to allow the scroll animation to complete before navigating
    } else {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1, animated: true });
      setCurrentIndex(currentIndex + 1);
    }
  };

  const getButtonText = () => {
    switch (currentIndex) {
      case 0:
        return 'Get Started';
      case 1:
      case 2:
        return 'Continue';
      default:
        return 'Continue';
    }
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: '#f6f6f6' }]}>
      <FlatList
        ref={flatListRef}
        data={InroductionMaterials}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        onScroll={(event) => {
          const newIndex = Math.round(event.nativeEvent.contentOffset.x / width);
          if (newIndex !== currentIndex) {
            setCurrentIndex(newIndex);
          }
        }}
      />
      <View style={styles.pagination}>
        {InroductionMaterials.map((_, index) => (
          <View
            key={index}
            style={[
              styles.line,
              currentIndex === index
                ? styles.activeLine
                : styles.inactiveLine,
            ]}
          />
        ))}
      </View>
      <TouchableOpacity style={[styles.button, { backgroundColor: Colors[colorScheme ?? 'light'].primary }]} onPress={handlePress}>
        <Text style={styles.buttonText}>
          {getButtonText()}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default function LoginRegisterSelection() {
  const colorScheme = useColorScheme();

  return (
    <View style={{ flex: 1, backgroundColor: Colors[colorScheme ?? 'light'].background }}>
      <Introductions />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide: {
    width,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 600,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'left',
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    color: '#666',
    textAlign: 'left',
  },
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  line: {
    height: 3,
    borderRadius: 2,
    marginHorizontal: 4,
  },
  activeLine: {
    width: 20,
    backgroundColor: '#333',
  },
  inactiveLine: {
    width: 10,
    backgroundColor: '#888',
  },
  button: {
    marginTop: 20,
    width: '90%',
    paddingVertical: 20,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});
