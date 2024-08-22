type HeaderProps= {
  setPage: Function;
}

const Header = ({setPage}:HeaderProps) => {

  const handlePage = (page: string) => {
    setPage(page)
  }
    return (
        <header className="header">
          <h3 className="header__name" onClick={()=>handlePage("Home")}>Davide</h3>
          <div className="header__menu">
            <a className="header__menu--item" onClick={()=>handlePage("About")} >About</a>
            <a className="header__menu--item" target="_blank" href="https://github.com/indiano881">Github</a>
          </div>
          
        </header>
    )
};

export default Header
