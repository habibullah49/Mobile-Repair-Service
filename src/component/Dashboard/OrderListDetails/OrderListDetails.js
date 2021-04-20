import React from 'react';
import Delete from '../../../images/delete.png'
import Edit from '../../../images/edit 1.png'

const OrderListDetails = ({ list }) => {
    console.log(list);
    const [render, setRender] = React.useState(1);
    function deleteProduct(id, event) {
      
        console.log("delete", id)
        fetch(`https://intense-ridge-44549.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log("deleted successfully")
                if (result) {
                    setRender(render + 1)
                }

            })
    }
    const handle = (e) => {
        console.log(e.target.value);
    }
    return (



        <tbody >
            <tr id="delete">
                <th scope="row"></th>
                <td>{list.displayName}</td>
                <td>{list.email}</td>
                <td>{list.title}</td>
                <td>{list.payWith}</td>
                <td>{list.status}</td>
                <td>
                    <img src={Edit} width="25px" data-toggle="modal" data-target="#staticBackdrop" />
                </td>
                <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Status</label>
                                    <select class="form-control" id="exampleFormControlSelect1" onClick={handle}>
                                        <option>{list.status}</option>
                                        <option>Pending</option>
                                        <option>Done</option>
                                    </select>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" data-dismiss="modal">Understood</button>
                            </div>
                        </div>
                    </div>
                </div>
            </tr>
        </tbody>
    );
};

export default OrderListDetails;