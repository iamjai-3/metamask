import Head from 'next/head';
import { useMoralis } from 'react-moralis';
import Login from '../components/Login';

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();
  if (!isAuthenticated) return <Login />;

  return (
    <div className="h-screen">
      <Head>
        <title>Metaverse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Welcome</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
