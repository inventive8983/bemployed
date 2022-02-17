import { Box, Center, Flex } from '@chakra-ui/layout'
import { Route, Switch, useLocation, withRouter } from 'react-router'
import { ColorModeSwitcher } from '../ColorModeSwitcher'
import { Footer } from '../components/footer/App'
import { NavBar } from '../components/navbar/App'
import AppViews from '../views/pages'


function AppLayout() {

    return (
        <Box>
            <NavBar></NavBar>
            <Switch>
                <Route path="" component={AppViews} />
            </Switch>
            <Footer></Footer>
        </Box>
    )
}

export default withRouter(AppLayout)
