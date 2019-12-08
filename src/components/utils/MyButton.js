import React from "react";
import Button from "@material-ui/core/Button";

import TicketIcon from "../../resources/images/icons/ticket.png";

const MyButton = ({ text, bck, color, link }) => {
  return (
    <Button
      href={link}
      variant='contained'
      size='small'
      style={{
        backgroundColor: bck,
        color: color
      }}
    >
      <img src={TicketIcon} className='iconImage' alt='icon_button' />
      {text}
    </Button>
  );
};

export default MyButton;
