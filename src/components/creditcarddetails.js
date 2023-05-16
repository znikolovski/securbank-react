import creditcard from '../resources/creditcardgreen.png';
import './creditcarddetails.css';

export default function CreditCardDetails() {


    return (
        <div className='accountbalance'>
            <div className='balance'>
                <p>Account Balance</p>
                <h3>$1,920.00</h3>
            </div>
            <div className='options'>
                <p>Make A Transfer</p>
            </div>
        </div>
    )
}