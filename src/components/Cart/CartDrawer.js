import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import './CartDrawer.css';


const CartDrawer = props => {
    const content = ( 
        <CSSTransition
        in={props.show}
        timeout={200}
        classNames="slide-in-left"
        mountOnEnter
        unmountOnExit
        >
            <aside className="cart-side-drawer">{props.children}</aside>
        </CSSTransition>
        )
    return ReactDOM.createPortal(content, document.getElementById('cart-modal-hook'));
};
export default CartDrawer;