import styled from "styled-components";

export const BorderStyles = styled.div`
      position: absolute;
      bottom: 0;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      margin-top: 40px;
      min-width: 300px;

      .country_about {
        font-weight: ${(props) => props.theme.wheight.weight600};
        font-size: 1.4rem;
        text-transform: capitalize;

        @media screen {
          @media (max-width: 990px) {
            font-size: 1.9rem;
            width: 100%;
          }
        }
      }

      .country_border {
        box-shadow: 15px 15px 28px 15px
          rgba(${(props) => props.theme.colors.secundary_text}, 0.05);
        border-radius: 3px;
        margin: 2px 5px;
        padding: 6px 10px;
        min-width: 70px;
        background-color: ${(props) => props.theme.colors.secundary_background};

        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;

        .country_border-anchor {
          color: ${(props) => props.theme.colors.text};
          font-size: 1.4rem;

          @media screen {
            @media (max-width: 990px) {
              font-size: 1.9rem;
            }
          }
        }
      }
      @media screen {
        @media (max-width: 990px) {
          margin-top: 60px;
          position: inherit;
        }
      }
    
`