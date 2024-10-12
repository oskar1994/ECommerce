import Style from "./LayoutStyle.module.css";

const Layout = () => {
  return (
    <>
      <article className={Style.header}>
        <header>Welcome !</header>
      </article>

      <section className={Style["content-section"]}>
        <div>Section</div>
      </section>
    </>
  );
};

export default Layout;
