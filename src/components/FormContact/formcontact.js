import React from 'react';
import useForm from '../../hooks/useForm.js';

import * as S from './styled';

export const FormContact = () => { 
    const [{ values, loading }, handleChange, handleSubmit] = useForm();

    const enviarContato = () => {
        // faça o que for preciso :)
        console.log(values);
    };
    return (
        <S.FormContactWrapper>
            <S.FormContactContainer>
                <S.FormContactContent>
                    <S.FormContactPrevious>
                        Previous
                    </S.FormContactPrevious>
                    <S.FormContactBox onSubmit={handleSubmit(enviarContato)}>
                        <S.FromContactBoxTitle>
                            Olá, queremos te conhecer melhor!
                        </S.FromContactBoxTitle>
                        <S.FromContactBoxSubTitle>
                            Para ter um atendimento mais direcionado precisamos de algumas informações sobre você
                        </S.FromContactBoxSubTitle>
                        <S.FromContactBoxInput
                            onChange={handleChange}
                            name="nome"
                            type="text"
                            placeholder="Qual é seu nome?"
                        />
                        <S.FromContactBoxInput
                            onChange={handleChange}
                            name="email"
                            type="email"
                            placeholder="E-mail"
                        />
                        <S.FromContactBoxInput
                            onChange={handleChange}
                            name="telefone"
                            type="tel"
                            placeholder="E-mail"
                        />
                        <S.FromContactBoxInput
                            onChange={handleChange}
                            name="empresa"
                            type="text"
                            placeholder="Você representa alguma empresa ?"
                        />
                        <S.FormContactBoxCheckDiv>
                            <S.FormContactBoxCheck 
                                type="checkbox" 
                            />
                            <S.FormContactBoxCheckText>
                                Gostaria de receber contato apenas por <S.Bold>E-mail</S.Bold>.
                            </S.FormContactBoxCheckText>
                        </S.FormContactBoxCheckDiv>
                        <S.FormContactBoxButton type="submit">{loading ? "Eviando ..." : "Enviar"}</S.FormContactBoxButton>
                    </S.FormContactBox>
                </S.FormContactContent>
            </S.FormContactContainer>
        </S.FormContactWrapper>
    );
};