const { User } = require("../models");


const resolvers = {
    Query: {
        activeUser: async () => {
            
                const userData = await User.find({});
                return userData
        
        }
    }
}

module.exports = resolvers