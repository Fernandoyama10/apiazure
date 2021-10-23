const db = require('../tools/postgres');

class Student{
    async getAll(){
        try{
            const students = await db.query('select * from public.student');
            return students.rows
        }catch(e){
            throw e;
        }
    }

    async createUser(req, res){
        try{
            const { name, grade, grp, email, city, state, street, extnumber, postalcode, crosses, neighborh, latitude, longitude } = req.body;
    const response = await db.query('INSERT INTO public.student VALUES (DEFAULT, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)', [name, grade, grp, email, city, state, street, extnumber, postalcode, crosses, neighborh, latitude, longitude]);
    res.json({
        message: 'Contact Added successfully',
        body: {
            user: {name, grade, grp, email, city, state, street, extnumber, postalcode, crosses, neighborh, latitude, longitude}
        }
    })
        }catch(e){
            throw e;
        }
    }

    async UpdateUser(req, res){
        try{
            const id = parseInt(req.params.id);
            const { name, grade, grp, email, city, state, street, extnumber, postalcode, crosses, neighborh, latitude, longitude } = req.body;
        
            const response =await db.query('UPDATE public.student SET name = $1, grade = $2, grp = $3, email = $4, city = $5, state = $6, street = $7, extnumber = $8, postalcode = $9, crosses = $10, neighborh = $11, latitude = $12, longitude = $13 WHERE student_id = $14', [
                name, grade, grp, email, city, state, street, extnumber, postalcode, crosses, neighborh, latitude, longitude, id
            ]);
            res.json('User Updated Successfully');
        }catch(e){
            throw e;
        }
    }

    
    async UpdateGeo(req, res){
        try{
            const id = parseInt(req.params.id);
            const { latitude, longitude } = req.body;
        
            const response =await db.query('UPDATE public.student SET latitude = $1, longitude = $2 WHERE student_id = $3', [
                latitude, longitude, id
            ]);
            res.json('Geo Updated Successfully');
        }catch(e){
            throw e;
        }
    }
    async DeleteUser(req, res){
        try{
            const id = parseInt(req.params.id);
            await db.query('DELETE FROM public.student where student_id = $1', [
                id
            ]);
            res.json(`User ${id} deleted Successfully`);
        }catch(e){
            throw e;
        }
    }
}

module.exports = {Student};