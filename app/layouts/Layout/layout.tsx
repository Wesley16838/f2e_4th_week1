import type { MetaFunction } from "@remix-run/node";
import { MetaProps } from "~/types/common";

import { LayoutProps } from "~/types/components";
import Nav from "../Nav";
import Footer from "../Footer";

const Layout = ({children}: LayoutProps) => {
    return (
        <>
            <Nav/>
            {children}
            <Footer/>
        </>
    )
}

export default Layout