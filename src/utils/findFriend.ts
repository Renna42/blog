import { FRIENDS } from "@config";

const findFriend = (friendName: string) => {
  return FRIENDS.filter(friend => friend.name === friendName)[0];
};

export default findFriend;
