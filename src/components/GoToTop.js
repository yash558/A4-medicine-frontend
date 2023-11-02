import React, { useEffect, useState } from 'react'

const GoToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const gotoBtn = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };
    const listenToScroll = () => {
        let heightToHidden = 250;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        if (winScroll > heightToHidden) {
            setIsVisible(true);
        }
        else {
            setIsVisible(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll);
        return () => window.removeEventListener('scroll', listenToScroll);

    }, []);
    return (
        <div className="flex justify-center items-center">
            {isVisible && (
                <div className=' text-xl border-2 border-white justify-center items-center text-center cursor-pointer w-12 h-12 text-white bg-[--main-color]  rounded-lg fixed bottom-20 right-16 z-50 flex shadow-sm an' onClick={gotoBtn}>
                    <i className="fas fa-arrow-up animate-bounce"></i>
                </div>
            )}
        </div>
    )
}

export default GoToTop