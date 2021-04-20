import React, { useState } from 'react';
import { set } from 'react-hook-form';
import OrderListDetails from '../OrderListDetails/OrderListDetails';
import Sidebar from '../Sidebar/Sidebar';

const OrderList = () => {
    const [orderList, setOrderList] = useState([])
    React.useEffect(() => {
        fetch("https://intense-ridge-44549.herokuapp.com/getBooking")
            .then(res => res.json())
            .then(data => setOrderList(data))
    }, [])
   
    return (
        <section className="container-fluid row">
            <Sidebar />
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <table class="table table-hover  table-borderless table-striped ">
                    <thead>
                        <tr>
                        <th scope="col">   </th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Service</th>
                            <th scope="col">Pay With</th>
                            <th scope="col">Status</th>
                            

                        </tr>
                    </thead>
                    {
                        orderList.map(list => <OrderListDetails list={list} />)
                    }
                </table>

            </div>
        </section>
    );
};

export default OrderList;