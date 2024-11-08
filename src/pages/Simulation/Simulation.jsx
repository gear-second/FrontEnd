import * as C from "./style";
import Exel from "../../assets/imgs/Exel.png";
import Break from "../../assets/imgs/break.png";
import Gear from "../../assets/imgs/gear.png";
import Side from "../../assets/imgs/sidebreaker.png";
import UseMultiPart from "../../hooks/useMultiPart";
import Img from "../../assets/imgs/calarmImg.png";
// import Video from "../../assets/calarm.mp4";

const Simulation = () => {
  const { FileData, data } = UseMultiPart();
  console.log(data);
  return (
    <C.Wrapper>
      <C.MainWrapper>
        {/* <video style={{ width: "100vw", height: "100vh", objectFit: "cover" }} autoPlay muted loop>
          <source src={Video} type="video/mp4" />
        </video> */}
        <button onClick={() => FileData(Img)}></button>
        <div
          style={{
            position: "absolute",
            width: 900,
            bottom: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <img src={Exel} alt="" style={{ width: 200, height: 200, background: "#fff" }} />
          <img src={Break} alt="" style={{ width: 200, height: 200, background: "#fff" }} />
          <img src={Gear} alt="" style={{ width: 100, height: 100, border: "solid", borderRadius: 100 }} />
          <img src={Side} alt="" style={{ width: 100, height: 100, border: "solid", borderRadius: 200 }} />
        </div>
      </C.MainWrapper>
    </C.Wrapper>
  );
};

export default Simulation;
