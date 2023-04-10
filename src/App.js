import { Avatar, AvatarGroup } from "@mui/material";

const users: { id: number }[] = [
  { id: 0 },
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 }
];

const Uhh = () => {
  return <Avatar>UHH</Avatar>;
};

const SpacingBroken = () => (
  <AvatarGroup max={4} spacing={-10}>
    {users.map((user) => {
      return <Uhh />;
    })}
  </AvatarGroup>
);
const SpacingWorks = () => (
  <AvatarGroup max={4} spacing={-10}>
    {users.map((user) => {
      return <Avatar>UHH</Avatar>;
    })}
  </AvatarGroup>
);

export const ActiveUsers = () => {
  return (
    <>
      <SpacingBroken />
      <SpacingWorks />
    </>
  );
};
