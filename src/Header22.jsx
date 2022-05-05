import React from "react";
import Header22_item from "./Header22-item";
import { Link } from "react-router-dom";
function Header22 () {
return (
<div className='header-2'>
<button className='categories-item1'><Link to="/Main">Все</Link></button>
<button className='categories-item1'><Link to="/New">Новые</Link></button>
<Header22_item name="Развлечения"/>
<Header22_item name="Еда"/>
<Header22_item name="Здоровье"/>
<Header22_item name="Красота"/>
<Header22_item name="Спорт"/>
<Header22_item name="Туризм,отели"/>
<Header22_item name="Услуги"/>
<Header22_item name="Товары"/>
</div>)
}

export default Header22;