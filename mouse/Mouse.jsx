import "./Mouse.css";

function MouseTrail() {
  const [trail, setTrail] = useState([]);

  const handleMouseMove = (e) => {
    console.log(e);
    // const { clientX, clientY } = e;

    // setTrail((prevTrail) => [
    //   ...prevTrail,
    //   {
    //     left: clientX,
    //     top: clientY,
    //   },
    // ]);
  };

  return (
    <div className="mouse-trail" onMouseMove={handleMouseMove}>
      {/* {trail.map((point, index) => (
        <div
          key={index}
          className="trail-point"
          style={{
            left: point.left + "px",
            top: point.top + "px",
          }}
        />
      ))} */}
    </div>
  );
}

export default MouseTrail;
