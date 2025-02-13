import {
    Container,
    InputsDiv,
    DivPassword,
    InputPassword,
    Icon,
    ClosedEye,
    OpenedEye,
  } from "./Styles";
  import { useState } from "react";
  import { useForm } from "react-hook-form";
  import { zodResolver } from "@hookform/resolvers/zod";
  import { validationSchemaRegister } from "./Validators";

  
  export default function FormRegister({
    showEyeIcon = true,
    placeholder,
    inputKey,
  }) {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
    };
  
    const {
      register,
      formState: { errors },
    } = useForm({ resolver: zodResolver(validationSchemaRegister()) });
  
    return (
      <Container>
        <InputsDiv>
          <DivPassword>
            <InputPassword
              {...register(inputKey)}
              type={passwordVisible ? "text" : "password"}
              placeholder={placeholder}
            />
            {showEyeIcon && (
              <Icon onClick={togglePasswordVisibility}>
                {passwordVisible ? <OpenedEye /> : <ClosedEye />}
              </Icon>
            )}
          </DivPassword>
          {errors[inputKey] && <p>{errors[inputKey]?.message}</p>}
        </InputsDiv>
      </Container>
    );
  }
  