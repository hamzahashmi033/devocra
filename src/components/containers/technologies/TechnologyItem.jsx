const TechnologyItem = ({img,title}) => {
    return (
        <div className="item">
            <img src={img} alt="" />
            <h3>{title}</h3>
        </div>
    )
}
export default TechnologyItem;