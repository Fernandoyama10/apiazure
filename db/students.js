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
            const { student_id, name, grade, grp, email } = req.body;
    const response = await db.query('INSERT INTO public.student VALUES ($1, $2, $3, $4, $5)', [student_id, name, grade, grp, email]);
    res.json({
        message: 'Contact Added successfully',
        body: {
            user: {student_id, name, grade, grp, email}
        }
    })
        }catch(e){
            throw e;
        }
    }

    async UpdateUser(req, res){
        try{
            const id = parseInt(req.params.id);
            const { name, grade, grp, email, student_id } = req.body;
        
            const response =await db.query('UPDATE public.student SET name = $1, grade = $2, grp = $3, email = $4, student_id = $5 WHERE student_id = $6', [
                name, grade, grp, email, student_id, id
            ]);
            res.json('User Updated Successfully');
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