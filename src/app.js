import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Main from '@root/pages/Main';
import Menu from '@root/components/Menu/Menu';
import { Context, value } from './Context';

const App = () => {
    const [ctx, setCtx] = useState(value);
    
    useEffect(() => {
        document.body.style.overflow        = ctx.openMenu !== false ? "hidden" : "";
    }, [ctx]);

    return (
        <Context.Provider value={[ctx, setCtx]}>
            <Switch>
                <Route path="/" component={Main} exact />
                <Redirect to="/" />
            </Switch>
            <Menu />
        </Context.Provider >
    );
}
export default App;