import { Outlet } from 'react-router-dom'


export function DefaultLayout() {
  return (
    <div className='h-screen w-full bg-background'>
      <div className="min-h-screen flex flex-col w-[1240px] mx-auto">
        <Outlet />
      </div>
    </div>
  );
};
