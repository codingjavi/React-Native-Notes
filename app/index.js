//HOME PAGE
//STATES
import { useState } from 'react';
//special react native components
import { View, ScrollView, SafeAreaView } from 'react-native';
//like react router
import { Stack, useRouter } from 'expo-router';

//constants
import { COLORS, icons, images, SIZES } from '../constants';
//getting components
import { Nearbyjobs, ScreenHeaderBtn } from '../components';


const Home = () => {
    //router
    a
    const router = useRouter();

    return (
        
        <SafeAreaView style = {{ flex : 1, backgroundColor: COLORS.lightWhite}}>
            {/* SafeAreaView: not affected by phones other things on screen 
            Stack.Screen: screen we're using 
                passing in object for atributes 
            */}
            <Stack.Screen 
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite},
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn />
                    )

                    }} />
        </SafeAreaView>
    )
}

export default Home;