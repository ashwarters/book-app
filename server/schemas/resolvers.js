const { User, Book } = require('../models');

const resolvers = {
    Query: {
        getSingleUser: async() => {
            return User.find();
        }
    },
    Mutation: {
        createUser: async(parent, args) => {
            const user = await User.create(args);
            return await user;
        }
    },

    saveBooks: async(parent, { bookData }, context) => {
        if (context.user) {
            const updateUser = await User.findByIdAndUpdate({ _id: context.user._id }, { $push: { savedBooks: bookData } }, { new: true })
            return { updateUser };
        }
    },
};

module.exports = resolvers;






//me: async(parent, args, context) => {
//  if (context.user) {
//    const userData = await User.findOne({ _id: context.user._id })
//      .select('-__v -password')
//    .populate('books')
//  .populate('users');

//return userData;
// }

// throw new AuthenticationError('Not logged in');
//}