import React, { useState } from 'react';
import './TabsComponent.css';

import CustomNav from '../../atoms/Nav/CustomNav';

export default function TabsComponent() {
    const [activeTab, setActiveTab] = useState('Comunidad');

    const renderContent = () => {
        return (
            <div className="contentT3D">
                {Array.from({ length: 3 }).map((_, rowIndex) => (
                    <div className="rowT3D" key={rowIndex}>
                        {Array.from({ length: 6 }).map((_, colIndex) => (
                            <div className="boxT3D" key={colIndex}></div>
                        ))}
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="tabs-containerT3D">
            <div className="tabsT3D">
                <div className={`tabT3D ${activeTab === 'Comunidad' ? 'active' : ''}`} onClick={() => setActiveTab('Comunidad')}>Comunidad</div>
                <div className={`tabT3D ${activeTab === 'Favoritos' ? 'active' : ''}`} onClick={() => setActiveTab('Favoritos')}>Favoritos</div>
                <div className={`tabT3D ${activeTab === 'Guardados' ? 'active' : ''}`} onClick={() => setActiveTab('Guardados')}>Guardados</div>
            </div>

            <CustomNav />
            {renderContent()}
        </div>
    );
}
