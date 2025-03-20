function Friend ({v,onDelete,i})
{
    
    return (
			<div className='friend d-flex justify-content-around m-2'>
				<span className=" fs-4">{v}</span>
				<button className=" btn btn-danger" onClick={() => onDelete(i)}>X</button>
			</div>
		)
}
export default Friend;