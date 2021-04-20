import React, { useContext, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import { UserContext } from '../../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';

const ServiceDetails = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    let history = useHistory();
    const [service, setService] = useState([])
    const [info, setInfo] = React.useState({});
    const { id } = useParams()
   
    React.useEffect(() => {
        fetch(`https://intense-ridge-44549.herokuapp.com/service/${id}`)
            .then((res) => res.json())
            .then((data) => {
               
                setService(data)
            });
    }, [id]);

    const handleBlur = e => {
        const newInfo = { ...info };
        console.log(e.target.name, e.target.value);
        newInfo[e.target.name] = e.target.value;
       
    }
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const newInformation = { ...service, ...loggedInUser }
        

    };

    const handlePaymentSuccess = (paymentId) => {
        const newInformation = {
            ...loggedInUser,
            title: service.title,
            price: service.price,
            description: service.description,
            paymentId,
            payWith: "Credit Card",
            status: "Pending",
            orderTime: new Date()
        }
        console.log("newInfo ", newInformation);
        fetch('https://intense-ridge-44549.herokuapp.com/addBooking', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newInformation)
        })
            .then(res => res.json())
            .then((data) => {
                if (data) {
                    console.log("database data ", data);
                    alert('your order placed successfully')
                    history.push('/home')
                }

            })
    }
    return (
        <section className="container-fluid row">
            <Sidebar />
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input class="form-control" onBlur={handleBlur} type="text" className="form-control" value={loggedInUser.displayName} name="displayName" />
                    </div>
                    <div className="form-group">
                        <input class="form-control" onBlur={handleBlur} type="text" className="form-control" value={loggedInUser.email} name="email" />
                    </div>
                    <div className="form-group">
                        <input class="form-control" placeholder="text" onBlur={handleBlur} type="text" className="form-control" value={service.title} name="title" />
                    </div>
                    <h5>Your Service Charge Will Be {service.price}</h5>

                    
                </form>

                <div className="m-3">
                    <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
                </div>
            </div>
        </section>
    );
};

export default ServiceDetails;