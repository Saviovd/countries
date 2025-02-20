import styled from "styled-components";

export const CountryStyle = styled.div`
  background-color: ${(props) => props.theme.colors.background};

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 20px;

  margin: 0 auto;
  width: 100%;
  max-width: 1850px;
  height: calc(100vh - 80px);
  min-height: 550px;
  color: ${(props) => props.theme.colors.text};

  .back {
    background-color: ${(props) => props.theme.colors.secundary_background};
    font-size: 2rem;
    width: 140px;
    padding: 14px;
    border-radius: 8px;
    box-shadow: 15px 15px 28px 15px
      rgba(${(props) => props.theme.colors.secundary_text}, 0.08);
    text-align: center;
    margin-left: 50px;

    .back_anchor {
      color: ${(props) => props.theme.colors.text};

      &::before {
        content: "←";
        margin-right: 10px;
      }
    }

    @media screen {
      @media (max-width: 990px) {
        margin: 15px 0 15px 20px;
      }
    }
  }

  .country_box {
    display: flex;
    justify-content: space-evenly;

    .country_flag {
      max-width: 630px;
      max-height: 460px;
      object-fit: contain;

      @media screen {
        @media (max-width: 1250px) {
          max-width: 580px;
        }
        @media (max-width: 1100px) {
          max-width: 520px;
        }
        @media (max-width: 1100px) {
          max-width: 480px;
        }
        @media (max-width: 990px) {
          width: 95%;
          max-width: none;
          min-width: 300px;
        }
      }
    }

    .country_infos {
      position: relative;
      padding: 40px 0 50px 50px;

      width: 50%;
      min-width: 500px;
      height: 100%;

      display: flex;
      flex-direction: column;

      .country_name {
        font-size: 3.3rem;
        display: block;
        margin-bottom: 40px;
        width: 100%;
        font-weight: ${(props) => props.theme.wheight.weight800};
      }

      .country_datas {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        height: 52%;

        .country_about {
          width: 50%;
          height: 20%;
          font-weight: ${(props) => props.theme.wheight.weight600};
          font-size: 1.6rem;
          text-transform: capitalize;

          .country_data {
            color: ${(props) => props.theme.colors.secundary_text};
            font-weight: ${(props) => props.theme.wheight.weight300};
            margin-left: 7px;
            &::after {
                content: ',';
            }
            &:nth-last-child(1){

                ::after {
                    content: '';                
                }
            }
            
            @media screen {
              @media (max-width: 990px) {
                  margin: 10px 0 10px 7px;
              }
            }
        }
        
          @media screen {
            @media (max-width: 990px) {
              font-size: 1.9rem;
              height: 30px;
              width: 100%;
            }
          }
        }
        @media screen {
          @media (max-width: 990px) {
            height: auto;
            flex-flow: column nowrap;
          }
        }
      }

      @media screen {
        @media (max-width: 1030px) {
          min-width: 0;
          padding: 25px 0 0 30px;
        }
        @media (max-width: 990px) {
          width: 90%;
          padding: 40px 0 0 0;
          height: auto;
          position: initial;
        }
      }
    }

    @media screen {
      @media (max-width: 1030px) {
        justify-content: space-between;
      }
      @media (max-width: 990px) {
        flex-direction: column;
        // justify-content: center;
        align-items: center;
        width: 90%;
        margin: 0 auto;
      }
    }
  }

  .loading {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
  }

  @media screen {
    @media (max-width: 990px) {
      min-height: calc(100vh - 80px);
      height: auto;
      padding: 10px 0 45px 0;
    }
  }
`;
