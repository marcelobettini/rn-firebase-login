import * as yup from 'yup';
export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("escriba un email válido")
    .required("el email es obligatorio"),
  pass: yup
    .string()
    .trim("La contraseña no debe comenzar ni terminar con espacios en blanco")//??
    .min(6, ({ min }) => `La contraseña debe tener al menos ${min} caracteres`)
    .required('La contraseña es obligatoria')
    .matches(/\S/, 'La contraseña solo puede contener caracteres romanos.'),
})
export const forgotValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("escriba un email válido")
    .required("el email es obligatorio")
})

