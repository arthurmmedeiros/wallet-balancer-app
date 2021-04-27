import { useSelector } from "../../Store/StoreHooks";
import TableItem from "./Components/TableItem";


const Wallet = () => {
    const stocks = useSelector(w => w.wallet.stocks);

    return(
        <div className='container'>
            <h1>My Wallet</h1>
            <div className='my-3'>                
                <button className='float-end btn btn-primary'>Add stock</button>
            </div>
            
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Stock Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total in wallet</th>
                        <th>% in wallet</th>
                        <th>Ideal % in wallet</th>
                        <th>Ideal total in wallet</th>
                        <th>Buy $</th>
                        <th>Buy/Un</th>
                    </tr>
                </thead>
                <tbody>
                {stocks?.map(s => 
                    <tr>
                        <td>{<TableItem value={s.name}/>}</td>
                        <td>{<TableItem value={s.price}/>}</td>
                        <td>{<TableItem value={s.quantity}/>}</td>
                        <td>{<TableItem value={s.totalInWallet}/>}</td>
                        <td>{<TableItem value={s.percentInWallet}/>}</td>
                        <td>{<TableItem value={s.idealPercentInWallet}/>}</td>
                        <td>{<TableItem value={s.idealTotalInWallet}/>}</td>                        
                        <td>{<TableItem value={s.shouldBuy}/>}</td>
                        <td>{<TableItem value={s.shouldBuyUnity}/>}</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    )
}

export default Wallet;