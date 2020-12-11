import { User } from "@shared/models";

export const usersStore = new Map<number, User>();

const fakeUser: User = {
  id: 1,
  email: "user1@gmail.com",
};

usersStore.set(1, fakeUser);
