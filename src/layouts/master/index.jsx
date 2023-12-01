import { Flowbite } from 'flowbite-react';
import TopMenu from "./components/TopMenu";
import LeftMenu from "./components/LeftMenu";

export default function Master({ children }) {
  return (
    <Flowbite>
      <TopMenu />
      <div className='flex dark:text-slate-300'>
        <LeftMenu />
        <div className='w-screen p-5'>
          {children}
        </div>
      </div>
    </Flowbite>
  );
}
