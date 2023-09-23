import SideBar from "~/component/GlobalStyles/Layout/DefaultLayout/SideBar";
import Header from "~/component/GlobalStyles/Layout/component/heaader";

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className='container'>
        <SideBar />
        <div className='content'>
          {children}
        </div>
      </div>

    </div>
  )
}
export default DefaultLayout
