import Login from '@/pages/login/index.tsx';
import Home from '@/pages/home/index.tsx';
import NotFound from '@/components/nofound/index.tsx';
import UserList from '@/pages/user/index.tsx';
import TravelList from '@/pages/travel/index.tsx';
import TravelExamineList from '@/pages/travel/examine/index.tsx';
import CityList from '@/pages/city/index.tsx';
import CityProvinceList from '@/pages/city/province/index.tsx';
import ActivityList from '@/pages/activity/index.tsx';

export const routerConfig = [
  {
    path: '/home',
    component: Home,
    auth: true,
    openKeys: 'user',
    selectedKeys: 'home',
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/user/list',
    component: UserList,
    openKeys: 'user',
    selectedKeys: 'user_list',
  },
  {
    path: '/travel/list',
    component: TravelList,
    openKeys: 'travel',
    selectedKeys: 'travel_list',
  },
  {
    path: '/travel/examine/list',
    component: TravelExamineList,
    openKeys: 'travel',
    selectedKeys: 'travel_examine_list',
  },
  {
    path: '/city/list',
    component: CityList,
    openKeys: 'city',
    selectedKeys: 'city_list',
  },
  {
    path: '/city/province/list',
    component: CityProvinceList,
    openKeys: 'city',
    selectedKeys: 'city_province_list',
  },
  {
    path: '/activity/list',
    component: ActivityList,
    openKeys: 'activity',
    selectedKeys: 'activity_list',
  },
  {
    path: '/404',
    component: NotFound,
  },
];
