import HomeSection1 from "./HomeSection1/HomeSection1";
import HomeSection2 from "./HomeSection2/HomeSection2";
import HomeSection3 from "./HomeSection3/HomeSection3";
import HomeSection4 from "./HomeSection4/HomeSection4";

function Home(){
    return(
        <div className="home-s1-bg">
            <HomeSection1/>
            <hr></hr>
            <HomeSection2/>
            <hr style={{marginTop:40}}></hr>
            <HomeSection3/>
            <hr style={{marginTop:40}}></hr>
            <HomeSection4/>
        </div>
    )
}
export default Home;