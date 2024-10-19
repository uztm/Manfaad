import React from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';


export const Selection = () => {
    const colorScheme = useColorScheme();
    const router = useRouter();
    return (
        <View style={[{ backgroundColor: Colors[colorScheme ?? 'light'].background }]}>
            <View style={{ height: '62%', width: '100%' }}></View>
            <View style={[{ backgroundColor: Colors[colorScheme ?? 'light'].primary }, style.container]}>
                <Text style={{ fontSize: 34, color: '#fff', fontWeight: 'bold' }}>
                    Welcome
                </Text>
                <Text style={{ width: '100%', textAlign: 'justify', color: '#fff', marginTop: 10, fontWeight: '600' }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.
                </Text>

                <View style={style.btnWrapper}>
                    <TouchableOpacity style={[{ backgroundColor: Colors[colorScheme ?? 'light'].btn, width: '48%', }, style.btn,]} onPress={() => router.push({ pathname: '/auth/register' })}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff' }}>Ro'yhatdan o'tish</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[{ backgroundColor: '#fff' }, style.btn]} onPress={() => router.push({ pathname: '/auth/login' })}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }} >Kirish</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    )
}


const style = StyleSheet.create({

    container: {
        paddingHorizontal: 30,
        height: '45%',
        paddingVertical: 30,
        borderRadius: 30,
    },
    btnWrapper: {
        width: '100%',
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
    },
    btn: {
        width: '48%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
    }
})
