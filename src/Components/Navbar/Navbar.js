import './Navbar.css'
import Logo from '../../assets/Logo.png'
import { Menu, Icon } from 'antd';
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import MenuImage from '../../assets/menu1.png'
import { useLocation } from 'react-router-dom';
function Navbar(){
    const location=useLocation()
    console.log("location",location.pathname)
    var [visible, setVisible] = useState(false);
    
    const showDrawer = () => {
        setVisible(true);
      };
      const onClose = () => {
        setVisible(false);
      };
    return(
        <div>
            <div>
                <div  className="navbar-container">
                    <div className='navbar-inner-container'>
                          <div className='navbar-Logo-container'>
                              <div ><img src={Logo} className="navbar-logo-img"></img></div>
                              <div className='navbar-title'><span className='navbat-b'>B</span>link</div>
                          </div>
                          <div className='navbar-right-container'>
                             <div  className='desktop-right-nav' style={{width:'100%'}}>
                             <Menu 
                defaultSelectedKeys={["1"]}
                             
                             className='navbar-right '>
  <Menu.Item className='navbar-right-text '><Link to="/" ><div className='navbar-right-text'>Home</div></Link></Menu.Item>
  <Menu.Item className='navbar-right-text '><Link to="/Game1"><div className='navbar-right-text'>Game 1</div></Link></Menu.Item>
  <Menu.Item className='navbar-right-text '><Link to="/Game2"><div className='navbar-right-text'>Game 2</div></Link></Menu.Item>
  <Menu.Item className='navbar-right-text '><Link to="/Game3"><div className='navbar-right-text'>Game 3</div></Link></Menu.Item>
</Menu>
                             </div>
                             <div className='mobile-right-nav' onClick={showDrawer} >
                                 <img src={MenuImage} width={50} height={50} ></img>
                                 
                             </div>
                          </div>
                    </div>
                </div>
            </div>
            <Drawer title="Select" placement="right" onClose={onClose} visible={visible}>
                                 <Menu>
  <Menu.Item ><Link to="/" ><div >Home</div></Link></Menu.Item>
  <Menu.Item ><Link to="/Game1"><div >Game 1</div></Link></Menu.Item>
  <Menu.Item ><Link to="/Game2"><div >Game 2  </div></Link></Menu.Item>
  <Menu.Item ><Link to="/Game3"><div >Game 3  </div></Link></Menu.Item>
</Menu>
      </Drawer>
        </div>
    )
}
export default Navbar;
// import React, { Component } from 'react';
// import LeftMenu from './LeftMenu'
// import RightMenu from './RightMenu'
// import { Drawer, Button } from 'antd';
// class Navbar extends Component {
//   state = {
//     current: 'mail',
//     visible: false
//   }
//   showDrawer = () => {
//     this.setState({
//       visible: true,
//     });
//   };
// onClose = () => {
//     this.setState({
//       visible: false,
//     });
//   };
// render() {
//     return (
//         <nav className="menuBar">
//           <div className="logo">
//             <a href="">logo</a>
//           </div>
//           <div className="menuCon">
//             <div className="leftMenu">
//               <LeftMenu />
//             </div>
//             <div className="rightMenu">
//                 <RightMenu />
//             </div>
//             <Button className="barsMenu" type="primary" onClick={this.showDrawer}>
//               <span className="barsBtn"></span>
//             </Button>
//             <Drawer
//               title="Basic Drawer"
//               placement="right"
//               closable={false}
//               onClose={this.onClose}
//               visible={this.state.visible}
//             >
//               <LeftMenu />
//               <RightMenu />
//             </Drawer>
// </div>
//         </nav>
//     );
//   }
// }
// export default Navbar;
// import React, { useState } from 'react';
// import { Drawer, Button } from 'antd';

// const App: React.FC = () => {
//   const [visible, setVisible] = useState(false);
//   const showDrawer = () => {
//     setVisible(true);
//   };
//   const onClose = () => {
//     setVisible(false);
//   };
//   return (
//     <>
//       <Button type="primary" onClick={showDrawer}>
//         Open
//       </Button>
//       <Drawer title="Basic Drawer" placement="right" onClose={onClose} visible={visible}>
//         <p>Some contents...</p>
//         <p>Some contents...</p>
//         <p>Some contents...</p>
//       </Drawer>
//     </>
//   );
// };

// export default App;