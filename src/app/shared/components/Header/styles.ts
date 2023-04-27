import styled from "styled-components";

export const HeaderStyle = styled.div`
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 80px;
    background-color: ${props => props.theme.colors.secundary_background};

        .page_title {
            font-size: 2.5rem;
            font-weight: ${props => props.theme.wheight.weight800};
            color: ${props => props.theme.colors.text};

            @media screen {
                @media (max-width: 470px) {
                    font-size: 2rem;
                }
                @media (max-width: 375px) {
                    font-size: 1.7rem;
                }
            }
        }

        .toggle_theme {
            display: flex;
            align-itens: center;
            justify-content: space-evenly;
            width: 120px;
            cursor: pointer;
            
            .moon {
                font-size: 1.5rem;
                color: ${props => props.theme.colors.text};

                @media screen {
                    @media (max-width: 470px) {
                        font-size: 1.4rem;
                    }
                }
            }

            .theme {
                font-size: 1.5rem;
                color: ${props => props.theme.colors.text};
                font-weight: ${props => props.theme.wheight.weight800};

                @media screen {
                    @media (max-width: 470px) {
                        font-size: 1.4rem;
                    }
                }
            }
        @media screen {
            @media (max-width: 470px) {
                width: 100px
            }
        }
    }
    @media screen {
        @media (max-width: 670px) {
            padding: 0 20px;
        }
        @media (max-width: 375px) {
            padding: 0 10px;
        }
    }
`