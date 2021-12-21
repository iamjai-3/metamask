import Image from 'next/image';
import { useMoralis } from 'react-moralis';

const Login = () => {
  const { authenticate } = useMoralis();

  return (
    <div className="bg-black relative">
      <h1>Login Screen</h1>
      <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
        <Image
          src="https://www.gstatic.com/devrel-devsite/prod/v84e6f6a61298bbae5bb110c196e834c7f21fe3fb34e722925433ddb936d280c9/developers/images/touchicon-180.png"
          className="object-cover rounded-full"
          height={200}
          width={200}
        />
        <button
          className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse"
          onClick={authenticate}
        >
          Login Metaverse
        </button>
      </div>

      <div className="w-full h-screen">
        <Image
          src="https://links.papareact.com/55n"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Login;
