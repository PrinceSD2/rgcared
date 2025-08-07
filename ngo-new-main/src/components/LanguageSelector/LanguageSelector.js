import React, { useState, useEffect, useRef } from 'react';
import l1 from '../../images/language/1.svg';
import l2 from '../../images/language/2.svg';

const LanguageSelector = () => {
    const [selectedLanguage, setSelectedLanguage] = useState({
        value: 'en',
        icon: l1,
        text: 'English'
    });
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const customSelectWrapperRef = useRef(null);

    const languages = [
        { value: 'en', icon: l1, text: 'English' },
        { value: 'sp', icon: l2, text: 'Spanish' }
    ];

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
        setIsDropdownOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (customSelectWrapperRef.current && !customSelectWrapperRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="language-selector">
            <select id="languageSelect" style={{ display: 'none' }} value={selectedLanguage.value} readOnly>
                {languages.map((language) => (
                    <option key={language.value} value={language.value} data-icon={language.icon}>
                        {language.text}
                    </option>
                ))}
            </select>

            <div className="custom-select-wrapper" ref={customSelectWrapperRef} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <div className="custom-select">
                    <img src={selectedLanguage.icon} alt={selectedLanguage.text} /> {selectedLanguage.text}
                </div>
                <div className="custom-arrow"><i className="ti-angle-down"></i></div>
                {isDropdownOpen && (
                    <div className="custom-options">
                        {languages.map((language) => (
                            <div
                                key={language.value}
                                className="custom-option"
                                onClick={() => handleLanguageChange(language)}
                            >
                                <img src={language.icon} alt={language.text} /> {language.text}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default LanguageSelector;
