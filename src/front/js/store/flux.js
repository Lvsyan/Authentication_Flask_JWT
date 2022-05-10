const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      user: {},
      logged: null,
    },
    actions: {
      verify: async () => {
        try {
          const resp = await fetch(
            "https://3001-4geeksacade-reactflaskh-xywfzrlnq5x.ws-eu44.gitpod.io/api/private",
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            }
          );
          const data = await resp.json();
          setStore({ logged: data.logged_in || false, user: data.user });
        } catch (e) {
          setStore({ logged: false });
        }
      },

      logout: async () => {
        localStorage.clear();
        setStore({ logged: false });
      },
    },
  };
};

export default getState;
