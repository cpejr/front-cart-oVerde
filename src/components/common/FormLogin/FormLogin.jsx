import {
  Container,
  InputsDiv,
  DivPassword,
  InputPassword,
  Icon,
  ClosedEye,
  OpenedEye,
} from "./Styles";
import { Alert } from "../Alert";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { validador } from "./Utils";

export default function FormLogin({
  showEyeIcon = true,
  type = "text",
  placeholder,
  inputKey,
}) {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const inputType = showEyeIcon ? (showPassword ? "text" : "password") : "text";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(validador) });
  return (
    <Container>
      <InputsDiv>
        <DivPassword>
          <InputPassword
            {...register(inputKey)}
            error={errors}
            type={inputType}
            placeholder={placeholder}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {!!errors?.senha?.message && <Alert>{errors?.senha?.message}</Alert>}
          {showEyeIcon && (
            <Icon onClick={togglePasswordVisibility}>
              {showPassword ? <OpenedEye /> : <ClosedEye />}
            </Icon>
          )}
        </DivPassword>
      </InputsDiv>
    </Container>
  );
}
