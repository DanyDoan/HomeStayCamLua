// Style
import "../assets/HomePage.css"

// Components
import Card from "../components/Card"

function HomePage(){
    return(
        <main>
            {/* <h2>This is Home Page</h2> */}
            <Card picUrl="/anh1.png" title={"Tựa đề"} content={"Nội dung"}/>
            <Card picUrl="/anh2.png" title={"Tựa đề"} content={"Nội dung"}/>
        </main>
    )
}

export default HomePage