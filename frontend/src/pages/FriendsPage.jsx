// import { useEffect, useState } from "react";
// import axios from "axios";
// import toast from "react-hot-toast";

// const FriendsPage = () => {
//   const [friends, setFriends] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Step 2a: Fetch friends
//   useEffect(() => {
//     const fetchFriends = async () => {
//       try {
//         const res = await axios.get("http://localhost:5001/api/users/friends", {
//           withCredentials: true,
//         });
//         setFriends(res.data || []);
//       } catch (error) {
//         toast.error(error.response?.data?.message || "Failed to load friends");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchFriends();
//   }, []);

//   // Step 2b: Render friends
//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">My Friends</h1>
//       {loading ? (
//         <p className="text-gray-500">Loading friends...</p>
//       ) : friends.length === 0 ? (
//         <p className="text-gray-500">You don’t have any friends yet 😢</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {friends.map((friend) => (
//             <div
//               key={friend._id}
//               className="bg-base-200 p-4 rounded-xl flex items-center gap-4"
//             >
//               <img
//                 src={friend.profilePic}
//                 alt={friend.fullName}
//                 className="w-12 h-12 rounded-full object-cover"
//               />
//               <div>
//                 <h2 className="font-semibold">{friend.fullName}</h2>
//                 <p className="text-sm text-gray-500">
//                   {friend.nativeLanguage} → {friend.learningLanguage}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default FriendsPage;
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const FriendsPage = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFriends = async () => {
    try {
      const res = await axios.get("http://localhost:5001/api/users/friends", {
        withCredentials: true,
      });
      setFriends(res.data || []);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to load friends");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFriends();
  }, []);

  const handleRemoveFriend = async (friendId) => {
    try {
      await axios.delete(`http://localhost:5001/api/users/friends/${friendId}`, {
        withCredentials: true,
      });
      toast.success("Friend removed successfully!");
      // Remove friend locally
      setFriends(friends.filter((f) => f._id !== friendId));
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to remove friend");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Friends</h1>
      {loading ? (
        <p className="text-gray-500">Loading friends...</p>
      ) : friends.length === 0 ? (
        <p className="text-gray-500">You don’t have any friends yet 😢</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {friends.map((friend) => (
            <div
              key={friend._id}
              className="bg-base-200 p-4 rounded-xl flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={friend.profilePic}
                  alt={friend.fullName}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h2 className="font-semibold">{friend.fullName}</h2>
                  <p className="text-sm text-gray-500">
                    {friend.nativeLanguage} → {friend.learningLanguage}
                  </p>
                </div>
              </div>
              <button
                className="btn btn-error btn-sm"
                onClick={() => handleRemoveFriend(friend._id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FriendsPage;

