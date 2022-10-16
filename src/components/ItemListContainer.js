const ItemListContainer = ({name,price}) => {
  return (
    <>
    <div>
    <p className="cardLeft">{name}</p>
    <span className="cardRight">${price}</span>
    </div>
    
    </>
  )
}
export default ItemListContainer