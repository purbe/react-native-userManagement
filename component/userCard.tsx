import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';


export default function UserCard({userName,userStatus,onPress}) {

    return (

            <TouchableOpacity onPress={onPress} style={[styles.card, styles.cardElevated]} >
                <View style={styles.cardBody}>
                   <View style={styles.cardHeader}>
                       <Image
                           source={{
                               uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQZA8s3i80S9sJnQwPMBucnYOuPjOsPWuuWKP272agfS60vRU_0o1Vzv_6W03OySwua1OyWOjO2wlK9hVL2lzOgQ'
                           }}
                           style={styles.userImage}
                       />
                       <View>
                           <Text style={styles.userName}>{userName}</Text>
                           <Text style={styles.userStatus}>Status : {userStatus}</Text>
                       </View>
                   </View>
                    <Text style={styles.cardDescription}>The Hawa Mahal is a palace in the city of Jaipur, India. Built from
                        red and pink sandstone, it is on the edge of the City Palace.</Text>
                    <Text style={styles.cardFooter}>12 mins away</Text>
                </View>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    card: {
        width: 350,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16

    },
    cardHeader:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
        backgroundColor: '#DAE0E2',
        padding: 8,
        borderRadius: 6,
    },
    cardElevated: {
        backgroundColor: '#FFFFFF',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        }

    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        marginRight: 14
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000000',
    },
    userStatus: {
        fontSize: 12
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,

    },
    cardTitle: {
        color: '#000000',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4
    },
    cardLabel: {
        color: '#000000',
        fontSize: 14,
        marginBottom: 6
    },
    cardDescription: {
        color: '#242B2E',
        fontSize: 12,
        marginBottom: 12,
        marginTop: 6,
        flexShrink: 1,
        paddingHorizontal: 12
    },
    cardFooter: {
        color: '#000000',
        paddingHorizontal: 12
    }

})
