
import {StyleSheet, View,Text} from 'react-native';
import {useEffect,useState} from "react";
import {Picker} from "@react-native-picker/picker";
import {userData} from "../assets/sampleUser.ts";
import UserCard from "./userCard.tsx";
import { useNavigation } from '@react-navigation/native';
import {useUser} from "../hook/useUser.tsx";


export default function User() {
    const [value, setValue] = useState(' ');
    const [filterUser ,setFilterUser] = useState([]);
    const navigation = useNavigation();
    const { state,dispatch } = useUser();

    useEffect(() => {
        // Filter users based on the selected status
        const filters = userData.users.filter((user) => user.status === value);
        setFilterUser(filters);

        // Dispatch the selected status to update the context
        if (filters.length > 0) {
            dispatch({ type: 'APPROVE_USER', payload: { id: filters[0].id, name: filters[0].name } });
        }
    }, [value, dispatch]);

    useEffect(() => {
        setValue('approved'); // Set approved users initially
    }, []);

    return (
       <>
            <View style={styles.dropdown}>
                <Picker
                    selectedValue={value}
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) => setValue(itemValue)}
                >
                    <Picker.Item label="Approved" value="approved" />
                    <Picker.Item label="Rejected" value="rejected" />
                    <Picker.Item label="Revoked" value="revoked" />
                </Picker>
            </View>

           {filterUser.length > 0 ? (
               <View>
                   {filterUser.map((user) => (
                      <UserCard
                          key={user.id}
                          userName={user.name}
                          userStatus={user.status}
                          user={user}                    // Pass the entire user object
                          navigation={navigation}
                      />))
                   }
               </View>
           ) : (
               <Text >No users found for the selected status</Text>
           )}
      </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 16,
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    picker: {
        height: 50,
        width: 200,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});
