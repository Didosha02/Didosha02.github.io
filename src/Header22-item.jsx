function Header22_item (props) {

let Header22_item = [

    {id: 1, name:'Все'},
    {id: 2, name:'Новые'},
    {id: 3, name:'Развлечения'},
    {id: 4, name:'Еда'},
    {id: 5, name:'Здоровье'},
    {id: 6, name:'Красота'},
    {id: 7, name:'Спорт'},
    {id: 8, name:'Туризм,отели'},
    {id: 9, name:'Услуги'},
    {id: 10, name:'Товары'}
    
]

let Header22_itemElements = Header22_item.map 

( h=> <categories-item name={h.name} id={h.id} />);

return (
    <>
<button className='categories-item'>{props.name}

{ Header22_itemElements }

</button>
</>
);
}
export default Header22_item;