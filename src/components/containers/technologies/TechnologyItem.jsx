const TechnologyItem = ({img,title}) => {
    return (
        <div className="item">
            <img src={img} alt="" />
            <h2>{title}</h2>
        </div>
    )
}
export default TechnologyItem;