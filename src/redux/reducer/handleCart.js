const cart = [];

const handleCart = (state = cart, action) => {
  switch (action.type) {
    case "ADDITEM":
      const exist = state.find((x) => x.id === action.payload.id);
      if (exist) {
        return state.map((x) =>
          x.id === action.payload.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        return [...state, { ...action.payload, qty: 1 }];
      }

    case "DELITEM":
      const exist2 = state.find((x) => x.id === action.payload.id);
      if (exist2.qty === 1) {
        return state.filter((x) => x.id !== action.payload.id);
      } else {
        return state.map((x) =>
          x.id === action.payload.id ? { ...x, qty: x.qty - 1 } : x
        );
      }

    default:
      return state;
  }
};

export default handleCart;