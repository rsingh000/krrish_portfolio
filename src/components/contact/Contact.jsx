import "./contact.scss";
import { useFormik} from 'formik';
import * as Yup from 'yup';
import { TextField, Button } from '@material-ui/core';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { css } from 'glamor';


export default function Contact() {


  function sendEmail(values) {
    emailjs.send('service_mkeikn7', 'template_e5x2ngk', values, 'user_qRUawaqz2bgCI93JndIcH' )
        .then((result) => {
          toast.success('Thank You, Message sent!',{
            position: toast.POSITION.BOTTOM_RIGHT,
            progressClassName: css({
              background: '#15023a',
            }),
            enter: 'zoomIn',
            exit: 'zoomOut',
            appendPosition: false,
            collapse: true,
            collapseDuration: 300
        })
        }, (error) => {
          toast.error('Error, Please try again!',{
            position: toast.POSITION.BOTTOM_RIGHT
        })
        })
  }

    const formik = useFormik({
      initialValues:{name:'',email:'',message:''},
      validationSchema: Yup.object({
          name:Yup.string()
          .required('Sorry this name is required'),
          email:Yup.string()
          .required('Sorry this email is required')
          .email('This is not a valid email'),
          message:Yup.string()
          .required('Sorry you need to say something')
          .max(500,'Sorry, the message is too long')
      }),
      onSubmit:(values,{resetForm})=>{
         sendEmail(values)
         resetForm()
      }
  })
  
  const errorHelper = (formik, values) => ({
    error: formik.errors[values] && formik.touched[values] ? true:false,
    helperText: formik.errors[values] && formik.touched[values] ? formik.errors[values] : null
  });

  return (
    <>
      <div className="contact" id="contact">
        <div className="left">
          <img src="assets/shake.png" alt="" />
        </div>
        <div className="right">
          <h2>Contact</h2>
          <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
              <TextField
                style={{width:'100%'}}
                name="name"
                label="Enter your name"
                variant="outlined"
                {...formik.getFieldProps('name')}
                {...errorHelper(formik,'name')}
              />
            </div>
            <div className="form-group">
              <TextField
                style={{width:'100%'}}
                name="email"
                label="Enter your email"
                variant="outlined"
                {...formik.getFieldProps('email')}
                {...errorHelper(formik,'email')}
              />
            </div>
            <div className="form-group">
              <TextField
                style={{width:'100%'}}
                name="message"
                label="Add your message here"
                variant="outlined"
                multiline
                rows={4}
                {...formik.getFieldProps('message')}
                {...errorHelper(formik,'message')}
              />
            </div>
            <Button variant="contained" color="primary" type="submit">
              Get in Touch
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}