import { useFormik } from "formik";
import { basicSchema } from "../schemas";

const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };

const BasicForm = () => {
    const formik = useFormik({
      initialValues: {
        email: "",
        age: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });
  
    
  
    return (
      <form onSubmit={formik.handleSubmit} autoComplete="off">
        <label htmlFor="email">Email</label>
        <input
          value={formik.values.email}
          onChange={formik.handleChange}
          id="email"
          type="email"
          placeholder="Enter your email"
          onBlur={formik.handleBlur}
          className={formik.errors.email && formik.touched.email ? "input-error" : ""}
        />
        {formik.errors.email && formik.touched.email && <p className="error">{formik.errors.email}</p>}
        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="number"
          placeholder="Enter your age"
          value={formik.values.age}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={formik.errors.age && formik.touched.age ? "input-error" : ""}
        />
        {formik.errors.age && formik.touched.age && <p className="error">{formik.errors.age}</p>}
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={formik.errors.password && formik.touched.password ? "input-error" : ""}
        />
        {formik.errors.password && formik.touched.password && (
          <p className="error">{formik.errors.password}</p>
        )}
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          id="confirmPassword"
          type="password"
          placeholder="Confirm password"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={
            formik.errors.confirmPassword && formik.touched.confirmPassword ? "input-error" : ""
          }
        />
        {formik.errors.confirmPassword && formik.touched.confirmPassword && (
          <p className="error">{formik.errors.confirmPassword}</p>
        )}
        <button disabled={formik.isSubmitting} type="submit">
          Submit
        </button>
      </form>
    );
  };
  export default BasicForm;