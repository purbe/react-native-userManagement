import React, { createContext, useReducer, useContext, ReactNode } from 'react';

// Define user statuses
type UserStatus = 'approved' | 'rejected' | 'revoked' | null;

// Define the user state interface
interface UserState {
    id: string | null;
    name: string;
    status: UserStatus;
}

// Define actions for the user reducer
type Action =
    | { type: 'APPROVE_USER'; payload: { id: string; name: string } }
    | { type: 'REJECT_USER' }
    | { type: 'REVOKE_USER' }
    | { type: 'RESET_USER' };

// Define the initial state
const initialState: UserState = {
    id: null,
    name: '',
    status: null,
};

// Create the reducer function
function userReducer(state: UserState, action: Action): UserState {
    switch (action.type) {
        case 'APPROVE_USER':
            return {
                ...state,
                id: action.payload.id,
                name: action.payload.name,
                status: 'approved',
            };
        case 'REJECT_USER':
            return {
                ...state,
                status: 'rejected',
            };
        case 'REVOKE_USER':
            return {
                ...state,
                status: 'revoked',
            };
        case 'RESET_USER':
            return initialState;
        default:
            return state;
    }
}

// Create the context
const UserContext = createContext<{
    state: UserState;
    dispatch: React.Dispatch<Action>;
} | null>(null);

// Create a provider component
export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(userReducer, initialState);

    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {children}
        </UserContext.Provider>
    );
};

// Create a custom hook for accessing user context
export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};
