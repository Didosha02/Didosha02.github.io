import React from "react";
let aboutus = () =>{
  alert('/About.jsx');
}
function Footer1 () {
return  ( 

    <div className='footer1'>
     
    <div className='conteiner1'>
       <p1 className='fff'><h2>Компания</h2></p1>
      <button onClick={aboutus} className='fff'><a href="/About">O Chocolife.me</a></button>
      <p3 className='fff'>Пресса о нас</p3>
      <p4 className='fff'>Контакты</p4>
    </div>
     
    <div className='conteiner2'>
       <p1 className='fff'><h2>Клиентам</h2></p1>
      <p2 className='fff'>Обратная связь</p2>
      <p3 className='fff'>Вопросы и ответы</p3>
      <p4 className='fff'>Публичная оферта</p4>
    </div>
      
    <div className='conteiner3'>
       <p1 className='fff'><h2>Парнерам</h2></p1>
      <p2 className='fff'>Для Вашего бизнеса</p2>
    </div>

    <div className='conteiner4'>
       <p1 className='fff'><h2>Контакты</h2></p1>
      <p2 className='fff'>+7(771)930-02-02</p2>
      <p3 className='fff'>+7(727)339-91-00</p3>
    </div>

    <div className='conteiner5'>
       <p1 className='fff'><h2>Наше приложение</h2></p1>
      <p2 className='fff'>Chocolife.me теперь еще удобнее и всегда под рукой!</p2>
     
    </div>
      
      </div>

)
}

export default Footer1;