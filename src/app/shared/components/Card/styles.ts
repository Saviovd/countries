import styled from "styled-components";

export const CardStyle = styled.div`

.country {
    width: 270px;
    height: 350px;
    background-color: ${props => props.theme.colors.secundary_background};
    color: ${props => props.theme.colors.text};

    margin: 15px;
    border-radius: 6px;

    .country_flag {
        width: 100%;
        height: 45%;
        object-fit: cover;
        border-radius: 6px 6px 0 0;
    }

    .country_infos {
        height: 46%;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        .country_name {
            font-size: 1.7rem;
            font-weight: ${props => props.theme.wheight.weight800};
            margin-bottom: 8px;
        }

        .country_population, .country_region, .country_capital {
            text-transform: capitalize;
            font-size: 1.4rem;
            color: ${props => props.theme.colors.text};
            font-weight: ${props => props.theme.wheight.weight600};

            .country_data {
                font-size: 1.32rem;
                font-weight: ${props => props.theme.wheight.weight600};
                color: ${props => props.theme.colors.secundary_text};
            }
        }
    }
}
`