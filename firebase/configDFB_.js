    // Конфиг бд
    var firebaseConfig = {
        // значения свой ДБ брать с сайта в настройках проекта
    };
    // Инициализация
    firebase.initializeApp(firebaseConfig);
    // Создание ссылок для обращения и инициализация
    const auth = firebase.auth();
    const db = firebase.firestore();
    const rt = firebase.database();
    const fs = firebase.storage();
    //Что-то чтобы файрбейз не страдал херней в консоли
    db.settings({timestampsInSnapshots:true});
