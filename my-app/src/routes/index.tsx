import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/home-page';
import RegisterPage from '../pages/register-page';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/cadastrar" component={RegisterPage} />
    </Switch>
);

export default Routes;