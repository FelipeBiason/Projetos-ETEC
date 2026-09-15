import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert, KeyboardAvoidingView, Platform, ActivityIndicator } from 'react-native';
import AppInput from '../src/components/AppInput';
import AppButton from '../src/components/AppButton';
import { router } from 'expo-router';

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState('');

    return(
        <KeyboardAvoidingView
        behaviour={Platform.OS==='ios'?'padding':undefined}>
        
        <View>
            <Text style={styles.title}>Criar Conta</Text>
            <Text style={styles.subtitle}>Preencha todos os campos!</Text>

            <AppInput label="Email" placeholder="seu@email.com" autoCapitalize="none" keyboardType="email-address" value={email} onChangeText={setEmail} />
            <AppInput label="Senha" secureTextEntry placeholder="******" value={password} onChangeText={setPassword} />
            <AppInput label="Senha" secureTextEntry placeholder="******" value={confirmPassword} onChangeText={setConfirmPassword} />
            <AppButton title="Entrar" loading={loading} />

            <TouchableOpacity onPress={()=>router.push('/')}>
                <Text style={styles.link}>Já possui uma conta?</Text>
            </TouchableOpacity>

        </View>
        </KeyboardAvoidingView>

    );
}
    const styles = StyleSheet.create({
        container:{
            flex: 1,
            justifyContent: 'center',
            padding: 24,
            backgroundColor: '#f8f9fa',
        },
        title: {
            fontSize: 34,
            fontWeight: '900',
            color: '#7f8c8d',
            textAlign: 'center',
            marginBottom: 32,
        },

        subtitle: {
            color: '#7f8c8d',
            textAlign: 'center',
            marginBottom: 32,
        },

        link: {
            color: '#008f72',
            textAlign: 'center',
            marginTop: 20,
            fontWeight: '700',
        }
    })
