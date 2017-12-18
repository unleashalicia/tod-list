import React, {Component} from 'react';
import'../assets/css/modal.css';

class Modal extends Component{
    render(){
        return (
            <div className="confirm-modal">
                <div className="modal-content">
                   <div className="card">
                       <div className="card-content">
                           <p>This is some text about stuff.</p>
                       </div>
                       <div className="card-action">
                           <button className="btn red">Delete</button>
                           <button className="btn yellow">Cancel</button>
                       </div>
                   </div>
                </div>
            </div>
        );
    }
}

export default Modal;
