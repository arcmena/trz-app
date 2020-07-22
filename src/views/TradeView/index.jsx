import React, { useState, useEffect } from 'react';

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

export default () => {
    const [tradeWith, setTradeWith] = useState(null);
    const [activeTrade, setActiveTrade] = useState(true);

    const [survivorList, setSurvivorList] = useState([]);
    const [traderList, setTraderTradeList] = useState([]);

    const [survivorTrade, setSurvivorTrade] = useState({});
    const [traderTrade, setTraderTrade] = useState({});

    const [survivorPrice, setSurvivorPrice] = useState(0);
    const [traderPrice, setTraderPrice] = useState(0);

    const [price, setPrice] = useState({});
    const [tradeList, setTradeList] = useState({});

    const handleTraderChange = (e) => {};

    const handleTraderSubmit = (e) => {
        e.preventDefault();
    };

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
            //If it is, set the list
            const filteredItems = state.filter((select) => select !== item);
            func(filteredItems);
        } else {
            //If not insert in the list
            func([...state, item]);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTradeList({
            survivorTrade: survivorTrade,
            traderTrade: traderTrade,
        });
        console.log(tradeList);
        console.log(survivorPrice);
        console.log(traderPrice);
    };

    const handleChangeSurvivor = (e) => {
        const { name, value } = e.target;

        if (value === '') alert('Select an amount of items to trade');

        const price = checkPrice(name);
        setSurvivorPrice(survivorPrice + price * value);

        setSurvivorTrade({ ...survivorTrade, [name]: value });
        setTradeList({});
    };

    const handleChangeTrader = (e) => {
        const { name, value } = e.target;

        if (value === '') alert('Select an amount of items to trade');

        const price = checkPrice(name);
        setTraderPrice(traderPrice + price * value);

        setTraderTrade({ ...traderTrade, [name]: value });
        setTradeList({});
    };

    const checkPrice = (item) => {
        if (item === 'Water') {
            return 14;
        } else if (item === 'Food') {
            return 12;
        } else if (item === 'Medic-Supplies') {
            return 10;
        } else if (item === 'Weapon') {
            return 8;
        }
    };

    return (
        <Container>
            <Title>
                <span>TRADES</span>
                <h3>How to trade?</h3>
                <p>
                    1 - Put the name of the survivor you want to trade in the
                    field.
                </p>
                <p>
                    2 - Select a type of item of your inventory and what you
                    want to trade for in the other survivor's inventory.
                </p>
                <p>
                    Some rules: (1) Both sides of the trade should offer the
                    same values.
                </p>
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
                            <Price>{survivorPrice}</Price>

                            {survivorList.length === 0 &&
                            traderList.length === 0 ? (
                                <h3>Select at least one item</h3>
                            ) : (
                                <h3>For</h3>
                            )}

                            <form onChange={handleChangeTrader}>
                                {traderList.map((item, index) => (
                                    <SelecItem key={index}>
                                        <div>
                                            <span>{item}</span>
                                            <input
                                                name={item}
                                                type="text"
                                                placeholder="amount"
                                            />
                                        </div>
                                    </SelecItem>
                                ))}
                                <Price>{traderPrice}</Price>
                            </form>
                        </TradeInfos>
                        <ItemsDiv>
                            <span>Fulano's Inventory</span>
                            <Items
                                id="trader"
                                readOnly
                                borderColor="rgba(48, 48, 48, 0.35)"
                                borderTop
                                onClick={handleItemsClick}
                            />
                        </ItemsDiv>
                        <Results>
                            <label htmlFor="total">Total</label>
                            <Input type="text" name="total" readOnly />
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
