import Header from "~/component/GlobalStyles/Layout/component/heaader";

function HeaderLayout({ children }) {
  return (
    <div>
      <Header />
      <div className='container'>
        <div className='content'>
          {children}
        </div>
      </div>

    </div>
  )
}
export default HeaderLayout
