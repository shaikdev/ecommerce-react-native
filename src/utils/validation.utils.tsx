import zod from 'zod';

const loginSchema = zod.object({
  email: zod.string().nonempty('Email is required').email('Email is not valid'),
  password: zod
    .string()
    .min(6, {message: 'Must be at least 6 character'})
    .nonempty('Password is required'),
});
const registerSchema = zod
  .object({
    email: zod.string().nonempty('Email is required').email('Email is invalid'),
    name: zod.string().nonempty('Name is required'),
    password: zod
      .string()
      .min(6, {message: 'Must be at least 6 character'})
      .nonempty('Password is required'),
    confirmpassword: zod.string().nonempty('Confirm password is required'),
  })
  .refine(data => data.password === data.confirmpassword, {
    message: "Passwords don't match",
    path: ['confirmpassword'], // path of error
  });

const ResetPasswordValidation = zod
  .object({
    newpassword: zod
      .string()
      .min(6, {message: 'Must be at least 6 character'})
      .nonempty('New password field is required'),
    confirmpassword: zod
      .string()
      .nonempty('Confirm password field is required'),
  })
  .refine(data => data.newpassword === data.confirmpassword, {
    message: "Passwords don't match",
    path: ['confirmpassword'], // path of error
  });

const forgetPassword = zod.object({
  email: zod.string().nonempty('Email is required').email('Email is invalid'),
});

const Validation = {
  loginSchema,
  registerSchema,
  ResetPasswordValidation,
  forgetPassword,
};

export default Validation;
