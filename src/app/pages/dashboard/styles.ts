import styled from "styled-components";

export const DashboardStyle = styled.div`
    width: 100%;
    min-height: calc(100vh - 80px);
    background-color: ${props => props.theme.colors.background};
    
    .dashboard_filters {
        height: 110px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 80px;

        .search_country {
            display: flex;
            align-items: center;
            background-color: ${props => props.theme.colors.secundary_background};
            box-shadow: 0 3px 10px rgb(${props => props.theme.colors.secundary_text}, 0.2);

            border: 0;
            padding-left: 20px;
            border-radius: 5px;

            .magnifying_glass {
                color: ${props => props.theme.colors.text};
                font-size: 2.5rem;
                margin-right: 15px;

            }
            .input_country {
                width: 350px;
                height: 45px;
                background-color: ${props => props.theme.colors.secundary_background};
                border: 0;
                color: ${props => props.theme.colors.text};
                font-size: 1.6rem;
                font-family: 'Nunito Sans', sans-serif;
                border-radius: 5px;
                &::placeholder {
                    font-size: 1.6rem;
                    color: rgba( ${props => props.theme.colors.secundary_text}, 0.7);
                }

                @media screen {
                    @media (max-width: 725px) {
                        width: 300px;
                    }
                }
            }

            @media screen {
                @media (max-width: 530px) {
                    width: 100%;
                }
            }
        }
        .region_choice {
            font-family: $--nunito-sans;
            text-align: center;
            width: 140px;
            height: 45px;
            background-color: ${props => props.theme.colors.secundary_background};
            color: ${props => props.theme.colors.text};
            font-size: 1.2rem;
            border: 0;
            box-shadow: 25px 15px 28px 15px rgba(${props => props.theme.colors.secundary_text}, 0.05);
            border-radius: 5px;
            cursor: pointer;

            .region_option {
                margin: 15px;
                font-size: 1.7rem;
            }

            @media screen {
                @media (max-width: 725px) {
                    width: 110px;
                }
                @media (max-width: 530px) {
                    width: 50%;
                    margin-top: 15px;
                }
            }
        }

        @media screen {
            @media (max-width: 725px) {
                padding: 0 20px;
            }
            @media (max-width: 530px) {
                padding: 25px 20px;
                flex-direction: column;
                align-items: flex-start;
                height: 155px;
            }
        }
    }

    .countries_container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
`;