import '../../assets/scss/SecondPage.scss';

function Header() {
    return (
        <header className='header'>
            <div className='header__wrapper'>
                <div className='header__logo'></div>
                <h1 className='header__title'>Blog name</h1>
                <nav>
                        <List />
                </nav>
            </div>
        </header>
    );
}

function List() {
    const count = 4;
      const items = Array(count).fill().map((_, index) =>(
        <li key={index}><div className='nav__list-item'></div></li>
      ));

      return (
        <ul className='nav__list'>
            {items}
        </ul>
      );
}

export default Header;