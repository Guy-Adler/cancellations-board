import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Message from './Message';
import './Slider.css';

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

    const [marquee, setMarquee] = useState(false);

    useEffect(() => {
        const marqueeElement = document.getElementById(`marquee-${type}`);
        const wrapperElement = document.getElementById(`slide-wrapper-${type}`);
        setMarquee(marqueeElement.getBoundingClientRect().height > wrapperElement.getBoundingClientRect().height)
    }, [type, messages])

    return (
        <div className="slider-wrapper" id={`slide-wrapper-${type}`}>
        <ul className={marquee ? "marquee" : ""} id={`marquee-${type}`}>
            {messages && messages.map(msg => <Message key={msg.id} msg={msg} isSystem={type === 'system'}/>)}        
        </ul>
        {/*This needs to be added again for it to be continuous*/}
        <ul className={marquee ? "marquee marquee-2" : "hide"}>
            {messages && messages.map(msg => <Message key={msg.id} msg={msg} isSystem={type === 'system'}/>)}            
        </ul>
        </div>
    )
}

export default MessagesSlider
