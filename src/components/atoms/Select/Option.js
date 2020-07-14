import styled from 'styled-components';

const Option = styled.option`
    background-color: ${({ theme }) => theme.mode === 'dark' ?
        theme.color.dark :
        theme.color.light
    };
    border: none;
`;

export default Option;