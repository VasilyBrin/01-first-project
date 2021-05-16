import React from 'react';
import { NavLink } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <BrowserRouter>
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="/dialogs/1">Basil</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Natan</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Sergey</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Ilya</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5">Kostya</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/6">Nastya</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/7">Nika</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/8">Eva</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.dialog}>Hi</div>
                <div className={s.dialog}>How is your command?</div>
                <div className={s.dialog}>Yo</div>
            </div>
        </div>
        </BrowserRouter>
    )
}

export default Dialogs;