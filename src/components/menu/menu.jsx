
//libs
import React, { useEffect, useRef, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
//Componenets
import Login from '../../components/login/login';
//actions
import {loadCategories} from '../../actions/category-action';
//images
import search from '../../styles/images/search.svg';

const Menu = () => {

    const[parentCategories, setParentCategories] = useState([{"name":"Home", "url":"", "id":0}])
    const [searchText, setSearchText] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector((state) => state.authState.user);
    const categories = useSelector((state) => state.categoryState.categories);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [selectedRoute, setSelectedRoute] = useState('');

    useEffect(() => {
        fetchCategores();
        setSearchText('');
      }, []);

    useEffect(() => {
        let tCategories = [];
        tCategories.push({"name":"Home", "url":"", "id":0})
        if (categories && categories.length > 0) {
            categories.map(category => 
                tCategories.push({"name":category.name, "url":"", "id":category.id}));
            setParentCategories(tCategories);
        }
    }, [categories]);

    const fetchCategores = () => {
        dispatch(loadCategories());
    }

    const searchProducts = () => {
        if (searchText && searchText.trim().length >0)
            navigate(`/search/${searchText}`);
    }

    const onChangeHandler = event => {
        setSearchText(event.target.value);
     };

    const renderMenuItem = (item) => {
        if (item.name == 'Home') {
            return (
                <Link to={`/home`}>
                    {item.name}
                </Link>
            )
        } else {
            return (
                <Link to={`/products/${item.id}`}>
                    {item.name}
                </Link>
            )
        }
    }

    const routePage = (url) => {
        if(user) {
            navigate(url);
        } else {
            setSelectedRoute(url);
            setShowLoginModal(true);
        }
    }

    const renderMenu = () => {
        return (
            <nav>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <ul>
                            {
                                parentCategories.map( (category, idx) => {
                                    return (
                                        <li key={`menu-${idx}`}>
                                            {
                                            renderMenuItem(category)
                                            }
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="searchdiv">
                            <input 
                                type="search" 
                                placeholder="Search here.." 
                                name="search"
                                value={searchText}
                                onChange={onChangeHandler}
                                onKeyPress={event => {
                                    if (event.key === 'Enter') {
                                        searchProducts()
                                    }
                                }}/>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-12">
                        <div className="otherlinks">
                            <span><Link to={`/cart`}><i className="ai-shopping-bag"></i> Cart</Link></span>
                            <span onClick={()=> routePage("/wishlist")}><a href="#"><i className="ai-heart"></i> Wishlist</a></span>
                        </div>
                    </div>
                </div>
            </nav>
        )
    } 

    const handleOnLoginSuccess = () => {
        setShowLoginModal(false);
        navigate(selectedRoute);
    }

    const handleOnLoginFailure = () => {
        setShowLoginModal(false);
    }

    const handleOnClose = () => {
        setShowLoginModal(false);
    }

    return (
        <>
        {
            renderMenu()
        }
            <Login 
                showModal={showLoginModal}
                onClose={handleOnClose}
                onLoginSuccess={handleOnLoginSuccess} 
                onLoginFailure={handleOnLoginFailure}
            />
        </>
    )
}

export default Menu;