import axios from "axios";

export async function AllUsers(offset: number) {
  try {
    console.log(offset);
    const response = await axios({
      method: "put",
      url: `${process.env.REACT_APP_SERVER_PORT}/admin/console/user`,
      data: {
        offset,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (response.data == 0) {
      const response = await axios({
        method: "put",
        url: `${process.env.REACT_APP_SERVER_PORT}/admin/console/user`,
        data: {
          offset: 0,
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return response.data;
    }
    return response.data;
  } catch (err: any) {
    if (err.response.status === 401) {
      console.log("Authentication failed");
      return err.response.data;
    }
  }
}

export async function AddUser(
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
      console.log("Authentication failed");
      return err.response.data;
    }
  }
}

export async function UserDelete(user_id: string) {
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
      return err.response.data;
    }
  }
}

export async function UserTokens(user_id: string) {
  try {
    const response = await axios({
      method: "put",
      url: `${process.env.REACT_APP_SERVER_PORT}/admin/console/tokens`,
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
      return err.response.data;
    }
  }
}

export async function AllTokens() {
  try {
    const response = await axios({
      method: "delete",
      url: `${process.env.REACT_APP_SERVER_PORT}/dangerous/site-logout`,
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
      return err.response.data;
    }
  }
}

export async function GiveMod(user_id: string) {
  try {
    const response = await axios({
      method: "put",
      url: `${process.env.REACT_APP_SERVER_PORT}/admin/console/moderator`,
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
      return err.response.data;
    }
  }
}

export async function RemoveMod(user_id: string) {
  try {
    const response = await axios({
      method: "delete",
      url: `${process.env.REACT_APP_SERVER_PORT}/admin/console/moderator`,
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
      return err.response.data;
    }
  }
}

export async function GiveAdmin(user_id: string) {
  try {
    const response = await axios({
      method: "put",
      url: `${process.env.REACT_APP_SERVER_PORT}/admin/console/admin`,
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
      return err.response.data;
    }
  }
}

export async function RemoveAdmin(user_id: string) {
  try {
    const response = await axios({
      method: "delete",
      url: `${process.env.REACT_APP_SERVER_PORT}/admin/console/admin`,
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
      return err.response.data;
    }
  }
}

export async function DeleteAllUsers() {
  try {
    const response = await axios({
      method: "delete",
      url: `${process.env.REACT_APP_SERVER_PORT}/dangerous/all-users`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (err: any) {
    if (err.response.status === 401) {
      console.log("Authentication failed");
      return err.response.data;
    }
  }
}

export async function AddTenTiles() {
  try {
    const response = await axios({
      method: "put",
      url: `${process.env.REACT_APP_SERVER_PORT}/admin/console/map`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (err: any) {
    if (err.response.status === 401) {
      console.log("Authentication failed");
      return err.response.data;
    }
  }
}

export async function RemoveTenTiles() {
  try {
    const response = await axios({
      method: "delete",
      url: `${process.env.REACT_APP_SERVER_PORT}/admin/console/map`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (err: any) {
    if (err.response.status === 401) {
      console.log("Authentication failed");
      return err.response.data;
    }
  }
}
