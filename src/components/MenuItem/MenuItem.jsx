function MenuItem({pizza}){
    return(
        <div className="menuBox">
            <h3>{pizza.name}</h3>
            <div className="photoBox">
                <img className="photo" key={pizza.id} src={pizza.image_path} ></img>
            </div>
            <div className="description">
                <p>{pizza.description}</p>
                <p>{pizza.price}</p>
            </div>
            <button>ADD TO CART</button>
        </div>
    )
}

export default MenuItem;