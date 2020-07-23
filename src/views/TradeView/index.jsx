import React, { useContext, useState, useEffect } from 'react';

import {
    Container,
    Title,
    TradeWrapper,
    ItemsDiv,
    ActiveTrade,
    SelecItem,
    TradeInfos,
    Price,
    Results,
    Survivor,
} from './styles';

import { Items, Input, Button } from '../../components';

import api from '../../service/api';

import { UserContext } from '../../config/contexts/UserContext';

export default () => {
    const { userData } = useContext(UserContext);

    const [infos, setInfos] = useState(false);

    const [tradeWith, setTradeWith] = useState({});
    const [activeTrade, setActiveTrade] = useState(false);

    //Out of time to make inventories work:/
    const [userInv, setUserInv] = useState({});
    const [traderInv, setTraderInv] = useState([]);

    const [survivorList, setSurvivorList] = useState([]);
    const [traderList, setTraderTradeList] = useState([]);

    const [pick, setPick] = useState([]);
    const [payment, setPayment] = useState([]);

    const [survivorPrice, setSurvivorPrice] = useState(0);
    const [traderPrice, setTraderPrice] = useState(0);

    // eslint-disable-next-line no-unused-vars
    const [price, setPrice] = useState({});

    useEffect(() => {
        api.get(`/inventory/${userData.name}`)
            .then(({ user, inv }) => setUserInv(inv))
            .catch((error) => console.error(error));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleTraderChange = (e) => {
        setTradeWith(e.target.value);
    };

    const handleTraderSubmit = (e) => {
        e.preventDefault();

        api.get(`/inventory/${tradeWith}`)
            .then(({ data }) => {
                setTraderInv(data.inv);
                setActiveTrade(true);
            })
            .catch((error) => console.error(error));
    };

    //Handle select items

    const handleItemsClick = (e) => {
        if (!e.target.id) return;

        const item = String(e.target.id).split(' ');

        if (item[0] === 'survivor') {
            handleItems(item[1], survivorList, setSurvivorList);
        } else {
            handleItems(item[1], traderList, setTraderTradeList);
        }
    };

    const handleItems = (item, state, func) => {
        //Check if the item is already selected
        const alreadySelec = state.findIndex((select) => select === item);
        if (alreadySelec >= 0) {
            //If it is, set the list without the item
            const filteredItems = state.filter((select) => select !== item);
            func(filteredItems);
        } else {
            //If not insert in the list
            func([...state, item]);
        }
    };

    //Handle the results

    //Handle data
    const handleSubmit = (e) => {
        e.preventDefault();

        if (pick.length === 0 || payment.length === 0) {
            alert(
                'Select at least one item of each inventory and the quantity.'
            );
        } else {
            api.post(`/trade/${userData.user.accessKey}`, {
                traderName: tradeWith,
                pick: pick,
                payment: payment,
            })
                .then(({ data }) => {
                    alert(data.message);
                    setActiveTrade(false);
                })
                .catch((error) => console.error(error));
        }
    };

    //Handle the values, pick and pay lists
    const handleChangeSurvivor = (e) => {
        const { name, value } = e.target;

        const priceId = checkPrice(name);
        setSurvivorPrice(survivorPrice + priceId[1] * Number(value));

        // check if pick already have the id
        const check = pick.map((item) => item.id === priceId[0]);

        //if it has, bring a index to do a condition
        const alreadyHasValue = check.findIndex((index) => index === true);

        if (alreadyHasValue >= 0) {
            const insertNewValue = pick.filter(
                (item) => item.id !== priceId[0]
            );

            //find all the picks that has different ids and set the new list with the new value
            setPick([
                ...insertNewValue,
                { id: priceId[0], qtd: Number(value) },
            ]);
        } else {
            //if it isn't in the list just set normally
            setPick([...pick, { id: priceId[0], qtd: Number(value) }]);
        }
    };

    const handleChangeTrader = (e) => {
        const { name, value } = e.target;

        const priceId = checkPrice(name);
        setTraderPrice(traderPrice + priceId[1] * Number(value));

        // check if pick already have the id
        const check = payment.map((item) => item.id === priceId[0]);

        //if it has, bring a index to do a condition
        const alreadyHasValue = check.findIndex((index) => index === true);

        if (alreadyHasValue >= 0) {
            const insertNewValue = pick.filter(
                (item) => item.id !== priceId[0]
            );

            //find all the picks that has different ids and set the new list with the new value
            setPayment([
                ...insertNewValue,
                { id: priceId[0], qtd: Number(value) },
            ]);
        } else {
            //if it isn't in the list just set normally
            setPayment([...payment, { id: priceId[0], qtd: Number(value) }]);
        }
    };

    const checkPrice = (item) => {
        if (item === 'Water') {
            return [4, 14];
        } else if (item === 'Food') {
            return [3, 12];
        } else if (item === 'Medic-Supplies') {
            return [2, 10];
        } else if (item === 'Weapon') {
            return [1, 8];
        }
    };

    const handleInfos = () => {
        if (infos === false) {
            setInfos(true);
        } else {
            setInfos(false);
        }

        console.log(infos);
    };

    return (
        <Container>
            <Title>
                <span>TRADES</span>
                <h3 onClick={handleInfos}>How to trade?</h3>
                {infos ? (
                    <div>
                        <p>
                            1 - Put the name of the survivor you want to trade
                            in the field.
                        </p>
                        <p>
                            2 - Select a type of item of your inventory and what
                            you want to trade for in the other survivor's
                            inventory.
                        </p>
                        <p>
                            Some rules: (1) Both sides of the trade should offer
                            the same values.
                        </p>
                    </div>
                ) : (
                    <div></div>
                )}
            </Title>
            <TradeWrapper>
                <ItemsDiv>
                    <span>Your Inventory</span>
                    <Items
                        id="survivor"
                        readOnly
                        borderColor="rgba(48, 48, 48, 0.35)"
                        onClick={handleItemsClick}
                        borderTop
                        values={userInv.inv}
                    />
                </ItemsDiv>
                {activeTrade ? (
                    <ActiveTrade>
                        <TradeInfos>
                            <form onChange={handleChangeSurvivor}>
                                {survivorList.map((item, index) => (
                                    <SelecItem key={index}>
                                        <span>{item}</span>
                                        <input
                                            name={item}
                                            type="text"
                                            placeholder="amount"
                                        />
                                    </SelecItem>
                                ))}
                            </form>
                            <Price>
                                <h4>Value: {survivorPrice}</h4>
                            </Price>

                            {survivorList.length === 0 &&
                            traderList.length === 0 ? (
                                <h3>Select at least one item</h3>
                            ) : (
                                <h3>For</h3>
                            )}

                            <form onChange={handleChangeTrader}>
                                {traderList.map((item, index) => (
                                    <SelecItem key={index}>
                                        <span>{item}</span>
                                        <input
                                            name={item}
                                            type="text"
                                            placeholder="amount"
                                        />
                                    </SelecItem>
                                ))}
                            </form>
                            <Price>
                                <h4>Value: {traderPrice}</h4>
                            </Price>
                        </TradeInfos>
                        <ItemsDiv>
                            <span>{tradeWith}'s Inventory</span>
                            <Items
                                id="trader"
                                readOnly
                                borderColor="rgba(48, 48, 48, 0.35)"
                                borderTop
                                onClick={handleItemsClick}
                                values={traderInv}
                            />
                        </ItemsDiv>
                        <Results>
                            <Button
                                outlined
                                type="submit"
                                onClick={handleSubmit}
                            >
                                <span>TRADE</span>
                            </Button>
                        </Results>
                    </ActiveTrade>
                ) : (
                    <Survivor
                        onChange={handleTraderChange}
                        onSubmit={handleTraderSubmit}
                    >
                        <label htmlFor="traderId">Trade with:</label>
                        <Input
                            type="text"
                            id="traderId"
                            name="traderId"
                            placeholder="Survivor full name"
                        />
                    </Survivor>
                )}
            </TradeWrapper>
        </Container>
    );
};
