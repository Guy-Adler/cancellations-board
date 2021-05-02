import React from 'react'

const Message = ({ msg, isSystem }) => {
    return (
        <>
        {isSystem ? <li>{msg.message}</li>
        :
        msg.from !== msg.until
        ?
        <li>שעות {msg.from} עד {msg.until}: {msg.message}</li>
        :
        <li>שעה {msg.from}: {msg.message}</li>
        }
        </>
    )
}

export default Message
