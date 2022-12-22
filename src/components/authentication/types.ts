export interface LoginFormValues {
  username: string;
  password: string;
  branchId: number;
}

export interface LoginFormProps {
  onFinish: (values: LoginFormValues) => void;
}
