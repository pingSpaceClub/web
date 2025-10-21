import {useEffect} from 'react';
import './styles.scss';

const FAQ = () => {
    useEffect(() => {
        document.title = 'FAQ - App';
    }, []);

    return (
        <div className="faq-page">
            <div className='container'>
                <section className='faq-page__header'>
                    <h1>Поширені запитання</h1>
                </section>

                <section>
                    <div className='page-content faq-page__content'>
                        <details className="faq-item">
                            <summary className="faq-question">
                                <span>1. Як забронювати стіл?</span>
                                <span className="chevron"></span>
                            </summary>
                            <div className="faq-answer">
                                <p>
                                    Щоб забронювати стіл, перейдіть на сторінку бронювання та заповніть
                                    необхідні поля.
                                </p>
                            </div>
                        </details>
                        <details className="faq-item">
                            <summary className="faq-question">
                                <span>2. Як потрапити до зали?</span>
                                <span className="chevron"></span>
                            </summary>
                            <div className="faq-answer">
                                <p>
                                    Щоб потрапити до зали, будь ласка, натисніть на кнопку "Вхід" на головній
                                    сторінці.
                                </p>
                            </div>
                        </details>
                        <details className="faq-item">
                            <summary className="faq-question">
                                <span>3. Чи можна скасувати бронювання?</span>
                                <span className="chevron"></span>
                            </summary>
                            <div className="faq-answer">
                                <p>
                                    Щоб скасувати бронювання, будь ласка, зв'яжіться з нашою службою підтримки,
                                    натиснувши на посилання "Підтримка" в нижньому колонтитулі та заповнивши
                                    контактну форму.
                                </p>
                            </div>
                        </details>
                        <details className="faq-item">
                            <summary className="faq-question">
                                <span>4. Що робити, якщо не можу потрапити до приміщення?</span>
                                <span className="chevron"></span>
                            </summary>
                            <div className="faq-answer">
                                <p>
                                    Якщо ви не можете потрапити до приміщення, будь ласка, зв'яжіться з нашою
                                    службою підтримки для отримання допомоги.
                                </p>
                            </div>
                        </details>
                        <details className="faq-item">
                            <summary className="faq-question">
                                <span>5. Як змінити електронну адресу або ім'я?</span>
                                <span className="chevron"></span>
                            </summary>
                            <div className="faq-answer">
                                <p>
                                    Щоб змінити електронну адресу або ім'я, будь ласка, зв'яжіться з нашою
                                    службою підтримки для отримання допомоги.
                                </p>
                            </div>
                        </details>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default FAQ;
