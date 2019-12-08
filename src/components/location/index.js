import React from "react";

const Location = () => {
  return (
    <div className='location_wrapper'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10959.767132403676!2d-75.24746616266292!3d40.00494275066872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c0ab228e4481%3A0x90ef736b062f35d1!2sWaldron%20Mercy%20Academy!5e0!3m2!1sru!2sua!4v1574711999910!5m2!1sru!2sua'
        width='100%'
        height='500px'
        frameBorder='0'
        allowFullScreen
      ></iframe>
      <div className='location_tag'>
        <div>location</div>
      </div>
    </div>
  );
};

export default Location;
