const Banner = ({ geoLocation, geoError }) => {
  return (
    <div className="banner__container">
      {geoError ? (
        <div>{geoError.message}</div>
      ) : (
        <h4>{`latitude ${geoLocation.latitude} longitude ${geoLocation.longitude}`}</h4>
      )}
    </div>
  );
};
export default Banner;
