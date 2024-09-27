import React, { useState } from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';
import { Snackbar } from 'react-native-paper';
import {useUser} from "../hook/useUser.tsx";

export default function UserDetail({ route }) {
    const { state, dispatch } = useUser();
    const { user } = route.params;  // Get user data from navigation
    const [status, setStatus] = useState(user.status);  // User's current status
    const [snackbarVisible, setSnackbarVisible] = useState(false);


    const onDismissSnackbar = () => setSnackbarVisible(false);
    const currentStatus = user.status;

    const changeStatus = (newStatus: string) => {
        if (newStatus === 'approved') {
            dispatch({ type: 'APPROVE_USER', payload: { id: user.id, name: user.name } });
        } else if (newStatus === 'rejected') {
            dispatch({ type: 'REJECT_USER' });
        } else if (newStatus === 'revoked') {
            dispatch({ type: 'REVOKE_USER' });
        }
        setStatus(newStatus);
        setSnackbarVisible(true);
    };



    return (
        <View style={styles.container}>
            {currentStatus === 'approved' && (
                <>
                    <Button title="Reject" onPress={() => changeStatus('rejected')} />
                    <Button title="Revoke" onPress={() => changeStatus('revoked')} />
                </>
            )}
            {currentStatus === 'rejected' && (
                <>
                    <Button title="Approve" onPress={() => changeStatus('approved')} />
                    <Button title="Revoke" onPress={() => changeStatus('revoked')} />
                </>
            )}
            {currentStatus === 'revoked' && (
                <>
                    <Button title="Approve" onPress={() => changeStatus('approved')} />
                    <Button title="Reject" onPress={() => changeStatus('rejected')} />
                </>
            )}

                <View>
                <Text style={styles.name}>{user.name}</Text>
                <Text style={styles.status}>Status: {status}</Text>
                <Text>Other user details go here...</Text>
                </View>

            {/* Snackbar for status change feedback */}
            <Snackbar
                visible={snackbarVisible}
                onDismiss={onDismissSnackbar}
                duration={3000}  // Snackbar will disappear after 3 seconds
                action={{
                    label: 'Dismiss',
                    onPress: () => {
                        setSnackbarVisible(false);  // Manually dismiss the Snackbar
                    },
                }}
            >
                <Text> Status updated to {state.status} </Text>
            </Snackbar>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },

    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    status: {
        fontSize: 18,
        marginBottom: 16,
        color: '#555',
    },
});
