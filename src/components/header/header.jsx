import React from "react";
import { useTelegram } from "../../hooks/useTelegram";
import './header.css';

const Header = () => {
    const { user, onClose } = useTelegram();

    return (
        <div className={'header'}>
            <button className={'btn-header'} onClick={onClose}>Закрыть</button>
            <span className={'username'}>
                {user?.username}
            </span>
        </div>
    );
};

export default Header;