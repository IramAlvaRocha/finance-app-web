export interface RegisterUserForm {
  name: string;
  fatherSurname: string;
  motherSurname?: string;
  phoneNumber: string;
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}
