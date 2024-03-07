import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deposite, withdraw } from "../state/reducer/amountReducer"
const Shop = () => {
    const amount = useSelector((state) => state.amount.value)
    const dispatch = useDispatch()

    const handleDeposit = () => {
        // Dispatch the 'deposite' action with a payload
        dispatch(deposite(500)); // You can change the payload value
    };

    const handleWithdraw = () => {
        // Dispatch the 'withdraw' action with a payload
        dispatch(withdraw(200)); // You can change the payload value
    };
    return (
        <div className='container my-3'>
            <h1>Withdraw/Deposite</h1>
            <button className="btn btn-primary mx-3" onClick={handleWithdraw}>-</button>
            Add to cart this item {amount}
            <button className="btn btn-primary mx-3 " onClick={handleDeposit}>+</button>
        </div>
    )
}

export default Shop
