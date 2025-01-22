import dynamic from "next/dynamic";

const RootLayout = dynamic(() => import("./rootLayout"), { ssr: false });

export default RootLayout;
