import { Link } from 'react-router-dom'

export default function MyHeader({email, islogin}) {

    var ui;

    if (islogin) {
        ui = (
            <button type="button" className="header__btn header__btn--ghost">
                로그아웃
            </button>
        )
    }else{
        ui = (
            <>
            <Link to="/login" className="header__btn header__btn--primary">
                로그인
            </Link>
            <Link to="/signup" className="header__btn header__btn--outline">
                회원가입
            </Link>
            </>
        )
        

    }




    return (
        <header className="header">
                <div className="header__inner">
                    <Link to="/" className="header__logo">
                        MyApp
                    </Link>

                    <div className="header__right">
                        <span className="header__email">{email}</span>
                        <nav className="header__nav">
                            {ui}
                        </nav>
                    </div>
                </div>
            </header>
    )
}