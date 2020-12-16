const InfoBox = ({info: {id,title, time, catTitle, lng, lat}, onClose}) => {
    return (
        <div className="info-box">
            <span className="info-box-close" onClick={onClose}>X</span>
            <h2>Event Information</h2>
            <p>ID: <strong>{id}</strong></p>
            <p>Title: <strong>{title}</strong></p>
            <p>Category: <strong>category</strong></p>
            <p>Time: <strong>{new Date(time).toDateString()}</strong></p>
            <p>Coords: <strong>{lat}, {lng}</strong></p>
        </div>
    );
};

export default InfoBox;