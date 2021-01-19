import React from 'react';

import { Header, LogoBox,TextBox, HeadingPrimary } from './styles';

const HeaderComponent: React.FC = () => {
    return (
        <Header>
            <TextBox>
                <HeadingPrimary>
                    <span className="heading-primary-main">LuCollection</span>
                    <span className="heading-primary-sub">Moda Feminina </span>
                </HeadingPrimary>
            </TextBox>
        </Header>
    );
}

export default HeaderComponent;