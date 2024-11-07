import CustomCard from "../components/card"
import NavBar from "../components/navBAr"

const HomeScreen =()=>{


    return(<>
    
    <section className="d-flex flex-column w-100 h-100">
    <NavBar/>
        <div className="d-flex flex-column justify-content-center text-center">
            <h1>E-Zomato</h1>
            <h4>Discover the best food & drinks</h4> 
        </div>

        <div className="d-flex justify-content-center gap-3 p-3"> 
            <CustomCard img={"./images/orderOnline.webp"} title={"Order Online"} content={"stay home order to your door step"} btnText={'Visit'} width={"14rem"} height={"14rem"}/>
            <CustomCard img={"./images/orderOnline.webp"} title={"Order Online"} content={"stay home order to your door step"} btnText={'Visit'} width={"14rem"} height={"14rem"}/>
            <CustomCard img={"./images/orderOnline.webp"} title={"Order Online"} content={"stay home order to your door step"} btnText={'Visit'} width={"14rem"} height={"14rem"}/>
        </div>

    </section>

  
    </>)

}
export default HomeScreen