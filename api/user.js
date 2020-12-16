const bcrypt = require('bcrypt-nodejs');

module.exports = app => {

    const obterHash = (password, callback) => {

        bcrypt.genSalt(10, (err, salt)=>{

            bcrypt.hash(password, salt, null, (err, hash)=>callback(hash));

        });
        
    }

    const save = (req, res) => {

        obterHash(req.body.password, hash => {

            const password = hash;

            app.db('users')
                .insert({
                    name: req.body.name, 
                    email: req.body.email.toLowerCase(), 
                    password
                })
                .then(_ => res.status(204).send())
                .catch(err => {

                    if(err.code === '23505') return res.status(400).send('Email já cadastrado!');

                    res.status(500).send('Erro ao cadastrar usuário');

                });

        });

    }

    return { save };

}