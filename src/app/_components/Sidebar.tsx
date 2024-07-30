import Image from "next/image";
import { sidebarMenus } from "../app.constants";

function RenderMenu({ value, menuID }: { value: any; menuID: number }) {
  return (
    <li
      key={value.id}
      className={`flex gap-x-3 ml-2 lg:ml-8 cursor-pointer my-8 ${value.id === menuID ? "pt-10" : "pt-0"}`}
    >
      <Image
        src={value.imageUrl}
        alt={`${value.name}_image`}
        width={24}
        height={24}
      />
      <p
        className={`${value.id === 1 ? "font-bold" : "font-normal"} text-white`}
      >
        {value.name}
      </p>
    </li>
  );
}

function Sidebar({ isInsideSheet }: { isInsideSheet: true | false }) {
  return (
    <div
      className={`w-[200px] lg:w-[270px]  ${isInsideSheet ? "" : "hidden lg:block"} static lg:fixed flex-shrink-0 h-screen bg-black py-8`}
    >
      <div className="flex gap-x-3 ml-2 lg:ml-8 items-center">
        <Image
          src="/images/coffee.png"
          alt="Home_image"
          width={32}
          height={32}
        />
        <p className="font-extrabold text-white tracking-widest text-[22px]">
          WATCH
        </p>
      </div>
      <nav>
        <ul>
          {sidebarMenus.slice(0, 4).map((value) => {
            return <RenderMenu value={value} menuID={1} />;
          })}
          {sidebarMenus.slice(4, 6).map((value) => {
            return <RenderMenu value={value} menuID={5} />;
          })}
          {sidebarMenus.slice(6).map((value) => {
            return <RenderMenu value={value} menuID={7} />;
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
