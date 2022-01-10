import { Button, ButtonGroup } from '@chakra-ui/button'
import { Box, Flex, Text } from '@chakra-ui/layout'
import { AgGridColumn } from 'ag-grid-react'
import remittanceData from '../../assets/data/remittance.json'
import walletData from '../../assets/data/walletlogs.json'
import inventoryData from '../../assets/data/inventorylogs.json'
import shiipingData from '../../assets/data/shipping_charges.json'
import TableObjectRenderer from '../../components/table-components/object';
import React, { useEffect, useState } from 'react'

import AgTable from '../../components/codbrix-components/table'
import { useHistory, useLocation } from 'react-router'
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu'
import useWindowWidth from '../../scripts/width'
import { FaChevronDown } from 'react-icons/fa'

const categories = ["Registration Fees", "Providing Charges","Salary Commisions"]

function Billing(props) {

    const width = useWindowWidth()
    const history = useHistory()
    const location = useLocation()
    const [active, setActive] = useState()

    useEffect(() => {
        setActive(location.pathname.split('/')[3])
    }, [location])

    return (
        <Box>
            <Flex borderBottomWidth={1} alignItems="end">
                {width > (props.breakpoint || 992) ? 
                     <ButtonGroup spacing={0}>
                        {categories.map(category => <Button variant="ghost" onClick={() => history.push('/app/billing/' + category.toLowerCase().replace(/ /g, "-"))} boxSizing="border-box" borderBottom={active === category.toLowerCase().replace(/ /g, "-") && "red 2px solid"} py={7} rounded={0}>{category}</Button>)}
                    </ButtonGroup> :
                    <Menu>
                        <MenuButton textTransform="uppercase" as={Button} py={7} px={4} variant="ghost" rightIcon={<FaChevronDown />}>
                            {active && active.replace(/-/g, " ")}
                        </MenuButton>
                        <MenuList>
                            {categories.map(category => <MenuItem onClick={() => history.push('/app/billing/' + category.toLowerCase().replace(/ /g, "-"))}>{category}</MenuItem>)}
                        </MenuList>
                    </Menu>
                }
            </Flex>
            <Box>
            <Box overflowX="auto">
                {active === "registration-fees" && <AgTable rowData={walletData} offsetY={134}>
                            <AgGridColumn headerName="Date" field="date" />
                            <AgGridColumn field="txn_id" />
                            {/* <AgGridColumn headerName="Products" field="products" cellStyle={{padding: 0}} cellRendererParams={{title: "Products",fields:["name","sku", "quantity"], display:"accordion"}} cellRendererFramework={TableObjectRenderer} /> */}
                            <AgGridColumn headerName="Amount" field="amount" cellRendererFramework={(props) => <Text fontWeight="bold" color={props.value >= 0 ? "green.400" : "red.400"}>{props.value}</Text>} />
                            <AgGridColumn headerName="Current Balance" field="balance" />
                            <AgGridColumn headerName="Type" field="type" />
                            <AgGridColumn headerName="Remarks" field="remarks" />
                        </AgTable>}
                        {active === "providing-charges" && <AgTable rowData={walletData} offsetY={134}>
                            <AgGridColumn headerName="Date" field="date" />
                            <AgGridColumn field="txn_id" />
                            {/* <AgGridColumn headerName="Products" field="products" cellStyle={{padding: 0}} cellRendererParams={{title: "Products",fields:["name","sku", "quantity"], display:"accordion"}} cellRendererFramework={TableObjectRenderer} /> */}
                            <AgGridColumn headerName="Amount" field="amount" cellRendererFramework={(props) => <Text fontWeight="bold" color={props.value >= 0 ? "green.400" : "red.400"}>{props.value}</Text>} />
                            <AgGridColumn headerName="Current Balance" field="balance" />
                            <AgGridColumn headerName="Type" field="type" />
                            <AgGridColumn headerName="Remarks" field="remarks" />
                        </AgTable>}
                        {active === "salary-commisions" && <AgTable rowData={walletData} offsetY={134}>
                            <AgGridColumn headerName="Date" field="date" />
                            <AgGridColumn field="txn_id" />
                            {/* <AgGridColumn headerName="Products" field="products" cellStyle={{padding: 0}} cellRendererParams={{title: "Products",fields:["name","sku", "quantity"], display:"accordion"}} cellRendererFramework={TableObjectRenderer} /> */}
                            <AgGridColumn headerName="Amount" field="amount" cellRendererFramework={(props) => <Text fontWeight="bold" color={props.value >= 0 ? "green.400" : "red.400"}>{props.value}</Text>} />
                            <AgGridColumn headerName="Current Balance" field="balance" />
                            <AgGridColumn headerName="Type" field="type" />
                            <AgGridColumn headerName="Remarks" field="remarks" />
                        </AgTable>}
    </Box>
            </Box>
        </Box>
    )
}

export default Billing
