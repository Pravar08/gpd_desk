import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ElevatorIcon from '@mui/icons-material/Elevator';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import GroupRemoveIcon from '@mui/icons-material/GroupRemove';
import SavingsIcon from '@mui/icons-material/Savings';
// Styled container for all cards
const CardsContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '20px',
  margin: '20px 0',
});

// Styled card component
const Card = styled(Box)(({ theme }) => ({
  background: '#ffffff',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  padding: '20px',
  textAlign: 'center',
  width: '18%',
  minWidth: '150px',
  '& h4': {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px',
  },
  '& span': {
    fontSize: '16px',
    color: '#555',
  },
}));

// Custom card with icons and variant colors
const CardIcon = styled(Box)({
    width: '40px',
    height: '40px',
    margin: '0 auto 10px', // Centers the icon and adds spacing
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#555', // Default color for the icon
  });

const GreenCard = styled(Card)({
  borderLeft: '4px solid #4caf50',
});

const RedCard = styled(Card)({
  borderLeft: '4px solid #f44336',
});

const BlueCard = styled(Card)({
    borderLeft: '4px solid #2196f3', // Blue
  });
  
  const VioletCard = styled(Card)({
    borderLeft: '4px solid #9c27b0', // Violet
  });
  
  const YellowCard = styled(Card)({
    borderLeft: '4px solid #ffc107', // Yellow
  });
  const DarkCard = styled(Card)({
    borderLeft: '4px solid #3A4E61', // Yellow
  });

function TopCards() {
  return (
    <CardsContainer>
      <BlueCard>
        <CardIcon >
<PeopleAltIcon sx={{color:"#2196f3"}}fontSize='large'
/>
        </CardIcon>

<Typography variant="h4">Total Customers</Typography>
        <Typography variant="body1">1000+</Typography>
      </BlueCard>
      <GreenCard>
        <CardIcon ><ElevatorIcon color='success' fontSize='large'/></CardIcon>
        <Typography variant="h4">Active Customers</Typography>
        <Typography variant="body1">875</Typography>
      </GreenCard>
      <VioletCard>
        <CardIcon><PersonAddIcon sx={{color:'#9c27b0'}}fontSize='large'/></CardIcon>
        <Typography variant="h4">New Customers</Typography>
        <Typography variant="body1">243</Typography>
      </VioletCard>

      <YellowCard>
        <CardIcon ><SubscriptionsIcon color='warning' fontSize='large'/></CardIcon>
        <Typography variant="h4">Subscription Upgrade</Typography>
        <Typography variant="body1">243</Typography>
      </YellowCard>
      <RedCard>
        <CardIcon ><GroupRemoveIcon fontSize='large' color='error'/></CardIcon>
        <Typography variant="h4">Customer Churn Rate</Typography>
        <Typography variant="body1">243</Typography>
      </RedCard>
      <DarkCard>
        <CardIcon ><SavingsIcon fontSize='large' sx={{color:"#3A4E61"}}/></CardIcon>
        <Typography variant="h4">Total Revenue</Typography>
        <Typography variant="body1">₹11001</Typography>
      </DarkCard>
    </CardsContainer>
  );
}

export default TopCards;
