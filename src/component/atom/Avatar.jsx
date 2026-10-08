

const Avatar = ({src,alt,className=""})=>{
    return(
        <img
        src={src}
        alt={alt}
        className={"w-10 rounded-full object-fill"}
        />

    )
}

export default Avatar