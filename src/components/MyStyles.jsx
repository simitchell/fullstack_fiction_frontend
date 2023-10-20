import styled from 'styled-components';

export const OuterContainer = styled.div`

    display: flex;
    flex-direction: column;
    width: 100%;
    margin: auto;
    
    h1 {
        color: black;
    }

    .topDisplay {
      width: 35%;
      margin: auto;
      li {
        text-align: left;
      }
    }

    .cardDisplay {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        max-width: 1400px;
        margin: auto;
        padding: auto;
        justify-content: space-evenly;
    }

    .card {
        display: flex;
        flex-direction: column;
        max-width: 600px;
        border: none;
        background-color: #e2e2e2;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        border-radius: 25px;
        margin: 1rem;
        padding: 1rem;
        
        h2 {
            margin-top: 0;
        }
        
        .cardInfo {
            display: flex;
            flex-direction: row;
        }
        
        .returnInfo {
            display: flex;
            flex-direction: column;
            text-align: left;
            padding: 1rem;
            
            span {
                margin-bottom: 1rem;
            }
        }
    }  
`