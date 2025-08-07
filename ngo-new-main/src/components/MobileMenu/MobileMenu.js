// import React, { Fragment, useState } from 'react';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/List';
// import Collapse from '@mui/material/Collapse';
// import { NavLink } from 'react-router-dom';
// import './style.css';

// const menus = [
//   {
//     id: 1,
//     title: 'Home',
//     link: '/home',
//   },
//   {
//     id: 2,
//     title: 'About Us',
//     link: '/about-us',
//     submenu: [
//       {
//         id: 21,
//         title: 'Who We are',
//         link: '/about-us#who-we-are',
//       },
//       {
//         id: 22,
//         title: 'Our Mission & Vision',
//         link: '/about-us#our-mission-and-vision',
//       },
//       {
//         id: 23,
//         title: 'Our Team',
//         link: '/about-us#our-team',
//       },
//       {
//         id: 24,
//         title: 'Partners & Sponsors',
//         link: '/about-us#partners-and-sponsors',
//       },
//     ],
//   },
//   {
//     id: 3,
//     title: 'Impact',
//     link: '/impact/success-stories',
//     submenu: [
//       {
//         id: 1,
//         title: 'Success Stories',
//         link: '/impact/success-stories',
//       },
//       {
//         id: 2,
//         title: 'Photo/Video Gallery',
//         link: '/impact/gallery',
//       },
//     ],
//   },
//   {
//     id: 4,
//     title: 'Get Involved',
//     link: '/get-involved/become-volunteer',
//     submenu: [
//       {
//         id: 1,
//         title: 'Volunteer Opportunities or Join Our team',
//         link: '/get-involved/become-volunteer',
//       },
//       {
//         id: 2,
//         title: 'Fundraising Campaigns',
//         link: '/get-involved/fundraising-compaigns',
//       },
//       {
//         id: 3,
//         title: 'Corporate Partnerships',
//         link: '/get-involved/corporate-partnerships',
//       },
//       {
//         id: 4,
//         title: 'Events',
//         link: '/get-involved/events',
//       },
//     ],
//   },
//   {
//     id: 5,
//     title: 'Donate',
//     link: '/donate',
//   },
//   {
//     id: 6,
//     title: 'Contact Us',
//     link: '/contact',
//   },
// ];

// const MobileMenu = () => {
//   const [openId, setOpenId] = useState(0);
//   const [menuActive, setMenuState] = useState(false);

//   const ClickHandler = link => {
//     if (link.includes('#')) {
//       const targetId = link.split('#')[1];
//       const targetElement = document.getElementById(targetId);
//       if (targetElement) {
//         targetElement.scrollIntoView({ behavior: 'smooth' });
//       }
//     }
//     setMenuState(false); // Close the menu after clicking
//   };

//   return (
//     <div>
//       <div className={`mobileMenu ${menuActive ? 'show' : ''}`}>
//         <div className="menu-close">
//           <div className="clox" onClick={() => setMenuState(!menuActive)}>
//             <i className="ti-close"></i>
//           </div>
//         </div>

//         <ul className="responsivemenu">
//           {menus.map(item => (
//             <ListItem className={item.id ===  ? 'active' : null} key={item.id}>
//               {item.submenu ? (
//                 <Fragment>
//                   <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>
//                     {item.title}
//                     <i className={item.id === openId ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
//                   </p>
//                   <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
//                     <List className="subMenu">
//                       {item.submenu.map(submenu => (
//                         <ListItem key={submenu.id}>
//                           <NavLink className="active" to={submenu.link} onClick={() => ClickHandler(submenu.link)}>
//                             {submenu.title}
//                           </NavLink>
//                         </ListItem>
//                       ))}
//                     </List>
//                   </Collapse>
//                 </Fragment>
//               ) : (
//                 <NavLink className="active" to={item.link} onClick={() => ClickHandler(item.link)}>
//                   {item.title}
//                 </NavLink>
//               )}
//             </ListItem>
//           ))}
//         </ul>
//       </div>

//       <div className="showmenu mobail-menu" onClick={() => setMenuState(!menuActive)}>
//         <button type="button" className="navbar-toggler open-btn">
//           <span className="icon-bar first-angle"></span>
//           <span className="icon-bar middle-angle"></span>
//           <span className="icon-bar last-angle"></span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MobileMenu;

import React, { Fragment, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/List';
import Collapse from '@mui/material/Collapse';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import './style.css';

const menus = [
  {
    id: 1,
    title: 'Home',
    link: '/home',
  },
  {
    id: 2,
    title: 'About Us',
    link: '/about-us',
    submenu: [
      {
        id: 211,
        title: 'About Us',
        link: '/about-us#',
        offset: -100,
        duration: 500,
      },
      {
        id: 21,
        title: 'Who We are',
        link: '/about-us#who-we-are',
        offset: -100,
        duration: 500,
      },
      {
        id: 22,
        title: 'Our Mission & Vision',
        link: '/about-us#our-mission-and-vision',
        offset: -150,
        duration: 500,
      },
      {
        id: 23,
        title: 'Our Values',
        link: '/about-us#our-values',
        offset: -170,
        duration: 500,
      },
      {
        id: 24,
        title: 'Key Programs and Initiatives',
        link: '/about-us#key-programs-and-initiatives',
        offset: -170,
        duration: 500,
      },
      {
        id: 25,
        title: 'Impact Metrics',
        link: '/about-us#impact-metrics',
        offset: -170,
        duration: 500,
      },

      {
        id: 26,
        title: 'Our Team',
        link: '/about-us#our-team',
        offset: -130,
        duration: 500,
      },
      {
        id: 27,
        title: 'Partners & Sponsors',
        link: '/about-us#partners-and-sponsors',
        offset: -190,
        duration: 500,
      },
    ],
  },
  {
    id: 3,
    title: 'Impact',
    link: '/impact/success-stories',
    submenu: [
      {
        id: 31,
        title: 'Success Stories',
        link: '/impact/success-stories',
      },
      {
        id: 32,
        title: 'Photo/Video Gallery',
        link: '/impact/gallery',
      },
    ],
  },
  {
    id: 4,
    title: 'Get Involved',
    link: '/get-involved/become-volunteer',
    submenu: [
      {
        id: 41,
        title: 'Volunteer Opportunities or Join Our team',
        link: '/get-involved/become-volunteer',
      },
      {
        id: 42,
        title: 'Fundraising Campaigns',
        link: '/get-involved/fundraising-compaigns',
      },
      {
        id: 43,
        title: 'Corporate Partnerships',
        link: '/get-involved/corporate-partnerships',
      },
      {
        id: 44,
        title: 'Events',
        link: '/get-involved/events',
      },
    ],
  },
  {
    id: 5,
    title: 'Donate',
    link: '/donate',
  },
  {
    id: 6,
    title: 'Contact Us',
    link: '/contact',
  },
];

const MobileMenu = () => {
  const [openId, setOpenId] = useState(0);
  const [menuActive, setMenuState] = useState(false);

  const ClickHandler = link => {
    if (link?.includes('#')) {
      const targetId = link.split('#')[1];
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMenuState(false);
  };

  return (
    <div>
      <div className={`mobileMenu ${menuActive ? 'show' : ''}`}>
        <div className="menu-close">
          <div className="clox" onClick={() => setMenuState(!menuActive)}>
            <i className="ti-close"></i>
          </div>
        </div>

        <ul className="responsivemenu">
          {menus.map(item => (
            <ListItem className={item.id === openId ? 'active' : null} key={item.id}>
              {item.submenu ? (
                item.link.includes('about-us') ? (
                  <Fragment>
                    <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>
                      {item.title}
                      <i className={item.id === openId ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
                    </p>
                    <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                      <List className="subMenu">
                        {/* {item.submenu.map(submenu => (
                          <ListItem key={submenu.id}>
                            <Link
                              to={submenu.link.split('#')[1]} // Get the ID for scrolling
                              smooth={true}
                              duration={submenu?.duration} // Duration of the scroll animation
                              onClick={ClickHandler}
                              // onClick={() => ClickHandler(submenu.link)} // Pass the link
                              className="active"
                              offset={submenu?.offset}
                            >
                              {submenu.title}
                            </Link>
                          </ListItem>
                        ))} */}
                        {item.submenu.map(submenu => {
                          const targetId = submenu.link.split('#')[1]; // Extract ID after #
                          return (
                            <ListItem key={submenu.id}>
                              <Link
                                to={targetId}
                                smooth={true}
                                duration={submenu?.duration || 500}
                                offset={submenu?.offset || 0}
                                className="active"
                                onClick={e => {
                                  e.preventDefault();
                                  window.location.href = submenu.link;
                                  ClickHandler(submenu.link);
                                }}
                              >
                                {submenu.title}
                              </Link>
                            </ListItem>
                          );
                        })}
                      </List>
                    </Collapse>
                  </Fragment>
                ) : (
                  <Fragment>
                    <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>
                      {item.title}
                      <i className={item.id === openId ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
                    </p>
                    <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                      <List className="subMenu">
                        {item.submenu.map(submenu => (
                          <ListItem key={submenu.id}>
                            <NavLink className="active" to={submenu.link} onClick={() => ClickHandler(submenu.link)}>
                              {submenu.title}
                            </NavLink>
                          </ListItem>
                        ))}
                      </List>
                    </Collapse>
                  </Fragment>
                )
              ) : (
                <NavLink className="active" to={item.link} onClick={ClickHandler}>
                  {item.title}
                </NavLink>
              )}
            </ListItem>
          ))}
        </ul>
      </div>

      <div className="showmenu mobail-menu" onClick={() => setMenuState(!menuActive)}>
        <button type="button" className="navbar-toggler open-btn">
          <span className="icon-bar first-angle"></span>
          <span className="icon-bar middle-angle"></span>
          <span className="icon-bar last-angle"></span>
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
