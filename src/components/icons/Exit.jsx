const Exit = ({ active }) => {
  return (
    <svg
      onClick={() => active()}
      version="1.1"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: 30, height: 30, cursor: 'pointer', marginLeft: 15 }}
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <g id="grid_system" />
      <g id="_icons">
        <g>
          <path d="M21.9,10.6c-0.1-0.1-0.1-0.2-0.2-0.3l-2-2c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l0.3,0.3H16c-0.6,0-1,0.4-1,1s0.4,1,1,1h2.6    l-0.3,0.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l2-2c0.1-0.1,0.2-0.2,0.2-0.3C22,11.1,22,10.9,21.9,10.6z    " />
          <path d="M17,14c-0.6,0-1,0.4-1,1v1c0,0.6-0.4,1-1,1h-1V8.4c0-1.3-0.8-2.4-1.9-2.8L10.5,5H15c0.6,0,1,0.4,1,1v1c0,0.6,0.4,1,1,1    s1-0.4,1-1V6c0-1.7-1.3-3-3-3H5c0,0,0,0,0,0C4.9,3,4.8,3,4.7,3.1c0,0,0,0,0,0c-0.1,0-0.2,0.1-0.2,0.1c0,0,0,0,0,0c0,0,0,0-0.1,0.1    C4.3,3.3,4.2,3.4,4.2,3.5c0,0,0,0,0,0.1C4.1,3.6,4,3.7,4,3.8c0,0,0,0,0,0c0,0,0,0,0,0.1C4,3.9,4,4,4,4v14c0,0.4,0.3,0.8,0.6,0.9    l6.6,2.5c0.2,0.1,0.5,0.1,0.7,0.1c0.4,0,0.8-0.1,1.1-0.4c0.5-0.4,0.9-1,0.9-1.6V19h1c1.7,0,3-1.3,3-3v-1C18,14.5,17.6,14,17,14z     M6,17.3V5.4l5.3,2C11.7,7.6,12,8,12,8.4V18c0,0,0,0,0,0l0,1.5L6,17.3z" />
        </g>
      </g>
    </svg>
  );
};

export default Exit;
