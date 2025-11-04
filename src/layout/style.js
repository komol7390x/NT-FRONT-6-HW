import styled from "@emotion/styled";
import { COLOR } from "../config/color";
import { IconButton } from "@mui/material";

export const SearchInput = styled.input`
    padding-top: 16px;
    padding-bottom: 16px;
    border: none;
    outline: none;
    border-bottom:2px solid rgba(0, 0, 0, 0.5);
    width: 100%;
    &:focus{
        border-color:${COLOR.primary};
    }
`

export const CustomIconButton = styled(IconButton)`
    position: absolute;
    right: 0;
    bottom: 12px;
`

export const CustomButton = styled(IconButton)`
    &:hover{
        color: ${COLOR.primary};
    }
`