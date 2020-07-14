import styled from 'styled-components';

const Label = styled.label`
    padding: 5px 15px;
    text-align: right;

    color: ${({ theme }) => theme.mode === 'dark' ?
        theme.color.leading :
        theme.color.leading2
    };
    

    font-size: 1.2rem;
    letter-spacing: 1px;
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
`;

export default Label;