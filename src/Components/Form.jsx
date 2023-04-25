import React from 'react'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import  emailjs  from "@emailjs/browser";
import { FormBGImage, FormBGgradient, LastTitle, FormContainer, Container, Input, Textarea, Error, Button } from "../Styles/FormComponents"

const VALIDACION_EMAIL = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
const VALIDACION_NOMBRE = /^(?=\S)(?=.*\S$).{8,}$/;
const SERVICE_ID = "service_70rboqi";
const TEMPLATE_ID = "template_5w2sn9y";
const PUBLIC_KEY = "lWZ8B8klg8w_FpReV";

const inputs = [
  {id: 1, label: "Nombre", placeholder: "Nombre", name: "nombre", type: "text"},
  {id: 2, label: "Mail", placeholder: "Mail", name: "mail", type: "email" },
  {id: 3, label: "Asunto", placeholder: "Asunto", name: "asunto", type: "text"},
  // {id: 4, label: "Mensaje", placeholder: "Mensaje", name: "mensaje", type: "text"}
]

const Form = () => {

  const getInitialValues = () =>(
    {
      nombre:"",
      mail:"",
      asunto:"",
      mensaje:""
    }
  );

  const getValidationSchema = () => (
    Yup.lazy(() =>
      Yup.object().shape({
        nombre: Yup.string()
          .min(5, 'El campo debe tener al menos 3 caracteres')
          .required("Campo Obligatorio")
          .matches(VALIDACION_NOMBRE,
          'No puede haber espacios al inicio ni al final de este campo',
          ),
        mail: Yup.string().
          email().
          required("Campo Obligatorio").
          matches(VALIDACION_EMAIL, 'Ingrese un formato de mail válido'),
        asunto: Yup.string()
          .min(5, 'El asunto debe tener al menos 6 caracteres')
          .max(25, 'El asunto no debe superar los 25 caracteres')
          .required('Campo Obligatorio'),
        mensaje: Yup.string()
          .min(5, 'El mensaje debe tener al menos 6 caracteres')
          .max(200, 'El mensaje no debe superar los 200 caracteres')
          .required('Campo Obligatorio'),
      })
    )
  );

  const onSubmit = (values, {resetForm}) =>{
    console.log(values);

    emailjs.send(SERVICE_ID, TEMPLATE_ID, { 
      /*a continuación van los valores del formulario 
      que se utilizan en el template, por eso lo que está 
      antes de los dos puntos debe coincidir con 
      los campos que se detallan en el dashboard emailJS */
      nombre: values.nombre,
      mensaje: values.mensaje,
      mail: values.mail,
      asunto: values.asunto
    }, PUBLIC_KEY)
    .then(response => console.log(response))
    .catch(error => console.log(error))
    
    resetForm();
  };

  const {values, setFieldValue, errors, handleSubmit} = useFormik({ 
    initialValues: getInitialValues(),
    validationSchema: getValidationSchema(),
    validationOnChange: false,
    validateOnBlur: false,
    onSubmit,
  });

  return (
    <FormBGImage id='form'>
      <FormBGgradient>
        <LastTitle>¡Déjanos tu <span style={{color: "#6CBD45", fontWeight: 700}}>mensaje</span>!</LastTitle>
        <FormContainer form="register">
          <form  id="register-form" onSubmit={handleSubmit}>
          {   
            inputs.map(fields => (
              <Container key={fields.id}>
                <Input
                  name={fields.name}
                  placeholder={fields.placeholder}
                  value={values[fields.name]}
                  onChange={(e) => setFieldValue(fields.name, e.target.value)}
                                  // ☝ el primer parámetro es el nombre de la propiedad a afectar, 
                                  //el segundo es valor que quiero guardar en la propiedad
                />
                {
                  errors[fields.name] &&(
                    <Error>{errors[fields.name]}</Error>
                  )
                }
              </Container>
            ))
          }
          <Container key={inputs.length}>
            <Textarea
              name='mensaje'
              placeholder='Mensaje'
              value={values['mensaje']}
              onChange={(e) => setFieldValue('mensaje', e.target.value)}
            />
            {
              errors["mensaje"] &&(
                <Error>{errors["mensaje"]}</Error>
              )
            }
          </Container>
          </form>
          <Button form="register-form" btn="submit" type="submit">Enviar</Button>
        </FormContainer>
      </FormBGgradient>
    </FormBGImage>
  )
}

export default Form