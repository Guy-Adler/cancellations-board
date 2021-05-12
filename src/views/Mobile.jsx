import React, { useState } from 'react';
import MessagesSlider from '../Components/MessagesSlider';

const Mobile = () => {
    const [type, setType] = useState('cancellations')

    return (
        <div className="App-Mobile">
            <div className="title">
                <em><h4 className="title-text">{type === 'cancellations' ? 'כלליות' : 'מערכת'}</h4></em>
            </div>
            <div className="content">
                <MessagesSlider type={'cancellations'} hide={type === 'system'} refresh={type}/>
                <MessagesSlider type={'system'} hide={type === 'cancellations'} refresh={type}/>
            </div>
            <div className="footer">
                <div className="footer-button footer-changes" onClick={() => {setType('cancellations')}}>
                    <em><h4 className="title-text">כלליות</h4></em>
                </div>
                <div className={"footer-button footer-system"} onClick={() => {setType('system')}}>
                    <em><h4 className="title-text">מערכת</h4></em>
                </div>
            </div>
        </div>
    )
}

export default Mobile;
