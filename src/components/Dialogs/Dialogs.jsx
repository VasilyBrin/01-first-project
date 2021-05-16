import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Basil
                </div>
                <div className={s.dialog}>
                    Natan
                </div>
                <div className={s.dialog}>
                    Sergey
                </div>
                <div className={s.dialog}>
                    Ilya
                </div>
                <div className={s.dialog}>
                    Kostya
                </div>
                <div className={s.dialog}>
                    Nastya
                </div>
                <div className={s.dialog}>
                    Nika
                </div>
                <div className={s.dialog}>
                    Eva
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.dialog}>Hi</div>
                <div className={s.dialog}>How is your command?</div>
                <div className={s.dialog}>Yo</div>
            </div>
        </div>
    )
}

export default Dialogs;