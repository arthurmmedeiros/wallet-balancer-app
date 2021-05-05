import { FC } from 'react';
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Col,
} from 'reactstrap';
import { useForm } from 'react-hook-form';
import { useDispatch } from '../../../Store/StoreHooks';
import { WalletActions } from '../../../Store/Wallet/Actions';
import { IStock } from '../../../Store/Stock/Types';

interface IAddStockModal {
    isOpen: boolean;
    toggleModal: () => void;
}

interface StockForm {
    name: string;
    price: number;
    quantity: number;
    idealPercent: number;
}

const AddStockModal: FC<IAddStockModal> = ({ isOpen, toggleModal }) => {
    const dispatch = useDispatch();
    const {
        register,
        formState: { errors, isValid, isSubmitting },
        getValues,
        trigger,
        reset,
    } = useForm<StockForm>();

    const handleSave = (data: StockForm) => {
        console.log(data);

        console.log(errors);

        const newStock: IStock = {
            name: data.name,
            price: data.price,
            quantity: data.quantity,
            idealPercentInWallet: data.idealPercent,
        };

        dispatch({ type: WalletActions.AddStock, payload: newStock });
        reset();
        toggleModal();
    };

    return (
        <Modal isOpen={isOpen} toggle={toggleModal} size="lg">
            <Form>
                <ModalHeader>Add a new stock to your wallet</ModalHeader>
                <ModalBody>
                    <FormGroup row>
                        <Label sm={3} md={3} lg={3}>
                            Name
                        </Label>
                        <Col sm={9} md={9} lg={9}>
                            <Input
                                type="text"
                                id="stockName"
                                placeholder="Name of the stock"
                                invalid={
                                    errors.name &&
                                    errors.name.type === 'required'
                                }
                                {...register('name', { required: true })}
                            />
                            {errors.name && errors.name.type === 'required' && (
                                <div className="error">
                                    You must enter your name.
                                </div>
                            )}
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={3} md={3} lg={3}>
                            Price
                        </Label>
                        <Col sm={9} md={9} lg={9}>
                            <Input
                                type="number"
                                id="stockPrice"
                                placeholder="Enter the price"
                                invalid={
                                    errors.price &&
                                    errors.price.type === 'required'
                                }
                                {...register('price', { required: true })}
                            />
                            {errors.price &&
                                errors.price.type === 'required' && (
                                    <div className="text-danger">
                                        You must enter a price.
                                    </div>
                                )}
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={3} md={3} lg={3}>
                            Quantity
                        </Label>
                        <Col sm={9} md={9} lg={9}>
                            <Input
                                type="number"
                                id="stockQuantity"
                                placeholder="Enter the quantity of the stock"
                                invalid={
                                    errors.quantity &&
                                    errors.quantity.type === 'required'
                                }
                                {...register('quantity', { required: true })}
                            />
                            {errors.quantity &&
                                errors.quantity.type === 'required' && (
                                    <div className="text-danger">
                                        You must enter a quantity.
                                    </div>
                                )}
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={3} md={3} lg={3}>
                            Ideal % in wallet
                        </Label>
                        <Col sm={9} md={9} lg={9}>
                            <Input
                                type="number"
                                id="idealInWallet"
                                placeholder="Enter the ideal % of this stock"
                                invalid={
                                    errors.idealPercent &&
                                    errors.idealPercent.type === 'required'
                                }
                                {...register('idealPercent', {
                                    required: true,
                                })}
                            />

                            {errors.idealPercent &&
                                errors.idealPercent.type === 'required' && (
                                    <div className="text-danger">
                                        You must enter an ideal %.
                                    </div>
                                )}
                        </Col>
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={toggleModal}>Cancel</Button>
                    <Button
                        color="primary"
                        onClick={() =>
                            trigger().then(() => handleSave(getValues()))
                        }
                    >
                        Save
                    </Button>
                </ModalFooter>
            </Form>
        </Modal>
    );
};

AddStockModal.defaultProps = {
    isOpen: false,
    toggleModal: undefined,
};

export default AddStockModal;
