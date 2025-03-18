import react from "react";
import './menuCompany.css'



function MenuCompany() {
    return (
       <div className="main">
        <div className="block">
            <div className="box">

            <div className="leftSide">
                <div className="aboutTheCompany">
                     <span className="linkText">О компании</span>
                     <span className="linkText">Контакты</span>
                     <span className="linkText">Статьи и новости</span>
                     <span className="linkText">Акции и скидки</span>
                     <span className="linkText">Доставка</span>
                     <span className="linkText">Оптовым клиентам</span>

                </div>

                
            </div>
            <div className="rightSide">
                <div className="payment">
                    <span className="paymentInformation">Оплата</span>
                    <span className="paymentInformation">Кредит</span>
                    <span className="paymentInformation">Гарантия</span>
                    <span className="paymentInformation">Возврат товара</span>
                    <span className="paymentInformation">Подарочные сертификаты</span>
     
                </div>
            </div>
             </div>
            </div>
        </div>

    
    )
}

export default MenuCompany 