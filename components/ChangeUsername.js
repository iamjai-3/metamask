import { useMoralis } from 'react-moralis';

const ChangeUsername = () => {
  const { setUserData, isUserUpdating, userError, user } = useMoralis();

  const setUserName = () => {
    const userName = prompt(
      `Enter your new Username (Current: ${user.getUsername()})`
    );

    if (!userName) return;
    setUserData({
      username: userName,
    });
  };
  return (
    <div className="text-sm absolute top-5 right-5">
      <button
        disabled={isUserUpdating}
        onClick={setUserName}
        className="hover:text-pink-700"
      >
        Change your Username
      </button>
    </div>
  );
};

export default ChangeUsername;
