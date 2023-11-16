import React, {ReactNode} from "react";
import Header from "./components/Header";

interface Props {
    children: ReactNode;
}

const MainLayout:React.FC<Props> = ({children}) => {
    return (
        <>
            <Header></Header>
            <div className="mt-[64px] max-w-screen-xl mb-0 mx-auto">
                {children}
            </div>
        </>
    );
}

export default MainLayout;