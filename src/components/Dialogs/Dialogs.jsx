import React from 'react';
import { NavLink } from 'react-router-dom';
// import DialogItem from './components/Dialogs/Dialogs';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div> 
}

const Message = (props) => {
   return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
             <DialogItem name="Basil" id="1"/>
             <DialogItem name="Natan" id="2"/>
             <DialogItem name="Ilya" id="3"/>
             <DialogItem name="Sergey" id="4"/>
             <DialogItem name="Kostya" id="5"/>
             <DialogItem name="Nastya" id="6"/>
             <DialogItem name="Nika" id="7"/>
             <DialogItem name="Eva" id="8"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi" />
                <Message message="How is your command?" />
                <Message message="Yo" />
                <Message message="Yo" />
                <Message message="Yo" />
            </div>
        </div>
    )
}

export default Dialogs;