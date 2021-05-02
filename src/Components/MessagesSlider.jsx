import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Message from './Message';

firebase.initializeApp({
	apiKey: "AIzaSyDlh1nFWl9OW2RXarXLYrGvk9nuxmhm28A",
	authDomain: "cancellation-board.firebaseapp.com",
	projectId: "cancellation-board",
	storageBucket: "cancellation-board.appspot.com",
	messagingSenderId: "993427053785",
	appId: "1:993427053785:web:96aedf6e9fee13309732c8"
});

const firestore = firebase.firestore();


const MessagesSlider = ({ type }) => {
    const messagesRef = firestore.collection(type);
    const query = messagesRef.orderBy('from');
    const [messages] = useCollectionData(query, { idField: 'id' });
    return (
        <ul>
            <li>Hello</li>
            <li>World</li>
            {messages && messages.map(msg => <Message key={msg.id} msg={msg} isSystem={type === 'system'}/>)}
        </ul>
    )
}

export default MessagesSlider
