import { useState } from 'react';
import { Container, Button } from 'reactstrap';
import { useSelector } from '../../Store/StoreHooks';
import TableItem from './Components/TableItem';
import AddStockModal from './Components/AddStockModal';

const Wallet = () => {
    const [addStockIsOpen, setAddOpen] = useState(false);
    const stocks = useSelector((w) => w.wallet.stocks);

    const toggleModal = () => setAddOpen(!addStockIsOpen);

    return (
        <>
            <Container>
                <div className="my-3 d-flex justify-content-between">
                    <h1>My Wallet</h1>
                    <Button
                        color="primary"
                        className="float-end"
                        onClick={toggleModal}
                        size="sm"
                    >
                        Add stock
                    </Button>
                </div>

                <table className="my-3 table table-striped">
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
                        {stocks?.map((s) => (
                            <tr>
                                <td>
                                    <TableItem value={s.name} />
                                </td>
                                <td>
                                    <TableItem value={s.price} />
                                </td>
                                <td>
                                    <TableItem value={s.quantity} />
                                </td>
                                <td>
                                    <TableItem value={s.totalInWallet} />
                                </td>
                                <td>
                                    <TableItem value={s.percentInWallet} />
                                </td>
                                <td>
                                    <TableItem value={s.idealPercentInWallet} />
                                </td>
                                <td>
                                    <TableItem value={s.idealTotalInWallet} />
                                </td>
                                <td>
                                    <TableItem value={s.shouldBuy} />
                                </td>
                                <td>
                                    <TableItem value={s.shouldBuyUnity} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Container>
            <AddStockModal isOpen={addStockIsOpen} toggleModal={toggleModal} />
        </>
    );
};

export default Wallet;
