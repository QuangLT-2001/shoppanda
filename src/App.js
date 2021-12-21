import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';
import Header from './container/Header';
import Login from './container/Components/login';
import Register from './container/Components/register';
import Home from './container/Home';
import FooterWare from './container/Product/Component/FootWare';
import Footer from './container/Components/Footer';
import Introduce from './container/Components/Introduce';
import Clothes from './container/Product/Component/Clothes';
import Accessory from './container/Product/Component/Accessory';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faPalette } from '@fortawesome/free-solid-svg-icons'
import { ChangeColor } from './style';
import ChangeColorItem from './Component/ChangeColor';
import ProductAll from './container/Product/Component/All';
import Error from './container/Components/Error';
import Detail from './container/Detail';
import Post from './container/ListPost';
import PostDetail from './container/PostDetail';
import Cart from './container/Cart';
import Service from './container/Components/Sevice';
import Contact from './container/Components/Contact';

const App = props => {
  const [scrollToTop, setScrollToTop] = useState(false);
  const [currentColor, setCurrentColor] = useState(0);
  const [status, setStatus] = useState(false);
  const listColor = [
    {
      id: 0,
      name: "#fff",
      color: "#000"
    },
    {
      id: 1,
      name: "#000000",
      color: "#fff"
    },
    {
      id: 2,
      name: "linear-gradient(-180deg,#00ffe7,#18adb5)",
      color: "#000"
    },
    {
      id: 3,
      name: "#FF0000",
      color: "#fff"
    },
    {
      id: 4,
      name: "#00FF00",
      color: "#000"
    },
    {
      id: 5,
      name: "#0000FF",
      color: "#fff"
    },
    {
      id: 6,
      name: "#FFFF00",
      color: "#fff"
    },
    {
      id: 7,
      name: "#00FFFF",
      color: "#fff"
    },
    {
      id: 8,
      name: "#FF00FF",
      color: "#fff"
    },
    {
      id: 9,
      name: "#C0C0C0",
      color: "#fff"
    },
    {
      id: 10,
      name: "#808080",
      color: "#fff"
    },
    {
      id: 11,
      name: "#800000",
      color: "#fff"
    },
    {
      id: 12,
      name: "#808000",
      color: "#fff"
    },
    {
      id: 13,
      name: "#008000",
      color: "#fff"
    },
    {
      id: 14,
      name: "#800080",
      color: "#fff"
    },
    {
      id: 15,
      name: "#008080",
      color: "#fff"
    },
    {
      id: 16,
      name: "#000080",
      color: "#fff"
    },
  ]
  const activeColor = listColor[currentColor];
  const hideScollToTop = () => {
    setScrollToTop(window.scrollY > 100);
  }
  // useEffect(() => {
  //   window.addEventListener("scroll", hideScollToTop);
  //   return () => {
  //     window.removeEventListener("scroll", hideScollToTop);
  //   }
  //   // clean component
  //   // mount and unmount
  // }, []);
  // scroll
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])
  const scrollTop = () => window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
  const body = document.querySelector("body");
  const handleClickChangeSetting = () => {
    setStatus(state => !state);
    body.classList.toggle("hidden");
  }
  const handleChangeColor = ind => {
    setCurrentColor(ind);
  }
  return (
    <div className="app">

      <Router basename='/'>
        <Header />
        <ChangeColor>
          <span className={`${status && 'change-setting'} icon-setting`} onClick={handleClickChangeSetting}>
            <FontAwesomeIcon icon={faPalette} />
          </span>
          <div
            onClick={handleClickChangeSetting}
            className={`${status && 'change-blur-layout'} blur-layout`}></div>
          <ul className={`${status && 'show-list-color'} list-color`}>
            <li>
              <span className="title-change-color">Thay đổi màu menu</span>
            </li>
            {listColor.map((item, index) => <ChangeColorItem
              key={item.id}
              colorItem={item}
              className={`${item.id === activeColor.id ? 'active-color' : ""} color-item`}
              onClick={() => handleChangeColor(index)}
            />)}
          </ul>

        </ChangeColor>
        <Switch>
          <Route exact  path="/" component={Home} />
          <Route exact path="/dang-nhap" component={Login} />
          <Route exact path="/dang-ky" component={Register} />
          <Route exact path="/gioi-thieu" component={Introduce} />
          <Route exact path="/san-pham/giay-dep" component={FooterWare} />
          <Route exact path="/san-pham/quan-ao" component={Clothes} />
          <Route exact path="/san-pham/phu-kien-khac" component={Accessory} />
          <Route exact path="/san-pham" component={ProductAll} />
          <Route exact path="/san-pham/:id" component={Detail} />
          <Route exact path="/tin-tuc" component={Post} />
          <Route exact path="/tin-tuc/:id" component={PostDetail} />
          <Route exact path="/gio-hang" component={Cart}/>
          <Route exact path="/dich-vu" component={Service}/>
          <Route exact path="/lien-he" component={Contact}/>
          <Route exact component={Error} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
