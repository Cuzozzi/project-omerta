import axios from "axios";
import { NavigateFunction } from "react-router-dom";

export async function AllUsers(navigate: NavigateFunction) {
  try {
    const response = await axios({
      method: "get",
      url: `${process.env.REACT_APP_SERVER_PORT}/admin/console/user`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (err: any) {
    if (err.response.status === 401) {
      console.log("Authentication failed");
      localStorage.setItem("isAdmin", "false");
      navigate("/", { replace: true });
    }
  }
}

export async function AddUser(
  navigate: NavigateFunction,
  email: string,
  password: string,
  username: string
) {
  try {
    const response = await axios({
      method: "post",
      url: `${process.env.REACT_APP_SERVER_PORT}/admin/console/user`,
      data: {
        email,
        password,
        username,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (err: any) {
    if (err.response.status === 401) {
      navigate("/", { replace: true });
    }
  }
}

export async function UserDelete(navigate: NavigateFunction, user_id: string) {
  try {
    const response = await axios({
      method: "delete",
      url: `${process.env.REACT_APP_SERVER_PORT}/admin/console/user`,
      data: {
        user_id,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (err: any) {
    if (err.response.status === 401) {
      console.log("Authentication failed");
      localStorage.setItem("isAdmin", "false");
      navigate("/", { replace: true });
    }
  }
}

export async function UserTokens(
  navigate: NavigateFunction,
  user_id: string,
  user_email: string
) {
  try {
    const response = await axios({
      method: "put",
      url: `${process.env.REACT_APP_SERVER_PORT}/admin/console/tokens`,
      data: {
        user_id,
        user_email,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (err: any) {
    if (err.response.status === 401) {
      console.log("Authentication failed");
      localStorage.setItem("isAdmin", "false");
      navigate("/", { replace: true });
      return err.response.data;
    }
  }
}

export async function AllTokens(navigate: NavigateFunction) {
  try {
    const response = await axios({
      method: "delete",
      url: `${process.env.REACT_APP_SERVER_PORT}/admin/console/tokens`,
      data: {
        token: localStorage.getItem("token"),
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (err: any) {
    if (err.response.status === 401) {
      console.log("Authentication failed");
      localStorage.setItem("isAdmin", "false");
      navigate("/", { replace: true });
    }
  }
}

export async function GiveMod(
  navigate: NavigateFunction,
  user_id: string,
  user_email: string
) {
  try {
    const response = await axios({
      method: "put",
      url: `${process.env.REACT_APP_SERVER_PORT}/admin/console/moderator`,
      data: {
        user_id,
        user_email,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (err: any) {
    if (err.response.status === 401) {
      console.log("Authentication failed");
      localStorage.setItem("isAdmin", "false");
      navigate("/", { replace: true });
    }
  }
}

export async function RemoveMod(
  navigate: NavigateFunction,
  user_id: string,
  user_email: string
) {
  try {
    const response = await axios({
      method: "delete",
      url: `${process.env.REACT_APP_SERVER_PORT}/admin/console/moderator`,
      data: {
        user_id,
        user_email,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (err: any) {
    if (err.response.status === 401) {
      console.log("Authentication failed");
      localStorage.setItem("isAdmin", "false");
      navigate("/", { replace: true });
    }
  }
}

export async function GiveAdmin(
  navigate: NavigateFunction,
  user_id: string,
  user_email: string
) {
  try {
    const response = await axios({
      method: "put",
      url: `${process.env.REACT_APP_SERVER_PORT}/admin/console/admin`,
      data: {
        user_id,
        user_email,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (err: any) {
    if (err.response.status === 401) {
      console.log("Authentication failed");
      localStorage.setItem("isAdmin", "false");
      navigate("/", { replace: true });
    }
  }
}

export async function RemoveAdmin(
  navigate: NavigateFunction,
  user_id: string,
  user_email: string
) {
  try {
    const response = await axios({
      method: "delete",
      url: `${process.env.REACT_APP_SERVER_PORT}/admin/console/admin`,
      data: {
        user_id,
        user_email,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (err: any) {
    if (err.response.status === 401) {
      console.log("Authentication failed");
      localStorage.setItem("isAdmin", "false");
      navigate("/", { replace: true });
    }
  }
}
