export const Loading = () => {
    return (
        <div style={{height: '100vh',marginLeft:'40%'}} className={"w-100  align-items-center justify-content-center"}>
            <h6 className={"text-warning m-2"} >Kuting...</h6>
            <div className="spinner-border text-warning" role="status">
                <span className="visually-hidden">.</span>
            </div>
        </div>
    )
}