import { useSignOut } from "@/_hooks/useSignOut";
import DropDown from "@/_ui/DropDown";

const UserProfile = ({ user }) => {
  const signOut = useSignOut();
  return (
    <div className="">
      <DropDown item={user} signOut={signOut} />
    </div>
  );
};

export default UserProfile;
