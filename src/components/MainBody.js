import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import "./MainBody.css"
import EmptyCartImage from "../image/empty_cart.png"
import { BsSearch } from 'react-icons/bs';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

import { plus, minus } from '../actions/index';
import { useSelector, useDispatch } from 'react-redux';



export function MainBody() {
    const countDish = useSelector(state => state.countDish);
    // const extra = useSelector(state => state.extra);
    const totalPrice = useSelector(state => state.totalPrice);
    const titleList = useSelector(state => state.titleList);

    const dispatch = useDispatch();

    const plusClick = (tiId, id) => {
        dispatch(plus(tiId, id));
    }
    const minusClick = (tiId, id) => {
        dispatch(minus(tiId, id));
    }

    var Scroll = require('react-scroll');
    var Element = Scroll.Element;
    var scroller = Scroll.scroller;


    useEffect(() => {
        console.log("countDish : " + countDish);
        if (countDish === 0) {
            document.getElementById('cartList').style.setProperty('display', 'none');
            document.getElementById('cartImage').style.setProperty('display', 'block');
        }
        else {
            document.getElementById('cartList').style.setProperty('display', 'block');
            document.getElementById('cartImage').style.setProperty('display', 'none');
        }
    });

    function display_left(tiEl) {
        return (
            <div className='leftList_item_div' key={"key003" + tiEl.tiId}>
                <div className='leftList_item' onClick={
                    function () {
                        // document.getElementById("id" + tiEl.tiId).scrollIntoView()
                        scroller.scrollTo(("name" + tiEl.tiId), {
                            duration: 500,
                            // delay: 100,
                            // smooth: true,
                            offset: -80, // Scrolls to element + 50 pixels down the page
                        });
                    }
                }>{tiEl.titleName}</div>
                {/* <div className='leftList_item'>{tiEl.titleName}</div> */}
            </div>
        )
    }

    function display_center(tiEl) {
        return (
            <div className='centerList' key={"key001" + tiEl.tiId}>
                <Element name={"name" + tiEl.tiId}>
                    <div className='centerList_title' id={"id" + tiEl.tiId}>{tiEl.titleName}</div>
                    <div className='centerList_titleSpace' />
                    {
                        tiEl.list.map((el) => {
                            return (
                                <div className='centerList_item' key={"key002" + el.dishId}>
                                    <div className='centerList_item_text_div'>
                                        <div className='centerList_item_text_1'>{el.dishName}</div>
                                        <div className='centerList_item_text_2'>{el.dishDetail}</div>
                                        <div className='centerList_item_text_3'>€{el.dishPrice}</div>
                                    </div>
                                    <div className='centerList_item_button' onClick={
                                        function () {
                                            plusClick(tiEl.tiId, el.dishId);
                                        }
                                    } >ADD</div>
                                </div>
                            )
                        })
                    }
                </Element>
            </div>
        )
    }
    function display_right(tiEl){
        return (
            tiEl?.list?.map((el) => {
                return (
                    <div className={el.dishCount? 'mainYourCart_item' : 'hidden'} key={"key004" + tiEl.tiId + "/" + el.dishId}>
                        <div className='mainYourCart_item_dish'>{el.dishName}</div>
                        <div className='mainYourCart_item_count'>
                            <AiOutlineMinus className='mainYourCart_item_count_symbolM' onClick={
                                function () {
                                    minusClick(tiEl.tiId, el.dishId);
                                }
                            } />
                            <div className='mainYourCart_item_countNumber'>{el.dishCount}</div>
                            <AiOutlinePlus className='mainYourCart_item_count_symbolP' onClick={
                                function () {
                                    plusClick(tiEl.tiId, el.dishId);
                                }
                            } />
                        </div>
                        <div className='mainYourCart_item_price'>€{Number(el.dishCount * el.dishPrice).toFixed(2)}</div>
                    </div>
                )
            })
        )
    }
    return (
        <div className='mainBody'>
            <Row>
                <Col sm={3} lg={3} >
                    <div className='mainBody_left'>
                        <div className='leftList_search_top_space' />
                        <div className='leftList_search'>
                            <BsSearch className='leftList_search_icon' />
                            <input className='leftList_search_box' placeholder='Search here' />
                        </div>
                        <div className='leftList_list'>
                            {titleList.map((tiEl) => {
                                return (display_left(tiEl))
                            })}
                        </div>
                    </div>
                </Col>
                <Col sm={5} lg={5}>
                    <div className='mainBody_center'>
                        <div className='centerList_topSpace' />
                        {titleList.map((tiEl) => {
                            return(display_center(tiEl));
                        })}
                    </div>
                </Col>
                <Col sm={4} lg={4}>
                    <div className='mainBody_right'>
                        <div className='mainYourCart'>
                            <div className='mainYourCart_title'>Your Cart</div>
                            <img id='cartImage' src={EmptyCartImage} width='350px' alt='PIC' />
                            <div className='mainYourCart_detail' id='cartList' >
                                {titleList.map((tiEl) => {
                                    return(display_right(tiEl))
                                })}
                                <div className='mainYourCart_total'>
                                    <div className='mainYourCart_total_text'>Total</div>
                                    <div className='mainYourCart_total_price'>€{Number(totalPrice).toFixed(2)}</div>
                                </div>
                                <div className='mainYourCart_button'>Checkout</div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default MainBody
