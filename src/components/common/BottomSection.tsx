import Allied from "../../assets/imgs/allied.png"
import Graebel from "../../assets/imgs/graebel.png"
import National from "../../assets/imgs/national.png"
import NorthAmerican from "../../assets/imgs/north-american.png"
import United from "../../assets/imgs/united.png"

const BottomSection = () => {
    return (
        <>
            <div className="text-blue-300 text-[17px] font-semibold mb-[30px]">
                Nearly 10 million competitive rates provided by companies like
            </div>
            <div className="flex items-center justify-between">
                <img src={Allied} alt="allied-img" />
                <img src={United} alt="united-img" />
                <img src={National} alt="national-img" />
                <img src={NorthAmerican} alt="NA-img" />
                <img src={Graebel} alt="graebel-img" />
            </div>
        </>
    )
}

export default BottomSection;