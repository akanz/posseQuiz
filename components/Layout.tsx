import Image, { StaticImageData } from "next/image";
import React from "react";

export interface Props {
  children: React.ReactNode;
  img: StaticImageData;
}

const Layout = ({ children, img }: Props) => {
  return (
    <div className="flex">
      <aside className="h-screen hidden lg:block md:w-2/5">
        <div className="gif">
          <Image
            priority
            className="h-screen w-full"
            width={"100%"}
            height={"100%"}
            src={img}
            alt="Animation"
          />
        </div>
      </aside>
      <main className="md:w-4/5 lg:w-3/5 w-full mx-auto flex">{children}</main>
    </div>
  );
};

export default Layout;
