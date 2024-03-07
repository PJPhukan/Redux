import React from 'react'
import { useSelector } from 'react-redux';
const Navber = () => {
    // Use the useSelector hook to get the amount value from the Redux store
    const amount = useSelector((state) => state.amount.value);
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">iBank</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About</a>
                            </li>


                        </ul>
                        <div>
                            <button disabled className="btn btn-primary">Your Balance : {amount}</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navber
