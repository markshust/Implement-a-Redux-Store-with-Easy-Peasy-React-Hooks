const model = {
  todos: {
    items: ['foo', 'bar', 'baz'],
    add: (state, payload) => {
      state.items.push(payload);
    },
  },
};

export default model;
