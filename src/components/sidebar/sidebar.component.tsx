import { Functions,Assets} from '@/utils/import.utils';
import { useSetState } from '../../utils/functions.utils';
import { useEffect } from 'react';
import Image from 'next/image';

interface ISidebar {
  text?: String;
}

const Sidebar = (props: ISidebar) => {
  const sidebar_content:any = [
    {
      name: 'Dashboard',
      active_name: 'dashboard',
      active_icon: Assets.dashboardActive,
      inactive_icon: Assets.dashboardInactive,
      route: '/dashboard',
    },
    {
      name: 'Users',
      active_name: 'users',
      active_icon: Assets.userActive,
      inactive_icon: Assets.userInactive,
      route: '/users',
      user_details: 'user_details',
    },
    {
      name: 'Bookings',
      active_name: 'bookings',
        active_icon: Assets.bookingActive,
        inactive_icon: Assets.bookingInactive,
      route: '/bookings',
      booking_details: 'booking_details',
    },
    {
      name: 'Products',
      active_name: 'products',
      active_icon: Assets.productActive,
      inactive_icon: Assets.productInactive,
      route: '/products',
    },
    {
      name: 'Chat',
      active_name: 'chat',
      active_icon: Assets.chatActive,
      inactive_icon: Assets.chatInactive,
      route: '/chat',
    },
    {
      name: 'Notification',
      active_name: 'notification',
      active_icon: Assets.notificationActive,
      inactive_icon: Assets.notificationInactive,
      route: '/notification',
    },
    
  ];
 
  const [state, setState] = useSetState({
    pathname: '',
  });
 
  useEffect(() => {
    setState({ pathname: window.location.pathname.split('/')[1] });
  }, [state.pathname]);

  // logout
  const logout = async () => {
    // Notiflix.Loading.pulse('signout...');
    // localStorage.clear();
    // // setUser({});  
    //  window.location.pathname='/login';
    // Functions.notiflixRemove();
    
  };

  return (
      <div className="border-primary-green  h-[100vh] border-r-2">
        <div className="sidebar_wrapper">
          <div className=" flex flex-col   justify-center items-center">
            <div className=" flex flex-col   justify-center items-center py-[30px] ">
              <div className="bg-primary-green w-[110px] h-[110px] rounded-full flex justify-center items-center">
                <Image src={Assets.logo} width={80} height={80} alt="logo" />
              </div>
              <div className="font-DMSans-bold text-[20px]  text-primary-green">Groshop</div>
            </div>
            <div className="flex flex-col space-y-5 w-full items-center">
              {sidebar_content.map((item: any, index: number) => {
                return (
                    <div
                      onClick={() => {Functions.navigate(item.route)}}
                      className={
                        `${state.pathname === item.active_name
                          ? 'bg-primary-green'
                          : state.pathname === item.user_details
                          ? 'bg-primary-green'
                          : state.pathname === item.booking_details 
                          ? 'bg-primary-green'
                          : 'bg-input-bg '} flex items-center gap-7 w-[200px] h-[40px] rounded-lg cursor-pointer`
                      } key={index}>
                      <div className=" ml-4">
                        <Image
                          className="color"
                          src={
                            state.pathname === item.active_name
                              ? item.inactive_icon
                              : state.pathname === item.user_details
                              ? item.inactive_icon
                              : state.pathname === item.booking_details 
                              ? item.inactive_icon
                              : item.active_icon
                          }
                         height={18}
                         width={18}
                          alt="icons"
                        />
                      </div>
                      <div
                        className={
                          state.pathname === item.active_name
                            ? 'text-neutral-white font-Inter-bold text-[20px]'
                            : state.pathname === item.user_details
                            ? 'text-neutral-white font-Inter-bold text-[20px]'
                            :state.pathname === item.booking_details 
                            ? 'text-neutral-white font-Inter-bold text-[20px]'
                            : 'font-DMSans-bold text-[20px] text-secondary-black'
                        }>
                        {item.name}
                      </div>
                    </div>
                );
              })}
              <div className="h-0.5 bg-light-gray w-full ["></div>
              <div className="sidebar_menu_logout" onClick={(()=>logout())}>
                <div className="flex bg-input-bg gap-3 w-[180px] h-[40px] rounded-lg cursor-pointer items-center " >
                  <Image
                 src={Assets.logoutActive} className="logout_active"
                 height={18}
                 width={18}
                    alt="icons"
                  />
               
                <div className="sidebar_list_logout_name" >Logout</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar 