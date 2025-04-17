import { ContactPageOutlined,
} from "@mui/icons-material";
import { IconButton, Link, Typography, styled } from "@mui/material";
import React from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
// import EditDocumentIcon from '@mui/icons-material/EditDocument';
import EditNoteIcon from '@mui/icons-material/EditNote';
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
    color:'#3A4E61',fontSize:'16px',marginTop:'4px'
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



const AccountCard=({data})=>{
    return(
        <StyledAccountContainer>
     <StyledHeaderContainer>
        <IconTextContainer>
            <ContactPageOutlined fontSize="large"/>
            <StyledHeading>{data.company_name}</StyledHeading>
        </IconTextContainer>
        <IconTextContainer>
       <IconButton>
<EditNoteIcon/></IconButton>
<IconButton>
<DeleteForeverIcon/>

</IconButton>

        </IconTextContainer>

     </StyledHeaderContainer>
     <StyledUl>
        <ListContainer>
            <LeftListContainer>
           Company Type
            <ColonContainer>:</ColonContainer>
            </LeftListContainer>
            <RightListContainer>
            {data.company_type}
            </RightListContainer>

        </ListContainer>
        <ListContainer>
            <LeftListContainer>
            Contact No.
            <ColonContainer>:</ColonContainer>
            </LeftListContainer>
            <RightListContainer>
            {data.official_contact}
            </RightListContainer>

        </ListContainer>
        <ListContainer>
            <LeftListContainer>
            Contact Person 
            <ColonContainer>:</ColonContainer>
            </LeftListContainer>
            <RightListContainer>
            {data.contact_name}
            </RightListContainer>

        </ListContainer>
        <ListContainer>
            <LeftListContainer>
            Official Contact
            <ColonContainer>:</ColonContainer>
            </LeftListContainer>
            <RightListContainer>
            {data.mobile}
            </RightListContainer>

        </ListContainer>
        <ListContainer>
            <LeftListContainer>
            Email
            <ColonContainer>:</ColonContainer>
            </LeftListContainer>
            <RightListContainer>
           {data.email}
            </RightListContainer>

        </ListContainer>
        <ListContainer>
            <LeftListContainer>
           Location
            <ColonContainer>:</ColonContainer>
            </LeftListContainer>
            <RightListContainer>
           {data.state}
            </RightListContainer>

        </ListContainer>
       
     </StyledUl>
        </StyledAccountContainer>
    )
}
export default AccountCard