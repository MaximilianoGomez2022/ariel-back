import yup from 'yup'

const loginSchema = yup.object({
    mail : yup.string().email('El mail no es valido').required('El mail es obligatorio'),
    password: yup.string().min(3,'El password debe tener al menos 3 caractéres').required('La contraseña es obligatoria')
}).noUnknown()

export {
    loginSchema
}