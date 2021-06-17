const Main = (props) => {
    var i = 0;
    return (
        <div className="container-fluid">
            {props.allblogs.map((d) => {
                return (
                    <div key={i++} className="row">
                        <div className="col-md-8 offset-md-2" style={{backgroundColor: "#888", marginTop: 20, padding: 10}}>
                            <h2>{d.title}</h2>
                            <p>{d.content}</p>
                        </div>
                    </div>
                )
            })}       
        </div>
    )
}

export default Main
