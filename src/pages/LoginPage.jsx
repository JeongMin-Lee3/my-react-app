import MyHeader from '../components/MyHeader'

export default function LoginPage() {
    return (
        <div className="page">
            <MyHeader email="eorjarnl123@cu.ac.kr" islogin={false} />

            <main className="page__content">
                <h1>Login Page</h1>
            </main>
        </div>
    )
}