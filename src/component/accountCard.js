import { ContactPageOutlined } from "@mui/icons-material";
import { Link, Typography, styled } from "@mui/material";
import React from "react";

 const StyledAccountContainer=styled('div')({
    padding:'10px',
    backgroundColor:'rgba(58,78,97,0.10)',
    borderRadius:'8px',
    margin:'10px'
}) 

 const StyledHeaderContainer=styled('div')({
    display:'flex',
    backgroundColor:'white',
    justifyContent:'space-between',
    padding:'5px',
    borderRadius:'8px'

})

 const IconTextContainer=styled('div')({
display:'flex',
gap:'5px',
color:'#3A4E61'
})

 const StyledLink=styled(Link)({
    textDecoration:'none',
    fontWeight:550,
    color:'#1976D2',
    fontSize:'16px',
    margin:'5px',
    cursor:'pointer',
    position:'relative',
    '&::after':{
        content:'""',
        position:'absolute',
        left:0,right:0,bottom:0,height:'1px',backgroundColor:'#1976D2'
    }
})

 const StyledHeading=styled(Typography)({
    fontWeight:600,
    padding:'2px',
    color:'#3A4E61',fontSize:'16px',
})

 const StyledUl=styled('ul')({
    padding:'10px',
    display:'flex',
flexDirection:'column',
gap:'5px'
})

 const ListContainer=styled('li')({
    listStyleType:'none',
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between'
})

 const  LeftListContainer=styled('span')({
    fontSize:'14px',
    width:'40%',
fontWeight:'bold',
display:'flex',
alignItems:'center',
justifyContent:'space-between',
color:'#3A4E61'
})

 const  ColonContainer=styled('span')({})

 const  RightListContainer=styled('span')({
    width:'60%',
    textAlign:'right',
    fontSize:'14px',
    color:'#3A4E61'
})



const AccountCard=()=>{
    return(
        <StyledAccountContainer>
     <StyledHeaderContainer>
        <IconTextContainer>
            <ContactPageOutlined fontSize="large"/>
            <StyledHeading>Account</StyledHeading>
        </IconTextContainer>
        <StyledLink>
            Account No
        </StyledLink>
     </StyledHeaderContainer>
     <StyledUl>
        <ListContainer>
            <LeftListContainer>
            Detail 1
            <ColonContainer>:</ColonContainer>
            </LeftListContainer>
            <RightListContainer>
            Value 1
            </RightListContainer>

        </ListContainer>
        <ListContainer>
            <LeftListContainer>
            Detail 1
            <ColonContainer>:</ColonContainer>
            </LeftListContainer>
            <RightListContainer>
            Value 1
            </RightListContainer>

        </ListContainer>
        <ListContainer>
            <LeftListContainer>
            Detail 1
            <ColonContainer>:</ColonContainer>
            </LeftListContainer>
            <RightListContainer>
            Value 1
            </RightListContainer>

        </ListContainer>
        <ListContainer>
            <LeftListContainer>
            Detail 1
            <ColonContainer>:</ColonContainer>
            </LeftListContainer>
            <RightListContainer>
            Value 1
            </RightListContainer>

        </ListContainer>
        <ListContainer>
            <LeftListContainer>
            Detail 1
            <ColonContainer>:</ColonContainer>
            </LeftListContainer>
            <RightListContainer>
            Value 1
            </RightListContainer>

        </ListContainer>
        <ListContainer>
            <LeftListContainer>
            Detail 1
            <ColonContainer>:</ColonContainer>
            </LeftListContainer>
            <RightListContainer>
            Value 1
            </RightListContainer>

        </ListContainer>
     </StyledUl>
        </StyledAccountContainer>
    )
}
export default AccountCard