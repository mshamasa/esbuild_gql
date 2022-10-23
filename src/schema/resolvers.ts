const resolvers= {
  Query: {
    Hello: async (_, args) => {
      const {input} = args;

      return {message:`Hello ${input?.message}`};
    },
  },
};

export default resolvers;

