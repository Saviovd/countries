import styled from "styled-components";

export const DashboardStyle = styled.div`
    width: 100%;
    min-height: calc(100vh - 80px);
    background-color: ${props => props.theme.colors.background};

    .countries_container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        gap: 30px 15px;
    }
`;