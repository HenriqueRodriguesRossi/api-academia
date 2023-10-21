const router = require("express").Router()
const User = require("../models/User")
const Yup = require("yup")
const captureErrorYup = require("../utils/captureErrorYup")
const bcrypt = require("bcryptjs")

router.post("/user", async (req, res)=>{
    try{
        const { name, email, password, repeat_password, type_plan } = req.body

        const userSchema = Yup.object().shape({
            name: Yup.string().required("Nome completo é obrigatório!"),
            email: Yup.string().email("Email inválido!").required("Email é obrigatório!"),
            password: Yup.string().required("Senha é obrigatória!").min(8, "Senha deve ter no mínimo 8 caracteres!").max(20, "Senha deve ter no máximo 20 caracteres!"),
            repeat_password: Yup.string()
                .oneOf([password, null], 'As senhas devem ser iguais!')
                .required('A confirmação de senha é obrigatória'),
            type_plan: Yup.string().required("O tipo do plano é obrigatório!").oneOf(['BRONZE', 'SILVER', 'GOLD'], 'Os tipos de plano disponíveis são: "BRONZE", "SILVER" ou "GOLD"'),
        });
    
        await userSchema.validate(req.body, { abortEarly: false });

        const checkIfEmailExist = await User.findOne({email})

        if(checkIfEmailExist){
            return res.status(422).send({
                mensagem: "Esse email já está em uso!"
            })
        }

        const passwordHash = await bcrypt.hash(password, 10)

        const newUser = new User({
            name,
            email,
            password:passwordHash,
            type_plan
        })

        await newUser.save()

        return res.status(201).send({
            mensagem: "Usuário criado com sucesso!",
            user_id: newUser.id
        })
    }catch(error){
        if(error instanceof Yup.ValidationError){
            const errors = [captureErrorYup(error)]

            return res.status(422).send({
                erros: errors
            })
        }else{
            console.log(error)
            return res.status(500).send({
                mensagem: "Erro ao cadastrar usuário!"
            })
        }
    }
})

module.exports = router