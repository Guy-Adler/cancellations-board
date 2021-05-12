import React, { useLayoutEffect, useState } from 'react';
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


const MessagesSlider = ({ type, hide, refresh }) => {
    const messagesRef = firestore.collection(type);
    const query = messagesRef.orderBy('from');
    const [messages] = useCollectionData(query, { idField: 'id' });

    const [marquee, setMarquee] = useState(false);

    useLayoutEffect(() => {
        const marqueeElement = document.getElementById(`marquee-${type}`);
        const wrapperElement = document.getElementById(`slide-wrapper-${type}`);
        setMarquee(marqueeElement.getBoundingClientRect().height > wrapperElement.getBoundingClientRect().height)
        if (messages) {
            const marquee2 = document.getElementById(`marquee-${type}-2`);
            marqueeElement.style["animation-duration"] = 80 * messages.length + "s";
            marquee2.style["animation-duration"] = 80 * messages.length + "s";
        }
    }, [type, messages, refresh])

    return (
        <div className="slider-wrapper" id={`slide-wrapper-${type}`} hidden={hide}>
        <ul className={marquee ? "marquee" : ""} id={`marquee-${type}`}>
            {messages && messages.map(msg => <Message key={msg.id} msg={msg} isSystem={type === 'system'}/>)}
            {messages && messages.map(msg => <Message key={msg.id} msg={msg} isSystem={type === 'system'}/>)}
            {messages && messages.map(msg => <Message key={msg.id} msg={msg} isSystem={type === 'system'}/>)}
            {messages && messages.map(msg => <Message key={msg.id} msg={msg} isSystem={type === 'system'}/>)}
            {messages && messages.map(msg => <Message key={msg.id} msg={msg} isSystem={type === 'system'}/>)}
            {messages && messages.map(msg => <Message key={msg.id} msg={msg} isSystem={type === 'system'}/>)}
            {messages && messages.map(msg => <Message key={msg.id} msg={msg} isSystem={type === 'system'}/>)}
            {messages && messages.map(msg => <Message key={msg.id} msg={msg} isSystem={type === 'system'}/>)}
            {messages && messages.map(msg => <Message key={msg.id} msg={msg} isSystem={type === 'system'}/>)}
            {messages && messages.map(msg => <Message key={msg.id} msg={msg} isSystem={type === 'system'}/>)}
            {messages && messages.map(msg => <Message key={msg.id} msg={msg} isSystem={type === 'system'}/>)}
            {messages && messages.map(msg => <Message key={msg.id} msg={msg} isSystem={type === 'system'}/>)}
            {messages && messages.map(msg => <Message key={msg.id} msg={msg} isSystem={type === 'system'}/>)}
            {messages && messages.map(msg => <Message key={msg.id} msg={msg} isSystem={type === 'system'}/>)}
            {messages && messages.map(msg => <Message key={msg.id} msg={msg} isSystem={type === 'system'}/>)}
            {messages && messages.map(msg => <Message key={msg.id} msg={msg} isSystem={type === 'system'}/>)}
            {messages && messages.map(msg => <Message key={msg.id} msg={msg} isSystem={type === 'system'}/>)}
            {messages && messages.map(msg => <Message key={msg.id} msg={msg} isSystem={type === 'system'}/>)}
            {messages && messages.map(msg => <Message key={msg.id} msg={msg} isSystem={type === 'system'}/>)}
            {messages && messages.map(msg => <Message key={msg.id} msg={msg} isSystem={type === 'system'}/>)}
            {messages && messages.map(msg => <Message key={msg.id} msg={msg} isSystem={type === 'system'}/>)}
            {messages && messages.map(msg => <Message key={msg.id} msg={msg} isSystem={type === 'system'}/>)}
            {messages && messages.map(msg => <Message key={msg.id} msg={msg} isSystem={type === 'system'}/>)}
            {messages && messages.map(msg => <Message key={msg.id} msg={msg} isSystem={type === 'system'}/>)}
        </ul>
        {/*This needs to be added again for it to be continuous*/}
        <ul className={marquee ? "marquee marquee-2" : "hide"} id={`marquee-${type}-2`}>
            {messages && messages.map(msg => <Message key={msg.id} msg={msg} isSystem={type === 'system'}/>)}
            {messages && messages.map(msg => <Message key={msg.id} msg={msg} isSystem={type === 'system'}/>)}
            {messages && messages.map(msg => <Message key={msg.id} msg={msg} isSystem={type === 'system'}/>)}
            {messages && messages.map(msg => <Message key={msg.id} msg={msg} isSystem={type === 'system'}/>)}
            {messages && messages.map(msg => <Message key={msg.id} msg={msg} isSystem={type === 'system'}/>)}
            {messages && messages.map(msg => <Message key={msg.id} msg={msg} isSystem={type === 'system'}/>)}
            {messages && messages.map(msg => <Message key={msg.id} msg={msg} isSystem={type === 'system'}/>)}
            {messages && messages.map(msg => <Message key={msg.id} msg={msg} isSystem={type === 'system'}/>)}
            {messages && messages.map(msg => <Message key={msg.id} msg={msg} isSystem={type === 'system'}/>)}
            {messages && messages.map(msg => <Message key={msg.id} msg={msg} isSystem={type === 'system'}/>)}
            {messages && messages.map(msg => <Message key={msg.id} msg={msg} isSystem={type === 'system'}/>)}
            {messages && messages.map(msg => <Message key={msg.id} msg={msg} isSystem={type === 'system'}/>)}
            {messages && messages.map(msg => <Message key={msg.id} msg={msg} isSystem={type === 'system'}/>)}
            {messages && messages.map(msg => <Message key={msg.id} msg={msg} isSystem={type === 'system'}/>)}
            {messages && messages.map(msg => <Message key={msg.id} msg={msg} isSystem={type === 'system'}/>)}
            {messages && messages.map(msg => <Message key={msg.id} msg={msg} isSystem={type === 'system'}/>)}
            {messages && messages.map(msg => <Message key={msg.id} msg={msg} isSystem={type === 'system'}/>)}
            {messages && messages.map(msg => <Message key={msg.id} msg={msg} isSystem={type === 'system'}/>)}
            {messages && messages.map(msg => <Message key={msg.id} msg={msg} isSystem={type === 'system'}/>)}
            {messages && messages.map(msg => <Message key={msg.id} msg={msg} isSystem={type === 'system'}/>)}
            {messages && messages.map(msg => <Message key={msg.id} msg={msg} isSystem={type === 'system'}/>)}
            {messages && messages.map(msg => <Message key={msg.id} msg={msg} isSystem={type === 'system'}/>)}
            {messages && messages.map(msg => <Message key={msg.id} msg={msg} isSystem={type === 'system'}/>)}
            {messages && messages.map(msg => <Message key={msg.id} msg={msg} isSystem={type === 'system'}/>)}        </ul>
        </div>
    )
}

export default MessagesSlider
