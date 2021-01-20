/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from '@material-ui/icons/Dashboard'
import Person from '@material-ui/icons/Person'
import LibraryBooks from '@material-ui/icons/LibraryBooks'
import Notifications from '@material-ui/icons/Notifications'
// core components/views for Admin layout
import DashboardPage from 'views/Dashboard/Dashboard.js'
import UserProfile from 'views/UserProfile/UserProfile.js'
import VehicleList from 'views/VehicleList/VehicleList.js'
import Typography from 'views/Typography/Typography.js'
import NotificationsPage from 'views/Notifications/Notifications.js'

const dashboardRoutes = [
  {
    path: '/dashboard',
    name: 'Dashboard',

    icon: Dashboard,
    component: DashboardPage,
    layout: '/admin',
  },
  {
    path: '/user',
    name: 'User Profile',

    icon: Person,
    component: UserProfile,
    layout: '/admin',
  },
  {
    path: '/vehicle',
    name: 'Vehicle List',

    icon: 'directions_car',
    component: VehicleList,
    layout: '/admin',
  },
  {
    path: '/typography',
    name: 'Policy',

    icon: LibraryBooks,
    component: Typography,
    layout: '/admin',
  },
  // {
  //   path: '/icons',
  //   name: 'Icons',

  //   icon: BubbleChart,
  //   component: Icons,
  //   layout: '/admin',
  // },
  // {
  //   path: '/maps',
  //   name: 'Contact Us',

  //   icon: LocationOn,
  //   component: Maps,
  //   layout: '/admin',
  // },
  {
    path: '/notifications',
    name: 'Notifications',

    icon: Notifications,
    component: NotificationsPage,
    layout: '/admin',
  },
  // {
  //   path: '/rtl-page',
  //   name: 'RTL Support',

  //   icon: Language,
  //   component: RTLPage,
  //   layout: '/rtl',
  // },
  // {
  //   path: '/upgrade-to-pro',
  //   name: 'Upgrade To PRO',

  //   icon: Unarchive,
  //   component: UpgradeToPro,
  //   layout: '/admin',
  // },
]

export default dashboardRoutes
