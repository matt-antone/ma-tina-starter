const Address = ({ address: { address1, address2, city, state, zip } }) => {
  return (
    <p>
      { address1 } {address2 ? `, ${address2}` : null }<br/>
      { city }, { state } { zip }
    </p>
  );
};

export default Address;