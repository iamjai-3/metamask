import { useMoralis } from 'react-moralis';
import Image from 'next/image';

const Avatar = ({ userName, logoutOnPress }) => {
  const { user, logout } = useMoralis();

  return (
    <Image
      className="rounded-full bg-black cursor-pointer hover:opacity-75"
      src={`https://avatars.dicebear.com/api/pixel-art/${
        userName || user.getUsername()
      }.svg`}
      layout="fill"
      onClick={() => logoutOnPress && logout()}
    />
  );
};

export default Avatar;
