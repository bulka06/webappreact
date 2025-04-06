import React from "react";
import './ProductList.css';
import ProductItem from "../ProductItem/ProductItem";
import {useTelegram} from "../hooks/useTelegram";

const products= [
{id: '1', title: 'Iphone 13',price: 2000, description: 'Iphone 13 pro max'},
{id: '2', title: 'Iphone 12',price: 3000, description: 'Iphone 12 pro max'},
{id: '3', title: 'Iphone 15',price: 4000, description: 'Iphone 15 pro max'},        
{id: '4', title: 'Iphone 12',price: 5000, description: 'Iphone 12 pro '},
]

const getTotalPrice = (items) => {
    return items.reduce((acc, item) => {
        return acc + item.price;
    }, 0);  
}

const ProductList = () => {
    const [addedItems, setAddedItems] = useState([]);

    const {tg} = useTelegram();
    const onAdd = (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems = [];
    
        if (alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id);
        } else {
            newItems = [...addedItems, product];
        }
        setAddedItems(newItems);

        if(newItems.length === 0) {
            tg.MainButton.hide();
        } else{
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Купити ${getTotalPrice(newItems)} грн`,
            });
        }
    }


    return(
        <div className={'list'}>
          {ProductList.map(item =>(
            <ProductItem
                product={item}
                onAdd= {onAdd}
                className={'item'}
              />  
          ))}

        </div>
    );
};
export default ProductList;
