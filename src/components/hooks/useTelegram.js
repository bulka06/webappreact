const tg = window.Telegram?.WebApp; 

const useTelegram = () => {
    const onClose = () =>  {
        if (tg) {
            tg.close();
        }
    };

    const onToggleButton = () =>  {
        if (tg?.MainButton) {
            tg.MainButton.isVisible ? tg.MainButton.hide() : tg.MainButton.show();
        }
    };

    return {
        onClose,
        onToggleButton,
        tg,
        user: tg?.initDataUnsafe?.user,
    };
};

export default useTelegram; // Додаємо експорт за замовчуванням
