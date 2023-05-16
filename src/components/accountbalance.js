import maskedbackground from '../resources/maskedbackground.svg';
import './accountbalance.css';

export default function Accountbalance() {


    return (
        <div className='accountbalance' style={{ backgroundImage: `url(${maskedbackground})` }}>
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