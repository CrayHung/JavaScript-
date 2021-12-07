//模擬數據
const data=["f1","g2","h3"]



const VDOM = (
    <div>
        <h2>操作介面</h2>
        <ul>
        {
            data.map((item,index)=>{
                return <li key={index}> {item} </li>
            })
        }
        </ul>
    </div>
)

ReactDOM.render(
VDOM,
document.getElementById('root')
);