import styled from "@emotion/styled";

export const CommonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
`

export const ContactsWrapper = styled.div`
    display: 'flex';
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.theme.colors.secondBgColor};
    width: 640px;
    height: 400px;
    padding: 20px;
    justify-content: center;
    `

export const PhonebookWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `

    