import styled from 'styled-components';

export const outerMostDiv = styled.div

export const OuterContainer = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: auto;
    
    .topDisplay {
        display: flex;
        margin: auto;
    }
    
    .topContainer {
        display: flex;
        flex-direction: row;
        padding: 1rem;
        width: 600px;

        .inputSection {
            display: flex;
            flex-direction: column;
            margin: auto;

        input {
            font-size: 1.2rem;
        }

        button {
            background: radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%);
            margin-top: 1rem;
            color: whitesmoke;
        }
    }
    }

    .j5image {
        max-width: 300px;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 29px 0px;
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