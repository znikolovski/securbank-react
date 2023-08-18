import creditcardgreen from '../resources/creditcardgreen.png';
import creditcardgold from '../resources/creditcardgold.png';
import './creditcarddetails.css';

export default function CreditCardDetails() {


    return (
        <div>
            <div className='creditcarddetails'>
                <p className='accountNoLabel'>My Card</p>
                <p className='accountNo'>SecurBank Rewards</p>
            </div>
            <div className='flexrow'>
                <div className='creditcard'>
                    <img src={creditcardgreen} className="creditcardimage" alt="Credit Card" />
                </div>
                <div className='creditcardactions'>
                    <ul>
                        <li><a href="#">Block card</a></li>
                        <li><a href="#">Pay off the card</a></li>
                        <li><a href="#">Card settings</a></li>
                    </ul>
                 </div>
                <div className='creditcardoffer'>
                    <img src={creditcardgold} className="creditcardimage" alt="Credit Card" />
                    <p><a href="#">Apply for a new card</a></p>
                </div>
            </div>
        </div>
    )
}