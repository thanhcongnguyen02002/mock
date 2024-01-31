import axiosClient from ".";

const login = (username: string, password: string) => {
  return axiosClient.post(
    "auth/login-jwt",
    {},
    {
      params: {
        username,
        password,
      },
    }
  );
};
const addUsers = (payload: {
  firstname: string;
  lastname: string;
  dob: Date;
  cccd: number;
  address: string;
  phonenumer: number;
  bankingnumber: number;
  username: string;
  password: string;
}) => {
  return axiosClient.post("User", payload);
};
export { addUsers, login };
