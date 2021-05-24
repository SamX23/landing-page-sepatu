import Meta from "./meta";

const Layout = ({ title, desc, children }) => {
  return (
    <>
      <Meta title={title} desc={desc} />
      {children}
    </>
  );
};

export default Layout;
