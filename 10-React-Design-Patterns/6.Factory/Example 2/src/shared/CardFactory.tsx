import ImageCard from "../components/ImageCard"
import ProfileCard from "../components/ProfileCard"
import TextCard from "../components/TextCard"

const CardFactory = ({type,data}:any) => {
    switch(type){
        case "image":
            return <ImageCard imageSrc={data.src} altText={data.alt} />
        case "profile":
            return <ProfileCard name={data.name} bio={data.bio} avatar={data.avatar} />
        case "text":
            return <TextCard text={data.text} />
        default:
            return <div>Unknown Card Type</div>
    }
}

export default CardFactory