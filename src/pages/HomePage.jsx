import MyHeader from '../components/MyHeader'

export default function HomePage() {
    return (
        <div className="page">
            <MyHeader email="ejm95336@naver.com" islogin={true} />

            <main className="page__content">
                <h1>Home Page</h1>
            </main>
        </div>
    )
}
