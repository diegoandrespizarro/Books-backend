import Role from '../models/role.model.js'


export const createRoles = async (request, response) => {
    try {
        const count = await Role.estimatedDocumentCount();
        if (count > 0) return;

        const values = await Promise.all([
            new Role({ name: "user" }).save(),
            new Role({ name: "admin" }).save(),
        ]);
        console.log({count, values})
    }catch(error){
        console.log(error)
    }
}