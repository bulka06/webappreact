const tg = window.Telegram?.WebApp;

const useTelegram = () => {
    const onClose = () => {
        if (tg) {
            tg.close();
        }
    };

    const onToggleButton = () => {
        if (tg?.MainButton) {
            tg.MainButton.isVisible ? tg.MainButton.hide() : tg.MainButton.show();
        }
    };

    const sendData = (data) => {
        if (tg) {
            tg.sendData(JSON.stringify(data));
        }
    };

    const onMainButtonClick = (callback) => {
        if (tg) {
            tg.onEvent('mainButtonClicked', callback);
        }
    };

    const offMainButtonClick = (callback) => {
        if (tg) {
            tg.offEvent('mainButtonClicked', callback);
        }
    };

    return {
        tg,
        user: tg?.initDataUnsafe?.user,
        onClose,
        onToggleButton,
        sendData,
        onMainButtonClick,
        offMainButtonClick,
    };
};

export default useTelegram;
